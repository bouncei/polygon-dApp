import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'

import { nftaddress, nftmarketaddress } from '../config'
import MainCard from '../components/MainCard'
// Importing the ContractABIs
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import Hero from '../components/Hero'
const Home = () => {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  useEffect(() => {
    // Invoke asynchrous function
    loadNFTs()
  }, [])

  async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider()
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider
    )

    // Fetching data for market Items in the NFT marketplace
    const data = await marketContract.fetchMarketItems()

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId)
        const meta = await axios.get(tokenUri)
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')

        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        }
        return item
      })
    )
    setNfts(items)
    setLoadingState('loaded')
  }

  async function buyNft(nft) {
    // Connecting MetaMask Wallet Using Web3Modal Package
    const web3modal = new Web3Modal()
    const connection = await web3modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)

    const signer = provider.getSigner()
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')

    const transaction = await contract.createMarketSale(
      nftaddress,
      nft.tokenId,
      { value: price }
    )
    await transaction.wait()
    loadNFTs()
  }

  if (loadingState === 'loaded' && !nfts.length)
    return <h1 className="px-20 py-10 text-3xl">No NFTs in the marketplace</h1>

  return (
    <>
      <Hero />
      <div className="mt-10 flex justify-center">
        <div className="max-w-screen-2xl px-4">
          <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
            {nfts.map((item, index) => (
              <MainCard
                key={index}
                image={item.image}
                description={item.description}
                name={item.name}
                item={item}
                price={item.price}
                buyNft={() => buyNft(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import axios from 'axios'

import { nftaddress, nftmarketaddress } from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

function Dashboard() {
  const [assets, setAssets] = useState([])
  const [sold, setSold] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  useEffect(() => {
    getNFTs()
  }, [])

  const getNFTs = async () => {
    const web3modal = new Web3Modal()
    const connection = await web3modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      signer
    )
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    const data = await marketContract.fetchItemsCreated()

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
        }

        return item
      })
    )

    const soldItems = items.filter((i) => i.sold)

    setSold(soldItems)
    setAssets(items)
    setLoadingState('loaded')
  }

  if (loadingState === 'loaded' && !assets.length)
    return (
      <h1 className="p-5 py-20 text-center text-4xl font-medium">
        No asset in creator dashboard{' '}
        <a
          href="/create-nft"
          className=" text-blue-400 hover:text-blue-300 hover:underline"
        >
          create
        </a>{' '}
        a digital asset.
      </h1>
    )

  return (
    <div>
      <div className="m-4 p-4">
        <h2 className="p-5 py-2 text-left text-3xl font-medium">
          Assets Listed
        </h2>
        <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          {assets.map((nft, i) => (
            <div key={i} className="overflow-hidden rounded-xl border shadow">
              <div className="flex justify-center">
                <img
                  src={nft.image}
                  className=" h-full w-full rounded object-cover md:aspect-auto md:h-[30vh]"
                />
              </div>
              <div className="bg-[#d279d2] p-4">
                <p className="text-2xl font-bold text-white">
                  Price - {nft.price} MATIC
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Sold Items */}
    </div>
  )
}

export default Dashboard

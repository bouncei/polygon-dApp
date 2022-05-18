import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import axios from 'axios'

import { nftaddress, nftmarketaddress } from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

function MyNFTs() {
  const [assets, setAssets] = useState([])
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
    const data = await marketContract.fetchMyNFTs()

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

    setAssets(items)
    setLoadingState('loaded')
  }

  const listNFT = (item) => {
    console.log(item)
  }

  if (loadingState === 'loaded' && !assets.length)
    return (
      <h1 className="px-20 py-10 text-3xl">
        No assets owned{' '}
        <a
          href="/explore"
          className=" text-blue-400 hover:text-blue-300 hover:underline"
        >
          buy
        </a>{' '}
        a digital asset.
      </h1>
    )

  return (
    <div className="flex justify-center">
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          {assets.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-xl border shadow">
              <img src={item.image} className="rounded" />
              <div className="bg-black p-4">
                <p className="text-2xl font-bold text-white">
                  Price - {item.price} Eth
                </p>
                <button
                  className="mt-4 w-full rounded bg-pink-500 py-2 px-12 font-bold text-white"
                  onClick={() => listNFT(item)}
                >
                  List
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyNFTs

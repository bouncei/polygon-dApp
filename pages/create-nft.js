import { useState } from 'react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import { create } from 'ipfs-http-client'

const client = create('https://ipfs.infura.io:5001/api/v0')
import { nftaddress, nftmarketaddress } from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import Image from 'next/image'
// import { url } from 'inspector'

export default function CreateItem() {
  const [fileUrl, setFileUrl] = useState(null)
  const [formInput, updateFormInput] = useState({
    price: '',
    name: '',
    description: '',
  })
  const router = useRouter()

  // onChange Event Handler for the nft upload and set the state of fileUrl
  async function onChange(e) {
    const file = e.target.files[0]
    try {
      // Saving the inputted file to IPFS
      const added = await client.add(file, {
        // Shows the progress of the uploading NFT file
        progress: (prog) => console.group(`recieved: ${prog}`),
      })

      // Getting the fileUrl just from IPFS
      const url = `https://ipfs.infura.io/ipfs/${added.path}`

      setFileUrl(url)
    } catch (e) {
      console.log(e)
    }
  }

  // Asynchorous Function to creates an item and save it to IPFS
  async function createItem() {
    const { price, name, description } = formInput
    if (!price || !name || !description || !fileUrl) return

    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    })

    try {
      const added = await client.add(data)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      // After the file has been uploaded to IPFS, pass the URL to save it on Polygon
      CreateSale(url)
    } catch (error) {
      console.log('An error occurred while uploading the file: ', error)
    }
  }

  async function CreateSale(url) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()

    // console.log('The connection has been activated', connection)
    const provider = new ethers.providers.Web3Provider(connection)
    // console.log('The provider', provider)

    const signer = provider.getSigner()

    let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
    let transaction = await contract.createToken(url)
    // console.log('1st', transaction)
    let tx = await transaction.wait()

    let event = tx.events[0]
    let value = event.args[2]
    let tokenId = value.toNumber()

    const price = ethers.utils.parseUnits(formInput.price, 'ether')

    contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()

    transaction = await contract.createMarketItem(nftaddress, tokenId, price, {
      value: listingPrice,
    })
    // console.log('2nd', transaction)

    await transaction.wait()
    router.push('/')
  }

  return (
    <div className="overflow-hidden">
      <h1 className="p-5 py-20 text-center text-4xl font-medium">
        Create Digital Asset
      </h1>
      <div className="flex justify-center">
        <div className="flex w-1/2 flex-col pb-12">
          <input
            placeholder="NFT Name"
            className="mt-8 rounded-lg border p-4"
            onChange={(e) =>
              updateFormInput({ ...formInput, name: e.target.value })
            }
          />
          <textarea
            placeholder="NFT Description"
            className="mt-2 rounded-lg border p-4"
            onChange={(e) =>
              updateFormInput({ ...formInput, description: e.target.value })
            }
          />

          <input
            placeholder="NFT Price in Matic"
            className="mt-2 rounded-lg border p-4"
            onChange={(e) =>
              updateFormInput({ ...formInput, price: e.target.value })
            }
          />

          <input type="file" name="NFT" className="my-4" onChange={onChange} />
          {fileUrl && (
            <img
              className="mt-4 h-80 w-80 rounded-lg object-contain"
              src={fileUrl}
              alt=""
            />
          )}

          <button
            onClick={createItem}
            className="mt-4 rounded-lg bg-[#BF40BF] p-4 font-bold text-white shadow-lg hover:bg-[#d279d2]"
          >
            Create Digital Asset
          </button>
        </div>
      </div>
    </div>
  )
}

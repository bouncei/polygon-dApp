import React from 'react'
import Router from 'next/router'
import Image from 'next/image'

function MainCard({ description, name, price, image, item, buyNft }) {
  return (
    <div
      className="relative my-6 overflow-hidden rounded-xl border bg-white shadow  
    "
      onClick={() => {
        localStorage.setItem('details', JSON.stringify(item))
        Router.push({
          pathname: `nfts/${name}`,
        })
      }}
    >
      <div className="flex justify-center">
        <Image
          src={image}
          className=" h-[33vh] w-full object-cover "
          height={100}
          width={100}
        />
      </div>

      <div className="p-4">
        <p className="h-16 text-2xl font-semibold">{name}</p>
        <div className="h-20 overflow-hidden text-xl">
          <p className="text-grey-400">{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between p-4">
        <div>
          <p className="text-2xl">Price: </p>
          <p className=" text-lg font-bold ">{price} MATIC</p>
        </div>
        <div
          className=" flex-end mr-3 h-9 w-28 cursor-pointer rounded-full bg-[#BF40BF] pt-1 text-center font-bold text-white hover:scale-105 hover:bg-[#d279d2]"
          onClick={() => buyNft(item)}
        >
          Buy
        </div>
      </div>
    </div>
  )
}

export default MainCard

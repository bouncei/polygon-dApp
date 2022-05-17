import React from 'react'

function MainCard({ description, name, price, image, item, buyNft }) {
  return (
    <div className="relative my-6 cursor-pointer overflow-hidden rounded-xl border bg-white shadow hover:scale-x-105 ">
      <div className="flex justify-center">
        <img src={image} className=" h-full w-full object-cover" />
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
          className=" flex-end mr-3 h-9 w-20 rounded-full bg-[#BF40BF] pt-1 text-center font-bold text-white hover:bg-[#d279d2]"
          onClick={() => buyNft(item)}
        >
          Buy
        </div>
      </div>
    </div>
  )
}

export default MainCard

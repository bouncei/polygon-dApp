import React from 'react'

function MainCard({ description, name, price, image, item, buyNft }) {
  return (
    <div className="overflow-hidden rounded-xl border shadow">
      <div className="flex justify-center">
        <img src={image} className=" h-[30vh] object-cover" />
      </div>

      <div className="p-4">
        <p className="h-16 text-2xl font-semibold">{name}</p>
        <div className="h-20 overflow-hidden text-xl">
          <p className="text-grey-400">{description}</p>
        </div>
      </div>

      <div className="bg-black p-4">
        <p className="mb-4 text-2xl font-bold text-white">{price} MATIC</p>
        <button
          className="w-full rounded bg-red-400 py-2 px-12 font-bold text-white"
          onClick={() => buyNft(item)}
        >
          Buy
        </button>
      </div>
    </div>
  )
}

export default MainCard

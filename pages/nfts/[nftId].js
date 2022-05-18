import React, { useState, useEffect } from 'react'
import NFTImage from '../../components/nfts/NFTImage'
import GeneralDetails from '../../components/nfts/GeneralDetails'

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb] overflow-hidden`,
  container: `container p-6  bg-[#303339] rounded-t-xl m-7`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,

  topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
}

function Nft() {
  const item = JSON.parse(localStorage.getItem('details'))

  console.log('yes item!!', item)
  return (
    <div className="overflow-hidden">
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTImage selectedNft={item.image} alt={item.name} />
            </div>
            <div className={style.detailsContainer}>
              <GeneralDetails selectedNft={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nft

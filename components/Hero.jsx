// import Image from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import sponsor from '../assets/poly.png'
// import profileIcon from '../assets/dk.png'

const style = {
  wrapper: `relative bg-[#363840]`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpG7mhoJP47RX6T8sxR4mTHYMpREWVGv9KTg&usqp=CAU')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-full md:h-screen  relative justify-start  md:justify-center items-center`,
  copyContainer: `md:w-1/2 pt-9 md:pt-auto pl-12 md:pl-auto p-[20px] md:p-[20px]  text-left `,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#BF40BF] rounded-lg mr-5 text-white hover:bg-[#d279d2] cursor-pointer`,
  createButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2b2c2e] rounded-lg mr-5 text-white hover:bg-[#43454d] cursor-pointer`,

  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem] invisible md:visible flex justify-center flex-col`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white space-x-5`,
  profileimg: ` object-contain`,
  author: `flex justify-around	 ml-4 items-center  `,
  name: `text-xl font-bold`,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Create, collect, and sell extraordinary NFTs.
            </div>
            <div className={style.description}>
              BaseMarket is one of the world&apos;s largest and most reliable
              NFT marketplace built on the Ethereum blockchain.
            </div>

            <div className={style.ctaContainer}>
              <Link href="/explore">
                <button className={style.accentedButton}>Explore NFTs</button>
              </Link>
              <Link href="/create-nft">
                <button className={style.createButton}>Create</button>
              </Link>
              {/* <button className={style.button}>Create</button> */}
            </div>
          </div>

          <div className={style.cardContainer}>
            <img
              className="h-[44vh] rounded-t-lg object-cover"
              src="https://miro.medium.com/max/1400/1*QlOZvT7jtuWMPzQYtg03uQ.jpeg"
              alt="image"
              // height={100}
              // width={100}

              // layout="fill"
            />

            <div className={style.infoContainer}>
              <div className={style.author}>
                <div className={style.name}>Sponsored by: </div>
              </div>
              <Link href=" https:/docs.polygon.technology">
                <img
                  className={`${style.profileimg} cursor-pointer`}
                  src="https://cdn.iconscout.com/icon/free/png-256/polygon-badge-4086732-3379861.png"
                  alt='"image'
                  // layout="fill"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  )
}

export default Hero

import React from 'react'
import appLogo from '../assets/influencers-icon-5-2.png'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'

const style = {
  wrapper: `w-screen px-[1.2rem] py-[0.8rem] `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-[#222] font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center md:bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: `flex items-center justify-between`,
  headerItem: `cursor-pointer px-2`,
}

const Header = () => {
  const [checkMenu, setcheckMenu] = useState(true)

  return (
    <div className={style.wrapper}>
      <div className="flex items-center justify-between">
        {/* Brand Logo and Name*/}
        <Link href="/">
          <span className={style.logoContainer}>
            <Image src={appLogo} height={40} width={40} />
            <div className={style.logoText}>BaseMarket</div>
          </span>
        </Link>

        {/* Search Bar */}
        <div className={style.searchBar}>
          <div className={style.searchIcon}>
            <AiOutlineSearch />
          </div>

          <input
            className={style.searchInput}
            placeholder="Search items, collections and accounts"
          />
        </div>

        <div className={style.headerItems}>
          <div className={style.headerItem}>Explore</div>
          <div className={style.headerItem}>Collections</div>
          <div className={style.headerItem}>NFTs</div>
          <div className={style.headerItem}>Profile</div>
        </div>

        {/* Connect MetaMask Wallet Button */}
        <div></div>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import appLogo from '../assets/influencers-icon-5-2.png'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsLink45Deg } from 'react-icons/bs'
import Connect from './modal/Connect'

import Web3 from 'web3'
import web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

const provider_options = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: 'b2d351e8f6b54a4daf84e1265fb2eb98',
    },
  },
}
if (typeof window !== 'undefined') {
  const web3modal = new web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions: provider_options,
  })
}

const style = {
  wrapper: `w-screen px-[2.8rem] md:px-[1.2rem] py-[0.8rem] `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.3rem] text-[#222] font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center md:outline outline-1 rounded-[0.8rem] text-[#b1b3b5]  `,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b] text-[#434445]`,
  headerItems: `flex items-center justify-between`,
  headerItem: `cursor-pointer px-2`,
  button: `flex items-center bg-[#363840]  rounded-2xl mx-2 text-[0.9rem] md:text-white hover:scale-105 hover:bg-[#4c505c] font-semibold cursor-pointer`,
  buttonPadding: `p-2`,
  buttonTextContainer: `h-8 flex items-center`,
  buttonIconContainer: `flex items-center justify-center w-8 h-8`,
}

const Header = () => {
  const [checkMenu, setcheckMenu] = useState(true)
  const [currentAccount, setCurrentAcount] = useState()
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={style.wrapper}>
      <div className="flex items-center justify-between space-x-5">
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
          <Link href="/explore">
            <div className={style.headerItem}>Explore</div>
          </Link>
          <Link href="/create-nft">
            <div className={style.headerItem}>Create</div>
          </Link>
          <Link href="/my-nfts">
            <div className={style.headerItem}>My Assets</div>
          </Link>
          <Link href="/dashboard">
            <div className={style.headerItem}>Dashboard</div>
          </Link>
        </div>

        {/* Connect MetaMask Wallet Button */}

        <div
          onClick={async () => {
            const provider = await web3modal.connect()
            const web3 = new Web3(provider)

            console.log('yes boss')
          }}
          className={`${style.button} ${style.buttonPadding}`}
        >
          <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
            Connect Wallet
          </div>
        </div>

        <button
          className="mx-2 inline-flex items-center space-x-2 rounded-lg border border-gray-200 bg-[#363840] px-4 py-2.5 text-center text-sm text-[0.9rem] font-medium text-gray-900 hover:scale-105 hover:bg-[#4c505c] focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700  dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:text-white"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <div className="text-xl">
            <BsLink45Deg />
          </div>
          <div>Connect Wallet</div>
        </button>
        {showModal ? <Connect set={() => setShowModal()} /> : null}
      </div>
    </div>
  )
}

export default Header

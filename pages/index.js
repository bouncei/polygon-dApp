// import { ethers } from 'ethers'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import Web3Modal from 'web3modal'

// import { nftaddress, nftmarketaddress } from '../config'
// import MainCard from '../components/MainCard'
// Importing the ContractABIs
// import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
// import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
// import Connect from '../components/modal/Connect'

const Home = () => {
  localStorage.setItem('details', '')
  return (
    <>
      <Hero />
      <HomeCard />
    </>
  )
}

export default Home

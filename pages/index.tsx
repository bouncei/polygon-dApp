import type { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import { nftaddress, nftmarketaddress } from '../config'

// Importing the ContractABIs
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
const Home: NextPage = () => {
  return (
    <>

      <Hero />

      <Footer />


    </>

  )
}

export default Home

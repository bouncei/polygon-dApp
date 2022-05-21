import React, { useEffect, useState } from 'react'
import web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3 from 'web3'

// Context API
export const TransactionContext = React.createContext()

let eth
let web3modal

const provider_options = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: 'b2d351e8f6b54a4daf84e1265fb2eb98',
    },
  },
}

if (typeof window !== 'undefined') {
  eth = window.ethereum

  web3modal = new web3Modal({
    // network: 'mainnet',
    cacheProvider: true,
    provider_options,
  })
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAcount] = useState()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    checkIfMetaWalletIsConnected()
  }, [])

  // Connecting MetaMask
  const metaWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install a metamask extension')

      const accounts = await metamask.request({ method: 'eth_requestAccounts' })
      setCurrentAcount(accounts[0])
      setShowModal(false)

      // console.log(currentAccount, 'yes boss this is for metamask ')
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum object')
    }
  }

  const checkIfMetaWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install a metamask extension')

      const accounts = await metamask.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAcount(accounts[0])
        // console.log('wallet already collected')
      }
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum object')
    }
  }
  // Wallet Connect Wallet
  const walletConnectWallet = async () => {
    const provider = await web3modal.connect()
    const web3 = new Web3(provider)

    // console.log('yes boss')
  }

  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        metaWallet,
        walletConnectWallet,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

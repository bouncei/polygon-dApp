import React, { useEffect, useState } from 'react'
import web3Modal from 'web3modal'
import UAuth from '@uauth/js'

// import WalletConnectProvider from '@walletconnect/web3-provider'
// import Web3 from 'web3'

// Context API
export const TransactionContext = React.createContext()

let eth
let web3modal

// const provider_options = {
//   walletconnect: {
//     package: WalletConnectProvider,
//     options: {
//       infuraId: 'b2d351e8f6b54a4daf84e1265fb2eb98',
//     },
//   },
// }

const uauth = new UAuth({
    clientID: 'be296b5d-0b8a-4098-a79d-f530b80e6bc1',
    redirectUri:
      process.env.NODE_ENV === 'production'
        ? 'https://pullrequest.vercel.app/'
        : 'http://localhost:3000',
  });

if (typeof window !== 'undefined') {
  eth = window.ethereum

  // web3modal = new web3Modal({
  //   // network: 'mainnet',
  //   cacheProvider: true,
  //   provider_options,
  // })
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
  // const walletConnectWallet = async () => {
  //   const provider = await web3modal.connect()
  //   const web3 = new Web3(provider)

  //   // console.log('yes boss')
  // }

  const connectUnstoppable = async () => {
    try {
      console.log(uauth)
      const authorization = await uauth.loginWithPopup();

      if (authorization.idToken.wallet_address) {
        setCurrentAcount(authorization.idToken.wallet_address)
        setShowModal(false)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    uauth
    .logout()
    .then(() => {
      setAddress(null)
    })
    .catch(error => {
      console.error('profile error:', error)
    })
  }

  return (
    <TransactionContext.Provider
      value={{
        uauth,
        currentAccount,
        connectUnstoppable,
        logout,
        metaWallet,
        // walletConnectWallet,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

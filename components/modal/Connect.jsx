import React, { useContext } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { TransactionContext } from '../../context/TransactionContext'
import base from '../../assets/base.png'
import fort from '../../assets/fort.png'
import waco from '../../assets/waco.jpg'
import trust from '../../assets/trust.png'
import meta from '../../assets/metaIcon.png'

import Image from 'next/image'

const style = {
  icons: `flex `,
}

const Connect = ({ set }) => {
  const { metaWallet, currentAccount } = useContext(TransactionContext)

  // console.log(currentAccount, metaWallet, walletConnectWallet)

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-auto max-w-3xl">
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="border- flex items-start justify-between rounded-t border-b border-slate-200 p-5 dark:border-gray-600">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white lg:text-xl">
                Connect Wallet
              </h3>
              <button className="float-right " onClick={() => set(false)}>
                <div className=" h-8 w-8 text-2xl text-black  hover:text-[#666363]  focus:outline-none">
                  <MdOutlineCancel />
                </div>
              </button>
            </div>
            <hr />
            {/*body*/}
            <div className="p-6">
              <p className="pb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                Connect with one of our available wallet providers or create a
                new one.
              </p>
              <ul className="">
                <li className="py-1">
                  <div
                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                    onClick={() => {
                      metaWallet()
                    }}
                  >
                    {/* Add Image */}
                    <Image src={meta} height={43} width={43} alt="connect" />
                    <span className="ml-3 flex-1 whitespace-nowrap">
                      MetaMask
                    </span>
                    <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                      Popular
                    </span>
                  </div>
                </li>
                <li className="py-1">
                  <div
                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                    // onClick={}
                  >
                    {/* Add Image */}
                    <Image
                      src={waco}
                      height={43}
                      alt="connect"
                      width={43}
                      className="rounded-xl object-contain"
                    />

                    <span className="ml-3 flex-1 whitespace-nowrap">
                      Wallet Connect
                    </span>
                  </div>
                </li>
                <li className="py-1">
                  <div
                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                    onClick={() => {}}
                  >
                    {/* Add Image */}
                    <Image
                      src={base}
                      height={43}
                      width={43}
                      alt="connect"
                      className="rounded-xl object-contain"
                    />

                    <span className="ml-3 flex-1 whitespace-nowrap">
                      Coinbase Wallet
                    </span>
                  </div>
                </li>
                <li className="py-1">
                  <div
                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                    onClick={() => {}}
                  >
                    {/* Add Image */}
                    <Image
                      src={trust}
                      height={43}
                      width={43}
                      alt="connect"
                      className="rounded-xl object-contain"
                    />

                    <span className="ml-3 flex-1 whitespace-nowrap">
                      Trust Wallet
                    </span>
                  </div>
                </li>
                <li className="py-1">
                  <div
                    className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                    onClick={() => {}}
                  >
                    {/* Add Image */}
                    <Image
                      src={fort}
                      height={43}
                      width={43}
                      alt="connect"
                      className="rounded-xl object-contain"
                    />

                    <span className="ml-3 flex-1 whitespace-nowrap">
                      Fortmatic
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
              <button
                className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                type="button"
                onClick={() => set(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  )
}

export default Connect

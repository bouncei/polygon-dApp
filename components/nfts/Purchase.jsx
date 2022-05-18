import { useEffect, useState } from 'react'

import { IoMdWallet } from 'react-icons/io'
// import toast, { Toaster } from 'react-hot-toast'

const style = {
  button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,
  buttonIcon: `text-xl`,
  buttonText: `ml-2 text-lg font-semibold`,
}

const MakeOffer = ({ selectedNft, buyItem }) => {
  //   const [selectedMarketNft, setSelectedMarketNft] = useState()
  //   const [enableButton, setEnableButton] = useState(false)

  //   const confirmPurchase = (toastHandler = toast) =>
  //     toastHandler.success(`Purchase successful!`, {
  //       style: {
  //         background: '#04111d',
  //         color: '#fff',
  //       },
  //     })

  // const buyItem = async (
  //   listingId = selectedMarketNft.id,
  //   quantityDesired = 1,
  //   module = marketPlaceModule
  // ) => {
  //   console.log(listingId, quantityDesired, module, 'david')
  //   // yo RAZA lets goooo!!!
  //   //yo Qazi, ok
  //   // sure okay about to run it...
  //   // just clicked buy now...
  //   // still error
  //   // where can i see the contract address of the marketplace module
  //   // in [nftId.js]
  //   await module
  //     .buyoutDirectListing({
  //       listingId: listingId,
  //       quantityDesired: quantityDesired,
  //     })
  //     .catch((error) => console.error(error))

  //   confirmPurchase()
  // }

  return (
    <div className="flex h-20 w-full items-center rounded-lg border-[#151c22] bg-none px-0 md:border md:bg-[#303339] md:px-12">
      <Toaster position="top-center" reverseOrder={false} />

      <div
        onClick={buyItem}
        className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}
      >
        <IoMdWallet className={style.buttonIcon} />
        <div className={style.buttonText}>Buy Now</div>
      </div>
      {/* <div
            className={`${style.button} border border-[#151c22] bg-[#363840] hover:bg-[#4c505c]`}
          >
            <HiTag className={style.buttonIcon} />
            <div className={style.buttonText}>Make Offer</div>
          </div> */}
    </div>
  )
}

export default MakeOffer

import Image from 'next/image'
import Link from 'next/link'
import appLogo from '../assets/influencers-icon-5-2.png'

const style = {
  mainContainer: ` grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 px-[40px] md:px-[45px] lg:px-[55px] xl:px-32 py-14 text-gray-600 space-x-4 bg-white`,
  mainDiv: `space-y-4 text-grey-800 text-xs`,
  h5Element: `font-bold text-lg `,
  ptag: `text-base text-left`,
  click: `transform cursor-pointer text-base transition duration-200 ease-out hover:text-[#222] hover:underline`,
}

function Footer() {
  return (
    <div>
      <div className={style.mainContainer}>
        <div className={style.mainDiv}>
          <Link href="/">
            <div className="flex cursor-pointer items-center space-x-2">
              <Image src={appLogo} height={40} width={40} alt="foot" />

              <div className=" text-2xl font-bold">
                <span className="hover:scale-102 transform pr-4 transition duration-200 ease-out hover:text-[#222] ">
                  BaseMarket
                </span>
              </div>
            </div>
            {/* <h1 className='text-xl font-bold cursor-pointer'>BaseMint</h1> */}
          </Link>

          <p className={style.ptag}>
            BaseMarket is the largest and most active NFT marketplace on the
            Ethereum blockchain. Through BaseMarket, anybody can easily and
            quickly create, mint, and buy NFTs at a fraction of the cost of
            other NFT platforms. BaseMarket also provides feeless NFT transfers.
          </p>
        </div>
        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>GENERAL</h5>
          <Link href="/explore">
            <div className={style.click}>Explore</div>
          </Link>

          <Link href="/create-nft">
            <div className={style.click}>Create Asset</div>
          </Link>

          <Link href="/allnfts">
            <div className={style.click}>My Assets</div>
          </Link>
          <Link href="/dashboard">
            <div className={style.click}>Dashboard</div>
          </Link>
        </div>

        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>HOST</h5>
          <Link href="/explore">
            <div className={style.click}>Explore</div>
          </Link>

          <Link href="/">
            <div className={style.click}>Auctions</div>
          </Link>

          <Link href="/">
            <div className={style.click}>Offers</div>
          </Link>
          <Link href="/">
            <div className={style.click}>Stats</div>
          </Link>
        </div>

        <div className={style.mainDiv}>
          <h5 className={style.h5Element}>ECOSYSTEM</h5>
          <Link href="/explore">
            <div className={style.click}>Buy Mint Token</div>
          </Link>

          <Link href="/">
            <div className={style.click}>Trade Mint</div>
          </Link>

          <Link href="/">
            <div className={style.click}>Mint RIch List</div>
          </Link>

          <Link href="/">
            <div className={style.click}>Mint Telegram</div>
          </Link>
        </div>
      </div>

      <div className=" space-x-4 bg-white px-[40px] py-14 text-gray-600 md:px-[45px] lg:px-[55px] xl:px-32">
        <div className="text-grey-800">
          <div className="flex items-center justify-between">
            <p>© BaseMarket 2022, Inc</p>
            <Link href="/">
              <span className="cursor-pointer hover:text-[#0198E1] hover:underline">
                Back To Top
              </span>
            </Link>
            All Rights Reserved
          </div>
        </div>

        {/* <div className='flexorde  r-last'>Social Media Handles</div> */}
      </div>
    </div>
  )
}

export default Footer

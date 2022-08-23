import React from 'react'
import Tabs from '../components/Tabs'
import { IoIosWallet } from 'react-icons/io'
import { BiArchive } from 'react-icons/bi'
import { BsFileImageFill, BsTagsFill } from 'react-icons/bs'
import { AiFillDatabase } from 'react-icons/ai'

const HomeCard = () => {
  return (
    <div className="mx-20 my-12 overflow-hidden rounded-xl">
      <div className="flex items-center justify-between space-x-9 bg-white py-14 px-9 pb-28 ">
        {/*Left Part */}
        <div className="items-start text-left">
          <p className="text-2xl font-medium text-blue-500 ">Create NFTs</p>
          <p className="py-4 text-4xl font-semibold ">
            Create & sell your NFTs
          </p>
          <p className="pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vel
            tortor, turpis libero. Faucibus nulla neque elementum eget volutpat
            quam fermentum. Justo, quam scelerisque orci. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Ipsum vel tortor, turpis libero.
            Faucibus nulla neque elementum eget volutpat quam fermentum. Justo,
            quam scelerisque orci.
          </p>
          <button className="rounded border py-2 px-5 text-sm">
            View guide {' ->'}
          </button>
        </div>

        {/*Right Part */}
        <div className=" mt-20 mb-10 grid grid-cols-2 gap-9">
          <Tabs
            li={'create'}
            icon={<IoIosWallet />}
            title="Set up your wallet"
            text="Once you’ve set up your wallet of choice connect it to BaseMarket"
          />

          <Tabs
            icon={<AiFillDatabase />}
            title="Create your collection"
            text={
              'Click Create and set up your collection and customize your profile'
            }
          />
          <Tabs
            icon={<BsFileImageFill />}
            title="Add your NFTs"
            text={
              'Upload your work (image, video, or 3D art) and other options.'
            }
          />
          <Tabs
            icon={<BsTagsFill />}
            title="List item for sale"
            text={
              'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!'
            }
          />
        </div>
      </div>
    </div>
  )
}

export default HomeCard

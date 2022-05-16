// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import profileIcon from '../assets/dk.png'

const style = {
  wrapper: `relative bg-[#363840]`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpG7mhoJP47RX6T8sxR4mTHYMpREWVGv9KTg&usqp=CAU')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-full md:h-screen  relative justify-start  md:justify-center items-center`,
  copyContainer: `md:w-1/2 pt-9 md:pt-auto pl-12 md:pl-auto p-[20px] md:p-[20px]  text-left `,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-white hover:bg-[#44464d] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem] invisible md:visible`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  profileimg: `h-[2.25rem] rounded-full`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              BaseMint is the world&apos;s largest and most reliable NFT
              marketplace
            </div>

            <div className={style.ctaContainer}>
              <Link href="/collections">
                <button className={style.accentedButton}>Explore</button>
              </Link>

              {/* <button className={style.button}>Create</button> */}
            </div>
          </div>

          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://bloks.io/cdn-cgi/image/width=500/https://ipfs.io/ipfs/QmX1i5kCtVauTWvRRhsmPhz2iUjtMec2ZZnosqMDqpHNsS"
              alt="image"
            />

            <div className={style.infoContainer}>
              <img
                className={style.profileimg}
                src="https://lh3.googleusercontent.com/pqR3PEN7lUuAwTZpk_sjbKKGQVbj4jIj_OFGDmNW1wGKPgygR6tpM0sAcbuMjis84ddfeokjzWjAMNQYw0VpNyIkx6OwjQFifxLHlw=s80"
                alt="profile picture"
              />

              <div className={style.author}>
                <div className={style.name}>Future Proof Visions #108</div>

                <a
                  className="text-[#1868b7]"
                  // href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/85237985525734684917380424682378680952947795822601319472306616631339503321089"
                  name="Scott"
                >
                  Scott
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  )
}

export default Hero
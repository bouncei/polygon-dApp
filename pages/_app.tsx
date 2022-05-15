import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LoadingScreen from "../components/preloader/LoadingScreen";
import Hero from '../components/Hero'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url: string) => setLoading(false)


    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

  }, [router])

  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Base Market</title>
        <link rel='icon' href='/influencers-icon-5-2.png' />
      </Head>

      <>


        <Header />
        {/* <Hero /> */}



        <LoadingScreen loading={loading} />
        <Component {...pageProps} />
        {/* <Footer /> */}

      </>
    </div>

  )
}

export default MyApp

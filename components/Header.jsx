import React from 'react'
import Head from 'next/head'

function Header() {
  return (
    <div>
      <Head>
        <title>Polygon dApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="py-8 text-center text-4xl">Header Component</h1>
    </div>
  )
}

export default Header

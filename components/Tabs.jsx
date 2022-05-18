import React from 'react'
import { IoWallet } from 'react-icons/io'

const Tabs = ({ icon, title, text }) => {
  return (
    <div className="text-left ">
      <div className="py-3  text-8xl">{icon}</div>
      <p className="py-2 text-2xl font-medium text-blue-500">{title}</p>
      <p>{text}</p>
    </div>
  )
}

export default Tabs

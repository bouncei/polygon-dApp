import React from 'react'

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

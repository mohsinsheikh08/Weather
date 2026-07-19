import React, { useContext } from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderMiddle from './HeaderMiddle'
import HeaderRight from './HeaderRight'
import { ShareData } from '../../utils/WeatherContext'

const Header = () => {
  const { DarkLight } = useContext(ShareData)
  
  return (
    <div className={`w-full transition-all ease-in-out duration-500 flex ${
      DarkLight ? "bg-[#172135]" : "bg-white/90"
    } justify-between items-center h-12 rounded-xl px-4`}>
      <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight />
    </div>
  )
}

export default Header
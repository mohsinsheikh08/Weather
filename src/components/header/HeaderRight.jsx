import React, { useContext } from 'react'
import { Sun, Moon } from 'lucide-react'
import { ShareData } from '../../utils/WeatherContext'
const HeaderRight = () => {
  const { DarkLight, setDarkLight } = useContext(ShareData);
  return (
    <div className='flex h-full justify-end items-center marginRight pr-10 text-sm w-[20%]'>
      <button
        className={`flex justify-center rounded-lg shadow-[0px_2px_10px_0.1px_rgba(0,0,0,0.1)] items-center w-10 h-10 ${DarkLight ? "bg-[#172135]" : "bg-white"}  transition-all duration-500 hover:scale-105`}
        onClick={() => setDarkLight(!DarkLight)}
      >
        {DarkLight ? <Moon size={30} className="text-blue-400 transition-all ease-in-out duration-500 " /> : <Sun size={30} className="text-yellow-500 transition-all ease-in-out duration-500" />}
      </button>
    </div>
  )
}

export default HeaderRight

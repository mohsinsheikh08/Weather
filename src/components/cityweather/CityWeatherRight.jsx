import React, { useContext } from 'react'
import { ShareData } from '../../utils/WeatherContext'

const CityWeatherRight = ({ e }) => {
  const {loading, dots, city, DarkLight } = useContext(ShareData)

  return (
    <div className={`w-[50%] transition-all ease-in-out duration-500   h-10 flex ${DarkLight ? "text-[#5F7ABC]" : "text-white "}  `}>
      <e.icon size={30} className="mt-1 mr-2" />
      <div className="flex h-full flex-col  justify-between items-start">
        <p className={`transition-all ease-in-out duration-500 ${DarkLight ? "text-[#ABB9DF]" : "text-white"}`}>{e.work}</p>
        <p className={`w-full transition-all ease-in-out duration-500 ${DarkLight ? "text-[#ABB9DF]" : "text-white"}`}>
          {loading === true ? dots : (city !== '' ?  `${e.percent}` : "N/A")}
        </p>
      </div>
    </div>
  )
}

export default CityWeatherRight

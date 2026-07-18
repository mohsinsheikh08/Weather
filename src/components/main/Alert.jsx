import React, { useContext, useEffect } from 'react'
import {ArrowRight, Bell} from 'lucide-react'
import Warning from '../../icons/warning.png'
import { ShareData } from '../../utils/WeatherContext'

const Alert = () => {
  const {weather_Code, loading, dots, DarkLight} = useContext(ShareData)
  // useEffect(() => {
  //     console.log(weather_Code)

  // }, [weather_Code])
  
  const getAlert = (code) => {
     const alerts =  {
      45: { title: "Fog Alert", message: "Drive carefully, visibility is low." },
      51: { title: "Light Drizzle", message: "Carry an umbrella!" },
      61: { title: "Rain Alert", message: "Rain expected. Stay indoors." },
      71: { title: "Snow Alert", message: "Snow expected. Stay warm." },
      80: { title: "Rain Showers", message: "Showers expected. Carry an umbrella." },
      95: { title: "Thunderstorm Alert", message: "Thunderstorm expected! Stay indoors." },
    };
    return alerts[code] || {title: "Everything is fine!", message : ""}
  }
  const alert = getAlert(weather_Code)
  return (
    <div className={`transition-all ease-in-out duration-500  ${DarkLight ? "bg-[#172135]" : "bg-white"} w-[48%] h-full rounded-lg `}>
      <div className={`h-[20%] transition-all ease-in-out duration-500  px-3 pr-6 py-2 rounded-tl-lg rounded-tr-lg  font-semibold  ${DarkLight ? "bg-[#212b3e]" : "bg-[#F7F8FC]"} border-b-1  ${DarkLight ? "border-[#252D3A]" : "border-gray-300"}  w-full`}>
       <div className={`grid-alerts transition-all ease-in-out duration-500  w-full ${DarkLight ? "text-white" : "text-black"}  items-center `}><Bell size={20}  /> <p className='w-50 '>Weahter Alert </p></div>
      </div>
    <div className='  py-3 w-full h-[80%] flex'>
     <img src={Warning}  className='w-16 pl-3 h-13' />
     <div className='w-full px-2 py-2 h-full '>
     <div className='flex flex-col justify-between h-25'>
       <div>
        <h1 className={`transition-all ease-in-out duration-500  ${DarkLight ? "text-white" : "text-black"} font-semibold `}>{loading ? dots : alert.title}</h1>
      <p className={` transition-all ease-in-out duration-500  ${DarkLight ? "text-white" : " text-gray-500"} text-sm font-medium `}>{loading ? dots : alert.message}</p>
      </div>
     </div>
     </div>
    </div>
    </div>
  )
}

export default Alert

import React, { useContext, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Sunrise from "../../icons/sunrise.png";
import Sunset from "../../icons/sunset.png";
import Sun from '../../icons/sun.png'
import { ShareData } from "../../utils/WeatherContext";
const SunPosition = () => {
  const {NewSunrise, NewSunset, loading, dots, DarkLight} = useContext(ShareData)
  // useEffect(() => {
  //     console.log(NewSunrise, NewSunset)

  // }, [NewSunrise,NewSunset])
  
  return (
    <div className={`w-[40%] h-full transition-all ease-in-out duration-500  rounded-lg ${DarkLight ? "bg-[#172135]" : "bg-white"}  shadow-sm`}>
      {/* Header */}
      <div className={`h-[20%] transition-all ease-in-out duration-500  px-3 pr-6 py-2 ${DarkLight ? "text-white" : "text-black"} rounded-tl-lg rounded-tr-lg font-semibold ${DarkLight ? "bg-[#212b3e]" : "bg-[#F7F8FC]"}  border-b ${DarkLight ? "border-[#252D3A]" : "border-gray-300"}  w-full`}>
        <p className="flex justify-between items-center">
          Sunrise & Sunset
        </p>
      </div>

      <div className="h-38 flex justify-evenly w-full items-center px-2">
        <div className="flex flex-col items-center mr-2  gap-1 w-[22%]">
          <img className="w-10" src={Sunrise} alt="Sunrise" />
          <p className={`text-sm transition-all ease-in-out duration-500  ml-5 w-20 ${DarkLight ? "text-white" : "text-black"} h-5 font-semibold`}>{loading ? dots : NewSunrise }</p>
          <p className={`text-xs font-semibold transition-all ease-in-out duration-500  ${DarkLight ? "text-gray-500" : " text-gray-500"}`}>Sunrise</p>
        </div>
        <div className="flex flex-col justify-center items-center ml-2 gap-1 w-[22%]">
          <img className="w-10" src={Sunset} alt="Sunset" />
          <p className={`text-sm ml-5 transition-all ease-in-out duration-500  w-20 ${DarkLight ? "text-white" : "text-black"} h-5 font-semibold`}>{loading ? dots :  NewSunset}</p>
          <p className={`text-xs font-semibold transition-all ease-in-out duration-500  ${DarkLight ? "text-gray-500" : " text-gray-500"}`}>Sunset</p>
        </div>
      </div>
    </div>
  );
};

export default SunPosition;

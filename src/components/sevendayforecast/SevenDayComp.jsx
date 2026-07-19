import { useContext, useEffect } from "react";
import { ShareData } from "../../utils/WeatherContext";
import PartlyCloudy from '../../icons/partlycloudy.png'
import LightRain from '../../icons/lightdrizzle.png'
import Snow from '../../icons/snow.png'
import Fog from '../../icons/fog.png'
import Cloud from "../../icons/cloud.png";
import CloudRain from "../../icons/cloudrain.png";
import ThunderRain from "../../icons/cloudrainthunder.png";
import CloudThunder from "../../icons/cloudthunder.png";
import Moon from "../../icons/moon.png";
import Sun from "../../icons/sun.png";
import SunCloud from "../../icons/suncloud.png";
import YellowMoon from "../../icons/yellowmooncloud.png";
const SevenDayComp = ({ e }) => {
  const {dots , loading, DarkLight} = useContext(ShareData)
  const HourlyIcons = {
    0: { day: Sun },
    1: { day: SunCloud },
    2: { day: PartlyCloudy },
    3: { day: Cloud },
    45: { day: Fog },
    51: { day: LightRain },
    53: { day: LightRain },
    55: { day: CloudRain },
    61: { day: CloudRain },
    63: { day: CloudRain },
    65: { day: CloudRain },
    71: { day: Snow },
    73: { day: Snow },
    75: { day: Snow },
    80: { day: CloudRain },
    95: { day: ThunderRain },
    96: { day: ThunderRain }
  };
  const Icons = HourlyIcons[e.icon] || {day : Sun};
  // useEffect(() => {console.log(Icons)}, [])
  return (
    <div className={` flex flex-col transition-all ease-in-out duration-500  ${e.border}  ClearBorder border-r-2 ${DarkLight ? "border-[#252D3A]" : "border-gray-300"} h-21  `}>
      <div className="flex  justify-center">
        <h1 className="text-sm font-medium">{e.day}</h1>
      </div>
      {loading ? (<div className=" flex justify-center items-center w-full h-15">{dots}</div>) : (<div className="flex justify-evenly mt-2 items-center">
        <img className="w-8 object-cover" src={Icons.day} alt="" />
        <div>
          <p className="font-bold text-xs mb-1">{e.firstTemp} <span>&deg;</span></p>
          <p className="font-bold text-xs text-gray-400">{e.secTemp} <span>&deg;</span></p>
        </div>
      </div>)}
    </div>
  )
}

export default SevenDayComp

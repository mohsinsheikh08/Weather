import React, { useContext, useEffect, useState } from "react";
import Cloud from "../../icons/cloud.png";
import CloudRain from "../../icons/cloudrain.png";
import ThunderRain from "../../icons/cloudrainthunder.png";
import CloudThunder from "../../icons/cloudthunder.png";
import Moon from "../../icons/moon.png";
import Sun from "../../icons/sun.png";
import SunCloud from "../../icons/suncloud.png";
import YellowMoon from "../../icons/yellowmooncloud.png";
import HourlyForecastComp from "./HourlyForecastComp";
import { ShareData } from "../../utils/WeatherContext";
import PartlyCloudy from '../../icons/partlycloudy.png'
import LightRain from '../../icons/lightdrizzle.png'
import CloudRainMoon from '../../icons/mooncloudrain.png'
import Snow from '../../icons/snow.png'
import Fog from '../../icons/fog.png'
import { ArrowRight } from "lucide-react";
const HourlyForecast = () => {
  const { Hours, AMPM, tenHours, AMPMAPI, weatherHourly, DarkLight, loading, dots, hourlyIcon, DayNight } = useContext(ShareData)
  const [TenHour, setTenHour] = useState([])

  // useEffect(() => {
  //   console.log("Hourly Forecast", Hours, AMPM, tenHours, AMPMAPI, weatherHourly, loading, dots, hourlyIcon, DayNight)
  // }, [Hours, AMPM, tenHours, AMPMAPI, weatherHourly, loading, dots, hourlyIcon, DayNight])

  console.log(DayNight)
  const UpdateHourlyIcons = {
    0: { day: Sun, night: Moon },
    1: { day: SunCloud, night: YellowMoon },
    2: { day: PartlyCloudy, night: Cloud },
    3: { day: Cloud, night: Cloud },
    45: { day: Fog, night: Fog },
    51: { day: LightRain, night: CloudRainMoon },
    53: { day: LightRain, night: CloudRainMoon },
    55: { day: CloudRain, night: CloudRain },
    61: { day: CloudRain, night: CloudRain },
    63: { day: CloudRain, night: CloudRain },
    65: { day: CloudRain, night: CloudRain },
    71: { day: Snow, night: Snow },
    73: { day: Snow, night: Snow },
    75: { day: Snow, night: Snow },
    80: { day: CloudRain, night: CloudRain },
    95: { day: ThunderRain, night: ThunderRain },
  };

  useEffect(() => {
    if (!DayNight || !hourlyIcon || DayNight.length === 0 || hourlyIcon.length === 0) {
      const defaultIcons = hourlyIcon.map((code) => {
        return     UpdateHourlyIcons[code].day || Sun;
      }) || [];
      setTenHour(defaultIcons)
    }
    const minLength = Math.min(hourlyIcon.length, DayNight.length)
    const icons = []
    for(let i = 0;  i < minLength; i++){
      const code = hourlyIcon[i]
      const isDay = DayNight[i] === 1;
      
      const icon = UpdateHourlyIcons[code]?.[isDay ? "day" : "night"];
      icons.push(icon)
    }
    setTenHour(icons)
  }, [hourlyIcon, DayNight]);

  const HourlyComps = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    img: loading ? dots : TenHour[i] || '',
    time: i === 0 ? "Now" : tenHours?.[i] || AMPM[i] || Hours?.[i] || "N/A",
    AMPM: i === 0 ? "" : AMPMAPI?.[i] || "",
    temp: loading ? dots : Math.floor(weatherHourly?.[i] || 0),
    width: i === 0 ? "100px" : "30px",
  }));

  return (
    <div className={` rounded-lg marginBottom transition-all ease-in-out duration-500  ${DarkLight ? "text-white" : "text-black"} w-full ${DarkLight ? "bg-[#172135]" : "bg-white"}  flex flex-col h-33 grids1`}>
      <div className={`border-b-2 rounded-tr-lg  rounded-tl-lg w-full bg-gradient-to-r transition-all ease-in-out duration-500  ${DarkLight ? "bg-[#212b3e]" : "from-[#F7F8FC] to-[#F7F8FC] via-[#F7FBFE]"}  h-12 text-sm flex justify-between items-center px-5 transition-all ease-in-out duration-500   ${DarkLight ? "border-[#252D3A]" : "border-gray-300"} `}>
        <p className="font-semibold tracking-wide">Hourly Forecast</p>

      </div>
      <div className="px-5  grid grid-cols-10 gap-1 grids  h-23  items-center">
        {HourlyComps.map((e) => {
          return <HourlyForecastComp key={e.id} e={e} />;
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;

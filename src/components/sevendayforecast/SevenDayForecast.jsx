import React, { useContext, useEffect } from "react";
import SevenDayComp from "./SevenDayComp";
import { ArrowRight } from "lucide-react";
import { ShareData } from "../../utils/WeatherContext";
const SevenDayForecast = () => {
  const { Week_Max_Temp, Week_Min_Temp, Week_Time, week_Code, dots, loading, DarkLight } = useContext(ShareData);
  // useEffect(() => {console.log(Week_Max_Temp, Week_Min_Temp, Week_Time, week_Code)}, [Week_Max_Temp, Week_Min_Temp, Week_Time, week_Code])
  const border = 'border-none'
  const SevenComps = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    day: loading ? dots : Week_Time?.[i] ? (i === 0 ? "Today" : Week_Time[i]) : "N/A",
    firstTemp: Week_Max_Temp?.[i] ? (Math.round(Week_Max_Temp[i])) : "N/A",
    secTemp: Week_Min_Temp?.[i] ? (Math.round(Week_Min_Temp[i])) : "N/A",
    icon: week_Code?.[i] ? week_Code[i] : '',
    border: i === 6 ? border : ""
  }))
  // useEffect(() => { console.log(SevenComps) },[])


  return (
    <div className={`w-full h-30 grid3 transition-all ease-in-out duration-500  ${DarkLight ? "text-white" : "text-black"} ${DarkLight ? "bg-[#172135]" : "bg-white"}  mt-3 rounded-lg`}>
      <div className={`border-b-2 rounded-tr-lg  rounded-tl-lg w-full transition-all ease-in-out duration-500  bg-gradient-to-r  ${DarkLight ? "bg-[#212b3e]" : "from-[#F7F8FC] to-[#F7F8FC] via-[#F7FBFE]"}  ${DarkLight ? "border-[#252D3A]" : "border-gray-300"} h-9 text-sm flex justify-between items-center px-5 `}>
        <p className="font-semibold tracking-wide">7-Day Forecast</p>
        
      </div>
      <div className="w-[100%] grid grid-cols-7 grid4  h-23 ">
        {SevenComps.map(e => {
          return <SevenDayComp key={e.id} e={e} />;
        })}
      </div>
    </div>
  );
};

export default SevenDayForecast;

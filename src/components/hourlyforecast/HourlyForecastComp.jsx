import { useContext } from "react";
import { ShareData } from "../../utils/WeatherContext";
import Sun from '../../icons/sun.png'
const HourlyForecastComp = ({e}) => {
  return (
    <div className="flex flex-col w-[100%] mb-3 mt-3 h-full justify-center items-center">
      <p className="h-5 text-sm   font-medium">{e.time} {e.AMPM}</p>
      <div className="h-10 flex  overflow-visible justify-center items-center">
        <img 
          className="object-cover w-7" 
          
          src={e.img !== undefined && e.img !== null && e.img.length > 0 ? e.img : Sun} 
          alt="" 
        />
      </div>
      <p className="h-5 flex justify-center items-center text-sm font-semibold">
        {e.temp}°<span className="text-xs">C</span>
      </p>
    </div>
  );
};

export default HourlyForecastComp
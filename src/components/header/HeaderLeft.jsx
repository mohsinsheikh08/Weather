import React, { useContext } from "react";
import WebIcon from "../../icons/websitelogo.png";
import NightIcon from '../../icons/webiconnight.png'
import { ShareData } from "../../utils/WeatherContext";
const HeaderLeft = () => {
  const {DarkLight} = useContext(ShareData)
  return (
    <div className=" flex justify-center items-center w-[17%] mr-7 h-full">
      <div className="flex items-end ">
        <img  src={DarkLight ? NightIcon : WebIcon} className="w-10 object-contain transition-all ease-in-out duration-500  " alt="" />
        <p className={`text-xl ${DarkLight ? "text-white" : "text-black"} transition-all ease-in-out duration-500 font-medium mb-1 ml-3`}>Weather</p>
      </div>
    </div>
  );
};

export default HeaderLeft;

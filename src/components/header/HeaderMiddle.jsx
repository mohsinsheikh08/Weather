import React, { useContext } from "react";
import { Search } from "lucide-react";
import { ShareData } from "../../utils/WeatherContext";
const HeaderMiddle = () => {
  const { inputVal, setInputVal, setCity, DarkLight } = useContext(ShareData);
  return (
    <div className=" flex  justify-center items-center h-full w-[80%]">
      <input
        onKeyDown={(e) => {
          if(e.key === "Enter"){
            setCity(inputVal)
            setInputVal('')
          }
        }}
        onChange={(e) => { setInputVal(e.target.value)}}
        value={inputVal}
        type="text"
        placeholder="Search for a city or location..."
       className={` placeholder:${DarkLight ? "text-gray-200" : "text-gray-500"} placeholder:text-sm h-[70%] w-[80%] shadow-[-10px_0px_10px_-10px_rgba(0,0,0,0.1)] ${DarkLight ? "text-white" : "text-black"} outline-none pl-4 rounded-bl-lg rounded-tl-lg ${DarkLight ? "border-[#252D3A]" : "border-[#E9EDF8]"} transition-all ease-in-out duration-500 border-2 border-r-0`}
      />
      <div onClick={() => {setCity(inputVal); setInputVal('')}} className={`flex justify-center border-2 ${DarkLight ? "border-[#252D3A]" : "border-[#E9EDF8]"} transition-all ease-in-out duration-500  rounded-tr-lg rounded-br-lg border-l-0 items-center  h-[70%] w-[10%] shadow-[10px_0px_10px_-10px_rgba(0,0,0,0.1)]`}>
        <Search size={18} className="text-[#2F89F0]" />
      </div>
    </div>
  );
};

export default HeaderMiddle;

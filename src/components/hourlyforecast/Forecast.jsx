import React from "react";
import HourlyForecast from "./HourlyForecast";
import SevenDayForecast from "../sevendayforecast/SevenDayForecast";
import { ArrowRight } from "lucide-react";
const Forecast = () => {
  return (
    <div className="w-[100%] flex  justify-between h-full grids2 responsive2 responsive12 responsive6">
  <div className="w-[100%]">
    <HourlyForecast />
    <SevenDayForecast />
  </div>
</div>
  );
};

export default Forecast;

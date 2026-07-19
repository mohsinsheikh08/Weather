import { useContext, useEffect, useState } from "react";
import { MapPin, Droplet, Wind, Thermometer, Eye } from "lucide-react";
import CityWeatherRight from '../../components/cityweather/CityWeatherRight.jsx'
import Cloud from "../../icons/cloud.png";
import CloudRain from "../../icons/cloudrain.png";
import ThunderRain from "../../icons/cloudrainthunder.png";
import Moon from "../../icons/moon.png";
import Sun from "../../icons/sun.png";
import SunCloud from "../../icons/suncloud.png";
import YellowMoon from "../../icons/yellowmooncloud.png";
import { ShareData } from "../../utils/WeatherContext";
import PartlyCloudy from '../../icons/partlycloudy.png'
import LightRain from '../../icons/lightdrizzle.png'
import Snow from '../../icons/snow.png'
import Fog from '../../icons/fog.png'
import MoonRain from '../../icons/mooncloudrain.png'
const CityWeather = () => {
  const [IconofWeather, setIconofWeather] = useState(null)
  const [TextofWeather, setTextofWeather] = useState(null)
  const {
    DarkLight,
    city,
    country,
    loading,
    setDots,
    dots,
    current_Weather,
    weather_Feels,
    weather_Humidity,
    wind_Speed,
    direction_Text,
    pressure,
    vsibility,
    weather_Code,
    CurrentCode
  } = useContext(ShareData);
  useEffect(() => console.log(CurrentCode), [CurrentCode])
  const SafetyFunc = (str) => str?.toUpperCase() || "";
  const Safety = (str) => str?.toLowerCase() || "";

  // useEffect(() => {
  //   console.log(
  //     city,
  //     latitude,
  //     longitude,
  //     country,
  //     loading,
  //     current_Weather,
  //     weather_Feels,
  //     weather_Humidity,
  //     wind_Speed,
  //     direction_Text,
  //     pressure,
  //     vsibility,
  //     weather_Code,
  //   );
  // }, [
  //   city,
  //   latitude,
  //   longitude,
  //   country,
  //   loading,
  //   current_Weather,
  //   weather_Feels,
  //   weather_Humidity,
  //   wind_Speed,
  //   direction_Text,
  //   pressure,
  //   vsibility,
  //   weather_Code,
  // ]);


  const visibilityInKM = `${Math.min(vsibility / 1000, 30).toFixed(1)}`;
  const visiblityText = Number(visibilityInKM) > 30 ? "30+ km" : ` ${visibilityInKM} km`;
  // useEffect(() => {
  //   console.log(visibilityInKM, visiblityText)
  // }, [visibilityInKM])

  const CityWeatherComp = [
    { id: 1, icon: Droplet, work: "Humadity", percent: `${weather_Humidity}%` },
    {
      id: 2,
      icon: Wind,
      work: "Wind",
      percent: `${direction_Text} ${wind_Speed} km/h`,
    },
    {
      id: 3,
      icon: Thermometer,
      work: "Pressure",
      percent: pressure > 990 ? "⚠️ Low" : `${Math.floor(pressure)} hPa`
    },
    { id: 4, icon: Eye, work: "Visibility", percent: `${visiblityText}` },
  ];


  const weatherCodes = {
    0: { text: "Clear Sky", day: Sun, night: Moon },
    1: { text: "Mainly Clear", day: SunCloud, night: YellowMoon },
    2: { text: "Partly Cloudy", day: PartlyCloudy, night: Cloud },
    3: { text: "Overcast", day: Cloud, night: Cloud },
    45: { text: "Fog", day: Fog, night: Fog },
    51: { text: "Light Drizzle", day: LightRain, night: MoonRain },
    53: { text: "Moderate Drizzle", day: LightRain, night: MoonRain },
    55: { text: "Dense Drizzle", day: LightRain, night: MoonRain },
    61: { text: "Rain", day: LightRain, night: MoonRain },
    63: { text: "Moderate Rain", day: LightRain, night: MoonRain },
    65: { text: "Heavy Rain", day: LightRain, night: MoonRain },
    71: { text: "Snow", day: Snow, night: Snow },
    73: { text: "Moderate Snow", day: Snow, night: Snow },
    75: { text: "Heavy Snow", day: Snow, night: Snow },
    80: { text: "Rain Showers", day: CloudRain, night: CloudRain },
    95: { text: "Thunderstorm", day: ThunderRain, night: ThunderRain },
  };
  useEffect(() => {
    const GetTime = (code, isDay) => {
      const weather = weatherCodes[code];
      if (!weather) return null;
      const isday = isDay === 0 ? "night" : "day";
      const icon = isDay === 0 ? weather.night : weather.day;

      return {
        isday,
        text: weather.text,
        icon
      }
    }

    const result = GetTime(weather_Code, CurrentCode);
    if (result) {
      setIconofWeather(result.icon)
      setTextofWeather(result.text)
    }
  }, [CurrentCode, weather_Code])
  useEffect(() => {
    if (loading) {
      let count = 0;
      let Interval = setInterval(() => {
        count = (count + 1) % 7;
        setDots(".".repeat(count));
      }, 300);
      return () => clearInterval(Interval);
    } else {
      setDots("");
    }
  }, [loading]);

  return (
    <div className={`h-[105%] p-1  transition-all ease-in-out duration-500  rounded-lg ${DarkLight ? "bg-[#172135]" : ""}  w-full   flex justify-between  responsive4`}>
      <div className="flex ml-3 h-full w-[46%] flex-col justify-between">
        <div className=" flex pt-3 justify-start  items-center w-120 h-8">
          <MapPin className={`transition-all ease-in-out duration-500 ${DarkLight ? "text-[#7997CE]" : "text-[white]"}`} />
          {loading === true ? (
            <div className="h-100  text-white max-w-full  mx-2 flex justify-center items-center">
              {dots}
            </div>
          ) : (
            <p className="text-xl max-w-full text-white mx-2">
              {Safety(city) === Safety(country)
                ? SafetyFunc(country)
                : `${SafetyFunc(city)}, ${SafetyFunc(country)}`}
            </p>
          )}
        </div>

        <div className="flex   w-80 justify-between  mt-3">
          {loading === true ? (
            <h1 className="text-white flex  items-start text-8xl font-[Lato] font-bold">
              {dots}
            </h1>
          ) : (
            <h1 className="text-white flex  items-start text-8xl font-[Lato] font-bold">
              {current_Weather ? Math.floor(current_Weather) : "N/A"}{" "}
              <span className="text-5xl mt-3">&deg;C</span>
            </h1>
          )}
          <img
            className="max-w-23 object-contain"
            src={
              weather_Code !== undefined && weather_Code !== null && !loading
                ? IconofWeather
                : Sun
            }
          />
        </div>
        <div className={`transition-all ease-in-out duration-500  ${DarkLight ? "text-[#D1D8EE]" : "text-white"} text-xl`}>
          <p>
            {weather_Code !== undefined && weather_Code !== null
              ? loading
                ? ""
                : TextofWeather
              : dots}{" "}
          </p>
        </div>
        <div className="= mb-10">
          <p className={`transition-all ease-in-out duration-500 ${DarkLight ? "text-[#AFB7DD]" : "text-white "} h-full`}>
            Feels like
            {loading === true ? (
              <span className="ml-2">{dots}</span>
            ) : (
              <span className="ml-2 h-full ">
                {weather_Feels !== null ? weather_Feels : "N/A"}&deg;
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="w-[45%] responsive8 flex flex-wrap  justify-center items-center  py-5 h-full ">
        {CityWeatherComp.map((e) => {
          return <CityWeatherRight key={e.id} e={e} />;
        })}
      </div>
    </div>
  );
};

export default CityWeather;

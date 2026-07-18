import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const ShareData = createContext();
const WeatherContext = ({ children }) => {
  const [DarkLight, setDarkLight] = useState(() => {
    const savedtheme = localStorage.getItem('toggle');

    return savedtheme === 'dark' ? true : false;
  })
  useEffect(() => {
    localStorage.setItem('toggle', DarkLight ? "dark" :"light")
  }, [DarkLight])
  
  const second = null;
  const [weatherData, setWeatherData] = useState(second);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [CurrentCode, setCurrentCode] = useState(second)
  const [latitude, setlatitude] = useState(second);
  const [longitude, setlongitude] = useState(second);
  const [country, setCountry] = useState(second);
  const [dots, setDots] = useState('')
  const [current_Weather, setCurrent_Weather] = useState(second)
  const [pressure, setPressure] = useState(second)
  const [weather_Feels, setWeather_Feels] = useState(second)
  const [weather_Humidity, setWeather_Humidity] = useState(second)
  const [wind_Speed, setWind_Speed] = useState(second)
  const [wind_Direction, setWind_Direction] = useState(second)
  const [direction_Text, setDirection_Text] = useState(second)
  const [vsibility, setVsibility] = useState(second)
  const [weather_Code, setWeather_Code] = useState(second)
  const [Hours, sethours] = useState([])
  const [AMPM, setAMPM] = useState([])
  const [AMPMAPI, setAMPMAPI] = useState([])
  const [tenHours, settenHours] = useState([])
  const [hoursAPI, setHoursAPI] = useState([])
  const [weatherHourly, setWeatherHourly] = useState([])
  const [hourlyIcon, setHourlyIcon] = useState([])
  const [DayNight, setDayNight] = useState([])
  const [Week_Time, setWeek_Time] = useState([])
  const [Week_Max_Temp, setWeek_Max_Temp] = useState([])
  const [Week_Min_Temp, setWeek_Min_Temp] = useState([])
  const [week_Code, setWeek_Code] = useState([])
  const [Sunset, setSunset] = useState(second)
  const [Sunrise, setSunrise] = useState(second)
  const [NewSunset, setNewSunset] = useState(second)
  const [NewSunrise, setNewSunrise] = useState(second)

  const getData = async () => {
    setLoading(true);
    try {
      const geo = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`,
      );
      setWeatherData(geo.data);

      const data = geo?.data;
      const location = data?.results?.[0];
      const results = data?.results?.[0];
      const CountryofCity = results?.country
      const timezoneValue = results?.timezone || 'auto';
      console.log(timezoneValue)
      if (location !== null) {
        setlatitude(location?.latitude);
        setlongitude(location?.longitude);
      }
      if (results !== null) {
        setCountry(CountryofCity);
      }
    } catch (err) {
      console.log("Error", err.message);
    }
  };
  const getWeatherData = async (lat, lon) => {
    if (lat === null || lon === null) return;
    try {
      const weather = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,winddirection,relative_humidity_2m,is_day,surface_pressure,visibility&hourly=temperature_2m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset&timezone=auto`
    );

      const current_code = weather?.data?.current?.is_day;
      const current_weather = weather?.data.current?.temperature_2m;
      const weather_feels = weather?.data?.current?.apparent_temperature;
      const weather_humidity = weather?.data?.current?.relative_humidity_2m;
      const wind_speed = weather?.data?.current?.wind_speed_10m;
      const wind_direction = weather.data?.current?.winddirection;
      const wind_pressure = weather?.data?.current?.surface_pressure;
      const weather_visibility = weather?.data?.current?.visibility;
      const weather_code = weather?.data?.current?.weather_code;
      const weatherTime = weather?.data?.hourly?.time || [];
      const HourlyForecast = weather?.data?.hourly?.temperature_2m;
      const WeatherCode = weather?.data?.hourly?.weather_code;
      const isDay = weather?.data?.hourly?.is_day;
      const now = new Date();
      let startIndex = weatherTime.findIndex((t) => {
        return new Date(t).getHours() === now.getHours();
      })
      if (startIndex === -1) startIndex = 0;
      const NextweatherTime = weatherTime.slice(startIndex, startIndex + 10)
      const NextHourlyForecast = HourlyForecast.slice(startIndex, startIndex + 10)
      const NextWeatherCode = WeatherCode.slice(startIndex, startIndex + 10)
      const NextisDay = isDay.slice(startIndex, startIndex + 10)
      const week = weather?.data?.daily;
      const sunrise = week?.sunrise?.[0];
      const sunset = week?.sunset?.[0];
      let DayNightArray = [];
      if (sunrise && sunset) {
        let SunriseDate = new Date(sunrise)
        let SunsetDate = new Date(sunset)
        console.log(SunriseDate, SunsetDate)
        let SunriseHours = SunriseDate.getHours()
        let SunsetHours = SunsetDate.getHours();
        console.log(SunriseHours, SunsetHours)

        for (let hour = 0; hour < 24; hour++) {
          if (hour >= SunriseHours && hour < SunsetHours){
            DayNightArray.push(1)
          }else{
            DayNightArray.push(0)
          }
           
      }

      }

      const week_max = week?.temperature_2m_max;
      const week_min = week?.temperature_2m_min;
      const week_code = week?.weather_code;
      const week_time = week?.time;

      const GetDays = week_time.map((day) => {
        return new Date(day).toLocaleDateString('en-US', { weekday: 'short' });
      })
      setDayNight(DayNightArray)
      setCurrentCode(current_code)
      setWeek_Max_Temp(week_max)
      setWeek_Min_Temp(week_min)
      setWeek_Time(GetDays)
      setDayNight(NextisDay || [])
      setHourlyIcon(NextWeatherCode)
      setWeatherHourly(NextHourlyForecast)
      setHoursAPI(NextweatherTime)
      setWeather_Code(weather_code)
      setVsibility(weather_visibility)
      setPressure(wind_pressure)
      setWeather_Humidity(weather_humidity)
      setCurrent_Weather(current_weather)
      setWeather_Feels(weather_feels)
      setWind_Speed(wind_speed)
      setWind_Direction(wind_direction)
      setWeek_Code(week_code)
      setSunrise(sunrise)
      setSunset(sunset)
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const getWindDirection = (deg) => {
    if (deg === null || deg === undefined) return "N/A";
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(deg / 45) % 8;
    setDirection_Text(directions[index])
  }
  useEffect(() => {
    if (wind_Direction !== null && wind_Direction !== undefined) {
      getWindDirection(wind_Direction);
    } else {
      setDirection_Text("N/A");
    }
  }, [wind_Direction]);

  useEffect(() => {
    const formatTime = (timestr) => {
      const now = new Date(timestr);
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const ampm = hours >= 12 ? "PM" : "AM"
      hours = hours % 12 || 12
      return `${hours} : ${minutes} ${ampm}`
    }
   
    const formattedSunrise = formatTime(Sunrise)
    const formattedSunset = formatTime(Sunset) 
    setNewSunrise(formattedSunrise)
    setNewSunset(formattedSunset)
    formatTime(Sunrise)
    formatTime(Sunset)
  }, [Sunrise, Sunset])
  useEffect(() => {
    getData();
  }, [city]);
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      getWeatherData(latitude, longitude);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (!hoursAPI || hoursAPI.length === 0) return;

    const times = hoursAPI.map((time) => new Date(time).getHours());
    const hours12 = times.map((h) => h % 12 || 12);
    const ampm = times.map((h) => (h >= 12 ? "PM" : "AM"));

    settenHours(hours12);
    setAMPMAPI(ampm);

  }, [hoursAPI]);

  useEffect(() => {
    const now = new Date();
    const hoursArray = [];
    const ampm = []
    for (let i = 0; i < 12; i++) {
      const hours = (now.getHours() + i) % 24;
      const hour24 = hours % 12 || 12;
      const hour12 = hours < 12 ? "AM" : "PM";
      hoursArray.push(hour24);
      ampm.push(hour12);
    }
    sethours(hoursArray)
    setAMPM(ampm)
    
  }, [])
  return (
    <div>
      
      <ShareData.Provider
        value={{
          weatherData,
          inputVal,
          setInputVal,
          city,
          setCity,
          latitude,
          longitude,
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
          Hours,
          AMPM,
          tenHours,
          AMPMAPI,
          weatherHourly,
          hourlyIcon,
          DayNight,
          Week_Max_Temp,
          Week_Min_Temp,
          Week_Time,
          week_Code,
          NewSunrise,
          NewSunset,
          DarkLight,
          setDarkLight,
          CurrentCode
        }}
      >
        {children}
      </ShareData.Provider>
    </div>
  );
};

export default WeatherContext;
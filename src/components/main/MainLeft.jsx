import React from 'react'
import CityWeather from '../cityweather/CityWeather'
import HourlyForecast from '../hourlyforecast/HourlyForecast'
import SevenDayForecast from '../sevendayforecast/SevenDayForecast'

const MainLeft = () => {
  return (
    <div className='w-[58%] h-full '>
      <CityWeather />
    </div>
  )
}

export default MainLeft

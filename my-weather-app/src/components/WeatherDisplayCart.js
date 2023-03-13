import React,{useContext,useState} from "react"
import { Context } from "../Context"

function WeatherDisplayCart(){
  const {city,weatherData,location,iconUrl} = useContext(Context)

  const [hour,setHour] = useState(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))
  const condition = weatherData && weatherData.cod !== '400' ? <h1 className="weather--temp text-5xl font-bold">{(weatherData.main.temp - 273.15).toFixed(2)} °C</h1>:<h2>Hello</h2> 
  return(
    <>
      {location.name && <div className="display-cart w-[620px] h-[300px] mr-4 ring-4 ring-gray-800 shadow-2xl ">
        <div className="city-time-data">
          { location.name &&  <p className="city text-white font-bold ">{location.name}</p>}
          { location.name && <p className="time text-white shadow-lg bg-gray-900 rounded-lg">{hour}</p>}
        </div>
        <div className="temp-icon-data">
          { location.name && condition}
          {location.name && <img className="weather--icon w-32 mt-2" src={`http://openweathermap.org/img/wn/${iconUrl}@2x.png`}></img>}
        </div>
      </div>}
    </>
  )
}

export default React.memo(WeatherDisplayCart)

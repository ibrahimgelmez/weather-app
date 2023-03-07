import React,{useContext,useState} from "react"
import { Context } from "../Context"

export default function WeatherDisplayCart(){
  const {city,weatherData,location,iconUrl} = useContext(Context)

  const [hour,setHour] = useState(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))
  const condition = weatherData && weatherData.cod !== '400' ? <h1>{(weatherData.main.temp - 273.15).toFixed(2)} °C</h1>:<h2>Hello</h2> 
  return(
    <>
      <div className="display-cart">
          { location.name &&  <h2>{location.name}</h2>}
          { location.name && <p>{hour}</p>}
          { location.name && condition}
          {location.name && <img src={`http://openweathermap.org/img/wn/${iconUrl}.png`}></img>}
      </div>
    </>
  )
}
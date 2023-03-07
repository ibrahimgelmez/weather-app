import React,{useContext,useState} from "react"
import { Context } from "../Context"

function WeatherDisplayCart(){
  const {city,weatherData,location,iconUrl} = useContext(Context)

  const [hour,setHour] = useState(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))
  const condition = weatherData && weatherData.cod !== '400' ? <h1 className="weather--temp">{(weatherData.main.temp - 273.15).toFixed(2)} °C</h1>:<h2>Hello</h2> 
  return(
    <>
      <div className="display-cart">
        <div className="city-time-data">
          { location.name &&  <p className="city">{location.name}</p>}
          { location.name && <p className="time">{hour}</p>}
        </div>
        <div className="temp-icon-data">
          { location.name && condition}
          {location.name && <img className="weather--icon" src={`http://openweathermap.org/img/wn/${iconUrl}@2x.png`}></img>}
        </div>
      </div>
    </>
  )
}

export default React.memo(WeatherDisplayCart)

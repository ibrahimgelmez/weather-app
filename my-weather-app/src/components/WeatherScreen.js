import React,{useContext,useState} from "react";
import { Context } from "../Context";

export default function WeatherScreen(){
  const {city,setCity,weatherData,ready,setReady,toggleReady} = useContext(Context)
  
  console.log(weatherData)
  function handleChange(e){
    setCity(prevCity =>{
      return {
        ...prevCity,
        [e.target.name]:e.target.value
      }
    })
  }
  return(
    <>
      <h1>Weather App</h1>

      <form>
        <input 
        placeholder="City Name" 
        name="cityName" 
        value={city.cityName.value} 
        onChange={handleChange}
        ></input>
        <button type="button" onClick={toggleReady}>Submit</button>
      </form>

      {ready && <h2>Sıcaklık: {(weatherData.main.temp - 273.15).toFixed(2)} °C</h2>}


    </>
    
  )
}
import React,{useContext,useState} from "react";
import { Context } from "../Context";

export default function WeatherScreen(){
  const {city,setCity} = useContext(Context)

  function handleChange(e){
    setCity(prevCity =>{
      return {
        ...prevCity,
        [e.target.name]:e.target.value
      }
    })
  }
  console.log(city)
  return(
    <>
      <h1>Weather App</h1>

      <form >
        <input 
        placeholder="City Name" 
        name="cityName" 
        value={city.cityName.value} 
        onChange={handleChange}
        ></input>
      </form>



    </>
    
  )
}
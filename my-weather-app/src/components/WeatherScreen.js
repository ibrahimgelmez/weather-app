import React,{useContext,useState} from "react";
import { Context } from "../Context";

 function WeatherScreen(){
  const {city,setCity,weatherData,ready,setReady,toggleReady,location} = useContext(Context)

  
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
        value={city.cityName} 
        onChange={handleChange}
        ></input>
        <button type="button" onClick={toggleReady}>Submit</button>
      </form>
      

    </>
    
  )
}
export default React.memo(WeatherScreen)
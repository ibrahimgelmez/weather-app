import React,{useContext} from "react";
import { Context } from "../Context";

 function WeatherScreen(){
  const {city,setCity,toggleReady} = useContext(Context)

  
  function handleChange(e){
    setCity(prevCity =>{
      return {
        ...prevCity,
        [e.target.name]:e.target.value
      }
    })
  }
  return(
    <div className="text-center">
      <h1 className="text-5xl font-bold m-9 text-white ">Weather App</h1>

      <form>
        <input 
        className="mt-8 mb-12 w-[460px]  pl-3 py-2 rounded ring-2 ring-black focus:outline-none font-bold text-gray-900" 
        placeholder="City Name" 
        name="cityName" 
        value={city.cityName} 
        onChange={handleChange}
        
        ></input>
        <button className="bg-sky-500 py-2 px-8 rounded ring-1 ml-3 text-md text-white font-bold hover:ring-2
        hover:ring-sky-600 active:translate-y-1 transform transition" type="button" onClick={toggleReady}>Submit</button>
      </form>
      

    </div>
    
  )
}
export default React.memo(WeatherScreen)
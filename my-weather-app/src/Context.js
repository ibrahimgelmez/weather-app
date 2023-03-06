import React,{useState,useEffect} from "react";

export const Context = React.createContext(null)

export default function ContextProvider({children}){
  const [city,setCity] = useState({cityName:""})
  const [location,setLocation] = useState({name:"",lat:"",lon:""})
  const [weatherData,setWeatherData] = useState("")
  const [ready,setReady] = useState("off")

  //Geocoder API
  useEffect(()=>{
    fetch( `https://api.openweathermap.org/geo/1.0/direct?q=${city.cityName}&limit=1&appid=055820ae072cf82226acf17703157acb`)
    .then(res => res.json())
    .then((data) => {
      const lat=data[0].lat    
      const lon = data[0].lon
      const name = data[0].name
      setLocation({name:name,lat:lat,lon:lon})
    })
  },[ready])

  //Weather API

  useEffect(()=>{    
    fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=24e136864d3968c091ce8a05ed604d09` )
    .then(res => res.json())
    .then(data => setWeatherData(data))  
  },[location.name])
 
   

  function toggleReady(){
    setReady(prevReady => prevReady === "on" ? "off":"on"  )
    // setCity({cityName:""})
  }


  return(
    <Context.Provider value={{city,setCity,location,weatherData,setReady,ready,toggleReady}}>
      {children}
    </Context.Provider>
  )
}
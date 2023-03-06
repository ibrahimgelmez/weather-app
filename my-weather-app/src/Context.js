import React,{useState,useEffect} from "react";

export const Context = React.createContext(null)

export default function ContextProvider({children}){
  const [city,setCity] = useState({cityName:""})
  const [location,setLocation] = useState({lat:"",lon:""})

  useEffect(()=>{
    fetch( `https://api.openweathermap.org/geo/1.0/direct?q=${city.cityName}&limit=1&appid=055820ae072cf82226acf17703157acb`)
    .then(res => res.json())
    .then((data) => console.log(data[0].lat))
  },[city])
  console.log(location)
  return(
    <Context.Provider value={{city,setCity}}>
      {children}
    </Context.Provider>
  )
}
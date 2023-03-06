import React,{useContext,useState} from "react"
import WeatherDisplayCart from "./components/WeatherDisplayCart";
import WeatherScreen from "./components/WeatherScreen";
import { Context } from "./Context";

function App() {
  
  return (
    <div className="App">
      <WeatherScreen />
      <WeatherDisplayCart />
    </div>
  );
}

export default App;

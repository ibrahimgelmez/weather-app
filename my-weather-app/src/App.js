import React,{useContext} from "react"
import WeatherScreen from "./components/WeatherScreen";
import { Context } from "./Context";

function App() {
  
  return (
    <div className="App">
      <WeatherScreen/>
    </div>
  );
}

export default App;

import SearchBox from "./SeachBox"
import InfoBox from "./InfoBox"
import { useState } from "react"


export default function WeatherApp(){
    const[weatherInfo , setWeatherInfo]= useState({
        city: "Delhi",
        Weather: "fog",
        feelsLike: 13.97,
        humidity: 94,
        temp: 14.05,
        tempMax: 14.05,
        tempMin: 14.05
    })

    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center" }}>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}








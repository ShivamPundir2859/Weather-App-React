
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from 'react';

export default function SearchBox({ updateInfo}){
    let [city, setCity] = useState("");
    let [error, seterror] = useState(false);
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="5259dd55b987b7d9ca1ec6d5cd19e788";
    

    let getWeatherInfo = async() => {  
        try{
        let response = await fetch (`${API_URL}?q=${city}&appid=${API_KEY}&units=metric` );
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result ={
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            Weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        }   catch(err){
            throw err;
        }
    }  

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async(event) => {
        try{
        event.preventDefault();
        console.log("Searching weather for:", city);
        getWeatherInfo();
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch(err){
            seterror(true)
        }
        
    }

    return (
        <div className='SearchBox'>
            {/* <h1>Search for the Weather.</h1> */}
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/>
                <br></br> <br></br>
                <Button variant="contained" type='Submit'> Search </Button>
                <br></br>
                {error && <p style={{color: 'red'}}>No such place exists!!</p>}
            </form>
        </div>
    );
}




























































































































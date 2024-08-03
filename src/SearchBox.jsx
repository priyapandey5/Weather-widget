import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from "react";

export default function SearchBox( {updateInfo} ){
   let [city , setCity] = useState("");// or can be written as like this then u dont have to pass async(city)
   let [error , setError] = useState(false) ;
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c33076b8e1699301e0a16a6d48c40447";

    let getWeatherInfo = async () => { // can be written as (city) if state is not defines above it is define dbelow
      try{
        let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
       // console.log(jsonResponse);
        let result ={
          city:city,
          temp: jsonResponse.main.temp,
          temp_min: jsonResponse.main.temp_min,
          temp_max: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          pressure: jsonResponse.main.pressure,
          feels_like: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
      }catch(err){
        throw err;
      }
    };

    let handleChange = (evt) => { //The handleChange function updates the city state with the current value of the input field 
        setCity(evt.target.value); //evt.target refers to the DOM element that triggered the event evt.target.value accesses the current value of that input element
    };

    let handleSubmit = async (evt) => {
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err) {
            setError(true);
        }
        
    };

    return (
          <div className='SearchBox'>
            <h3>Search for the Weather </h3>
            <form onSubmit={handleSubmit} >
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Search</Button>
            {error &&  <p style={{color:"red"}}>  No such place exists.</p>}
            </form>
        </div>
    );
}
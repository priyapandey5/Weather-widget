import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city:"Delhi",
        feels_like: 41.44,
        humidity: 14,
        pressure: 1000,
        temp: 43.05,
        temp_max: 43.05,
        temp_min: 43.05,
        weather: "haze"
    });

    let updateInfo = (newInfo ) => {
        setWeatherInfo(newInfo);
    };
    
    return(
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Priya!</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/> {/* passing  InfoBox to weatherInfo  */}
        </div>
    );
}
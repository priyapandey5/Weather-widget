import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SearchBox from './SearchBox';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox( {info} ){
    const INIT_URL = "https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL ="https://images.unsplash.com/photo-1438449805896-28a666819a20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    //let info = { 
        // city:"Delhi",
        // feels_like: 41.44,
        // humidity: 14,
        // pressure: 1000,
        // temp: 43.05,
        // temp_max: 43.05,
        // temp_min: 43.05,
        // weather: "haze"
     //};

    return(
        <div className="Infobox">
        {/*<h1>WeatherInfo - {info.weather}</h1>*/}
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }}
         image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
         title="green iguana"/>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <div>Temperature = {info.temp}&deg;C</div>
        <div>Humidity = {info.humidity}</div>
        <div>Min Temp = {info.temp_min}&deg;C</div>
        <div>Max Temp = {info.temp_max}&deg;C</div>
        <p>The Weather can be described as a <i> {info.weather} </i> and feels like {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}
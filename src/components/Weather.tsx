import { useEffect, useState } from "react";

const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m';

type WeatherType = {
    temperature: string;
    windspeed: string;
}

export const Weather = () => {
    const [weatherData, setWeatherData] = useState<WeatherType>()

    useEffect(()=> {
    // const weather = fetch(url).then(response => response.json()).then((data) => {console.log(data)})
        const getWeather = async () => {
            const data = await fetch(url);
            const dataInJSON = await data.json()
            const weather: WeatherType = dataInJSON.current_weather;
            console.log(weather)
            setWeatherData(weather)
        }
        getWeather();

    }, [] )
    
    return (
        <div>
            <h1>Pogoda</h1>
            <h2>Temperatura: {weatherData ? weatherData.temperature : <div>ładuję dane</div>}</h2>
             {/* @ts-ignore */}
            {/* <h2>Temperatura: {weatherData.temperature}</h2> */}
            <h2>Wiatr: {weatherData ? weatherData.windspeed : "ładuję dane"}</h2>
        </div>
    )
}

           

import React from 'react'
import { useState } from 'react'
import './weatherCard.css'

const WeatherCard = ({ weather, temp }) => {

    const [isCelcius, setisCelcius] = useState(true)
    
    const handleChangeTemp = () => {
        setisCelcius(state => !state)
    }
    return (
        <article className='weather'>
            <h1 className='weather_tittle'>Weather App</h1>
            <h2 className='weather_subtitle'>{weather?.name}, {weather?.sys.country}</h2>
            <section className='weather_body'>
                <header className='weather_img'>
                    <img className='weather icon'
                        src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                </header>
                <article className='weather_info'>
                    <h3 className='weather_info_tittle'>"{weather?.weather[0].description}"</h3>
                    <ul className='weather_list'>
                        <li className='weather_item'><span className='weather_label'>Wind Speed</span><span className='weather_value'>{weather?.wind.speed} m/s</span></li>
                        <li className='weather_item'><span className='weather_label'>Clouds</span><span className='weather_value'>{weather?.clouds.all} %</span></li>
                        <li className='weather_item'><span className='weather_label'>Pressure</span><span className='weather_value'>{weather?.main.pressure} hPa</span></li>
                    </ul>
                </article>
                <footer className='weather_footer'>
                    <h2 className='weather_temp'>{
                        isCelcius ? `${temp?.celcius}°C` : `${temp?.fahrenheit}° F`}</h2>
                    <button className='weather_btn' onClick={handleChangeTemp}>change temperature</button>
                </footer>
            </section>
        </article>

    )
}

export default WeatherCard
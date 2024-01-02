import { useEffect, useState} from 'react'
import './index.css'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

function App() {
  
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [isLoading, setisLoading] = useState()
  const [temp, setTemp] = useState()

  const success=pos=>{
    const obj ={
      lat:pos.coords.latitude,
      lon:pos.coords.longitude
    }
    setCoords(obj)
  }
  useEffect(()=>{
    setisLoading(true)
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
 useEffect(()=>{
  if(coords){
    const API_KEY='17a76a7459afb51ab92284d8a96a0b4d'
    const{lat,lon}=coords
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    axios.get(url)
      .then(res=>{
        setWeather(res.data)
        console.log(res.data)
        const obj ={
          celcius:(res.data.main.temp-273.15).toFixed(1),
          fahrenheit:((res.data.main.temp-273.15)*9/5+32).toFixed(1)
        }
        setTemp(obj)
      })
      .catch(err=>console.log(err))
      .finally(()=>setisLoading(false))
     
  }
 }, [coords])


  return (
  <div className='app'>
    {isLoading?
    <h2>...Loading</h2>
    :(
    
    <WeatherCard 
    weather={weather}
    temp={temp}
    />
    )
    }
  </div>
    
  )
}

export default App

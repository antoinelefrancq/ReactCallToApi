import axios from 'axios';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';


const CityWeather = ({city,zip,country})=>{
  const [temperature, setTemperature]= useState(null)

  useEffect(()=>{
    const apiKey=process.env.REACT_APP_API_KEY
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${apiKey}&units=metric`)
    .then((response)=>{
        setTemperature(Math.round(response.data.main.temp))
    })
  }, [])


  return(
    <article className='cityWeather'>
        <h1 className='city'>{city}</h1>
        <h2 className='zip'>{zip}</h2>
        <p className='temperature'>{temperature}° C</p>
    </article>
  )
};

CityWeather.propTypes={
    city:PropTypes.string.isRequired,
    zip:PropTypes.string.isRequired,
    country:PropTypes.string.isRequired,
}

export default CityWeather
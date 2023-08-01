import React, { useState } from 'react';
import './weather.css';
const api = {
  key: '9d142266c2ffa7306f16c65470244016',
  base: 'https://api.openweathermap.org/data/2.5/'
}
const Weather = () => {
  const [query, setQuery] = useState('');
  const handleInput = (e) => {
    setQuery(e.target.value);
  }
  const [weather, setWeather] = useState({})
  const search = (e) => {
    //console.log(e);
    if (e.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`).then(res => res.json()).then(data => {
        console.log(data);
        setWeather(data);
        setQuery('');//to empty the input field
      })
    }
  }
  const dateBuilder = (d) => {
    //new date method returns date in a different format than we want therefore we write this fuction
    let months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednusday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[d.getDay()];
    //get day returns the day number(0-sunday,1-monday ...)
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return (`${day} ${date} ${month} ${year}`);

  }
  return (
    <div className={(typeof weather.main!='undefined')?((weather.main.temp>16)?'app-warm':'app-cold'):'app-cold'} >
      <main>

        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Search city...' onChange={handleInput} value={query} onKeyPress={search} />
        </div>
{(typeof weather.main != 'undefined')?(
  <div>
        <div className='location-box'>
        <div className='location'>
          {weather.name},{weather.sys.country}
        </div>
        <div className='date'>
          {dateBuilder(new Date())}
        </div>
        </div>

        <div className='weather-box'>
        <div className='temp'>
          {Math.round(weather.main.temp)}&deg;C
        </div>
        
        <div className='weather'>
          {weather.weather[0].main}
        </div>
        </div>

</div>
) : ('Data Not Found ')}
        

      </main>
    </div>
  )
}

export default Weather
import React, { useState } from "react";
import { API_KEY } from "../../config";


const SearchCity = () => {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(res => setWeather(res));
  };

  return (
    <>
      <input 
        onChange={event => setCity(event.target.value)}
        value={city}
      />
      <button onClick={getWeather}>Search</button>
    </>
  );
};
  
export default SearchCity;

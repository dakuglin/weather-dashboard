import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../config";
import { Context } from "../Context";
import { Header } from "./Header";
import { Content } from "./Content";
import { Search } from "./Search";
import { Weather } from "./Weather";


export const Main = () => {

  const [weather, setWeather] = useState();

  const data = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;

    //axios needs to resolve the promise after making the request
    const request = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
    )
    //will not go further until axios successfully made request and recieved data back from API
    const response = await request; 

    //set the weather state to what we get back from the API
    setWeather(response.data); //storing all our wanted data in component state
  }

  //need to log weather state outside of async function becuase it is also asyncrnous
  weather && console.log(weather);

  return (
    <>
    <div className="main">
      <div className="split right">
        <Header />
      </div>
      <div className="split left">
        <Content>
          <Context.Provider value={{ data, weather }}> 
            <Search />
            { weather && <Weather /> }
          </Context.Provider>
        </Content>
      </div>
    </div>
    </>
  );
};
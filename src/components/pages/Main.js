import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../../config.js";
import { Context } from "../../Context";
import { Header } from "../common/Header";
import { Content } from "../common/Content";
import { Search } from "../common/Search";
import { Weather } from "../common/Weather";
import styled, { css } from "styled-components";

const Split = styled.div`
  height: 100%;
  width: 55%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden; 
  ${props => props.left ? css`
    left: 0;
    background: url("https://images.pexels.com/photos/3090955/pexels-photo-3090955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    width: 55%;

    ` : css`
    right: 0;
    background-color:#dadbdc;
    width: 45%;
  `}
`;

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
      <Split left>
        <Header weather/>
      </Split> 
      <Split >  
        <Content>
          <Context.Provider value={{ data, weather }}> 
            <Search />
            { weather && <Weather /> }
          </Context.Provider>
        </Content>
      </Split> 
    </div>
    </>
  );
};
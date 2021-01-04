import React, { useEffect } from "react";
import { Header } from "./Header";
// import { API_KEY } from "../../config";
import axios from "axios";

const API_KEY = 'b9f7c13b06d755b57198e1781901ad93';

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

export const Main = () => {

  const apiCall = async () => {

    //axios needs to resolve the promise after making the request
    const request = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=${API_KEY}`
    )
    //will not go further until axios successfully made request and recieved data back from API
    const response = await request; 

    console.log(response)
  }

  useEffect(() => {
    apiCall() //makes sure apiCall() executes as soon as the page loads
  }, [])


  return (
    <>
    <div className="main">
      <Header />
    </div>
    </>
  );
};
import React, { Component } from "react";
import Naviagtion from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Forecast from "./components/Forecast/Forecast";
import City from "./components/City/City";
import "./App.css";


const API_KEY = "b9f7c13b06d755b57198e1781901ad93"; //API Key for weather database query

class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    temp_max: undefined,
    temp_min: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined,
  };

  getWeather = async (event) => {

    event.preventDefault();

    const city = event.target.elements.city.value;
    
    const apiQuery = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
    );


    const result = await apiQuery.json();

    console.log(result);

    this.setState({
      city: result.name,
      country: result.sys.country,
      temperature: result.main.temp,
      temp_max: result.main.temp_max,
      temp_min: result.main.temp_min,
      humidity: result.main.humidity,
      description: result.weather[0].description,
      icon: result.weather[0].icon,
      error: "",
    });
  };

  render() {
    return (   
      //JSX
      <>
      <div className="split left">
        <City 
          city={this.state.city}
          country={this.state.country}
        />
        <div className="centered">
          <Hero />
        </div>
      </div>

      <div className="split right">
        <Naviagtion getWeather={this.getWeather}/>
        <Forecast 
          temperature={this.state.temperature}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          humidity={this.state.humidity}
          description={this.state.description}
          icon={this.state.icon}
          error={this.state.error}
        />
      </div>
      </>
    );
  };
};

export default App;
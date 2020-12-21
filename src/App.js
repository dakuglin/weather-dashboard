import React, { Component } from "react";
import Title from "./components/Title/Title";
import Search from "./components/Search/Search";
import Forecast from "./components/Forecast/Forecast";

const API_KEY = "b9f7c13b06d755b57198e1781901ad93";

class App extends Component {

  state = {
    city: undefined,
    temperature: undefined,
    weather: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  getWeather = async (event) => {

    event.preventDefault();

    const city = event.target.elements.city.value;

    const apiQuery = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    const result = await apiQuery.json();

    console.log(result);

    this.setState({
      temperature: result.main.temp,
      city: result.name,
      humidity: result.main.humidity,
      description: result.weather[0].description,
      error: "",
    })

  }

  render() {
    return(   //JSX
      <>
        <Title />
        <Search getWeather={this.getWeather}/>

        <Forecast 
          city={this.state.city}
          temperature={this.state.temperature}
          weather={this.state.weather}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </>
    )
  }
}

export default App;
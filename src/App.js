import React, { Component } from "react";
import Title from "./components/Title/Title";
import SearchBar from "./components/SearchBar/SearchBar";
import Forecast from "./components/Forecast/Forecast";

const API_KEY = "b9f7c13b06d755b57198e1781901ad93";

class App extends Component {
  render() {
    return(   //JSX
      <>
        <Title />
        <SearchBar />
        <Forecast />
      </>
    )
  }
}

export default App;
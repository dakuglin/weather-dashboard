import React, { Component } from "react";
import {
    TiWeatherCloudy,
    TiWeatherSnow,
    TiWeatherSunny
} from "react-icons/ti";


class Hero extends Component {
    render() {
        return(
            <>
            <h1 className="title">Weather Tracker</h1>
            <p className="title-text">know before you go...</p>
            <p><TiWeatherSunny /> <TiWeatherCloudy /> <TiWeatherSnow /></p>
            </>
        )
    }
};

export default Hero;

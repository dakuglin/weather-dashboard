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
                <p className="title-text">know before you go.</p>
                <p><TiWeatherCloudy /> <TiWeatherSnow /> <TiWeatherSunny /></p>
            </>
        )
    }
};

export default Hero;

import React,{ Component } from "react";
import { WiFahrenheit } from "react-icons/wi"

class Forecast extends Component {
    render() {
        return (
            <>
            <div className="city-temperature"> {this.props.temperature} <WiFahrenheit /></div>
            <div>Low: {this.props.temp_min} High: {this.props.temp_max}</div>
            <div>
                
                <div> Humidity: {this.props.humidity}</div>
                <div>Weather Condition: {this.props.description}</div>
            </div>
     
            </>
        )
    }
}

export default Forecast;
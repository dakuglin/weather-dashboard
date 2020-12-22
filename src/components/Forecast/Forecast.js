import React,{ Component } from "react";
import { WiFahrenheit } from "react-icons/wi"

class Forecast extends Component {

    render() {
        return (
            <>
            <div className="city-temperature"> {this.props.temperature} <WiFahrenheit /></div>
            <div className="temp-low-high">Low: {this.props.temp_min} <WiFahrenheit /> High: {this.props.temp_max} <WiFahrenheit /></div>
            <div>
{/*                 
                <div> Humidity: {this.props.humidity}</div>
                <div>Weather Condition: {this.props.description}</div> */}
            </div>
     
            </>
        )
    }
}

export default Forecast;
import React,{ Component } from "react";

class Forecast extends Component {
    render() {
        return (
            <>
            <div>
                <p>Location: {this.props.city}</p>
                <p>{this.props.temperature}</p>
                <p> Low: {this.props.temp_min} High: {this.props.temp_max}</p>
                Humidity: {this.props.humidity}
                Weather Condition: {this.props.description}
            </div>
            </>
        )
    }
}

export default Forecast;
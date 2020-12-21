import React,{ Component } from "react";


class Forecast extends Component {
    render() {
        return (
            <>
                <div>
                   Location: {this.props.city}
                    Temperature: {this.props.temperature}
                    Humidity: {this.props.hmuidity}
                    Weather Condition: {this.props.description}
                </div>
            </>
        )
    }
}

export default Forecast;
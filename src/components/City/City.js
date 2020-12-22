import React, { Component } from "react";

class City extends Component {
    render() {
        return(
            <>
             <div className="city-name">
                {this.props.city} {this.props.country}
            </div>
            </>
        )
    }
};

export default City;
import React, { Component } from "react";


class Search extends Component {
    render() {
        return (
            <>
                <form onSubmit = {this.props.getWeather}>
                    <input type="text" name="city" placeholder="City"/>
                    <button>Get Weather</button>
                </form>
            </>
        ) 

        
    }
}

export default Search;
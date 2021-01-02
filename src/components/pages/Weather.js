import React, { Component } from "react";

var APIKey = "b9f7c13b06d755b57198e1781901ad93" //my API key

class Weather extends Component {

    getWeather = () => { 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=${APIKey}`) 
        .then(function(response) {
            console.log(response)
        })
    } 

    constructor(props) { 
        super(props); 

        this.state = { 
            location: "",
            place: "",
            temp: "",
            weather: "",
        }; 
    }; 
    
    render() { 
  
        return ( 
            <>
            </>
        ); 
    } 
  
    changeValue = (event) => { 
  
        this.setState({ 
            location: event.target.value 
        }); 
    } 
  
           
} 

export default Weather;
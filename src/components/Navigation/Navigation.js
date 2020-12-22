import React, { Component } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import Forecast from "../Forecast/Forecast";
import {
    TiWeatherCloudy,
    TiWeatherSnow,
    TiWeatherSunny
} from "react-icons/ti";

class Navigation extends Component {

    constructor() {
        super();
        this.state = {
          name: "React",
          showHideForecast: false,
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        console.log(name);
        this.setState({ showHideForecast: !this.state.showHideForecast });
    }
    
    render() {

        const { showHideForecast } = this.state;
        
        return (
            <>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><span className="navbar-title">Weather Tracker<TiWeatherSunny /> <TiWeatherCloudy /> <TiWeatherSnow /></span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Form onSubmit = {this.props.getWeather}>
                    <input type="text" name="city" placeholder="Enter a city..." className="mr-sm-2"/>
                    <button onClick={() => this.hideComponent("showHideForecast")}>Search</button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
            <div>
                {showHideForecast &&  
                <Forecast 
                temperature={this.state.temperature}
                temp_max={this.state.temp_max}
                temp_min={this.state.temp_min}
                humidity={this.state.humidity}
                description={this.state.description}
                icon={this.state.icon}
                error={this.state.error}
                /> 
                }
            </div>
            </>
        );   
    };
};

export default Navigation;
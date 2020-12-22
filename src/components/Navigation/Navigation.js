import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import {
    TiWeatherCloudy,
    TiWeatherSnow,
    TiWeatherSunny
} from "react-icons/ti";

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Weather Tracker <TiWeatherSunny /> <TiWeatherCloudy /> <TiWeatherSnow /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                {/* <Form inline onSubmit = {this.props.getWeather}>
                <FormControl type="text" name="city"placeholder="Enter a city..." className="mr-sm-2" />
                <Button variant="outline-success">Get Weather</Button>
                </Form> */}
                <Form onSubmit = {this.props.getWeather}>
                    <input type="text" name="city" placeholder="Enter a city..." className="mr-sm-2"/>
                    <button>Get Weather</button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        );   
    };
};

export default Navigation;
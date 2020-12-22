import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Weather Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                {/* <Form inline onSubmit = {this.props.getWeather}>
                <FormControl type="text" name="city"placeholder="Enter a city..." className="mr-sm-2" />
                <Button variant="outline-success">Get Weather</Button>
                </Form> */}
                
                <form onSubmit = {this.props.getWeather}>
                    <input type="text" name="city" placeholder="Enter a city"/>
                    <button>Get Weather</button>
                </form>
            </Navbar.Collapse>
            </Navbar>
        );   
    };
};

export default Navigation;
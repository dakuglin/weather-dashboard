import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Context } from "../../Context";


export const Search = () => {

  const { data } = useContext(Context);

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Weather Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <form onSubmit={ data }>
            <input 
              placeholder="Search a city..."
              name="city"
              type="text"
            />
            <button>Get Weather</button>
          </form>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
};
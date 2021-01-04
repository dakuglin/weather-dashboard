import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Context } from "../../Context";
import styled from "styled-components";

const Btn = styled.button`
  padding: 8px;
  border-radius: 4px;
`;


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
              name="city"
              type="text"
            />
            <Btn>Get Weather</Btn>
          </form>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
};
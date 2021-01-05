import React from "react";
import { Main } from "./components/pages/Main";
import {createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  h1 {
    color: whitesmoke;
    text-align: center;
    font-size: 75px;
    padding-bottom: 10px;
    margin-top: 70%;
    font-family: 'Lusitana', serif;
  }
  h2 {
    color:whitesmoke;
    text-align: center;
    font-size: 40px;
    font-style: italic;
    font-family: 'Lusitana', serif;
  }
  input {
    margin-right: 15px;
    padding: 3px;
  }
  button {
    background-color: #7f3800;
    color: whitesmoke;
    border: none;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    cursor: pointer; 
  }
`;

const App = () =>  {

  return (   
    <>
    <GlobalStyle />
    <Main />
    </>
  );
};

export default App;
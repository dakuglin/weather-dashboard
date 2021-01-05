import React, { useContext } from "react";
import { Context } from "../../Context";
import styled from "styled-components";

// const cityName = styled.div`
//   text-align: center;
//   display: block;
//   margin: 0 auto;
//   color: #7f3800;
//   font-size: 100px;
// `;

export const City = () => {

  const { weather } = useContext(Context);

  return (
    <>
    {/* <cityName>{weather.name}, {weather.sys.country}</cityName> */}
    </>
  );
};
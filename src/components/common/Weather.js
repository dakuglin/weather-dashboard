import React, { useContext} from "react";
import { Context } from "../../Context";
import { WiFahrenheit } from "react-icons/wi"
import styled from "styled-components";

const CityTemp = styled.div`
  font-size: 150px;
  padding-left: 40px;
  text-align: center;
  font-style: italic;
  margin-top: 150px;
  color: #3c4858;
  padding-bottom: 20px;
`;

const LowHigh = styled.div`
  font-size: 30px;
  text-align: center;
  color: #3c4858;
`;

export const Weather = () => {

  const { weather } = useContext(Context);

  return (
    <>
    <div className="Weather">
      <div>
        <CityTemp>{weather.main.temp} <WiFahrenheit /></CityTemp>
        <LowHigh>Low: {weather.main.temp_min} <WiFahrenheit /> High: {weather.main.temp_max} <WiFahrenheit /></LowHigh>
      </div>

    </div>
    </>
  );
};
import React, { useContext} from "react";
import { Context } from "../../Context";
import { WiFahrenheit } from "react-icons/wi"
import styled from "styled-components";

const City = styled.div`
  font-size: 100px;
  font-style: italic;
  color: whitesmoke;
  text-align: center;
  padding-top: 100px;
  color:  #7f3800;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: 30px;
`;

const CityTemp = styled.div`
  font-size: 130px;
  padding-left: 40px;
  text-align: center;
  margin-top: 50px;
  color: #3c4858;
  padding-bottom: 30px;
  font-family: 'Montserrat', sans-serif;
`;

const LowHigh = styled.div`
  font-size: 50px;
  text-align: center;
  color: #3c4858;
  font-family: 'Montserrat', sans-serif;
`;

const Description = styled.div`
   font-size: 70px;
  text-align: center;
  color: #3c4858;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: 30px;
`;
const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

export const Weather = () => {

  const { weather } = useContext(Context);

  return (
    <>
    <div className="Weather">
      <div>
        <City>{weather.name}, {weather.sys.country}</City> 
        <Image src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Current weather"/>
        <Description>{weather.weather[0].description}</Description>
        <CityTemp>{weather.main.temp}<WiFahrenheit /></CityTemp>
        <LowHigh>low {weather.main.temp_min}<WiFahrenheit /> high {weather.main.temp_max}    <WiFahrenheit /></LowHigh>
      </div>
    </div>
    </>
  );
};
import React from "react";
import {
  TiWeatherStormy,
  TiWeatherSnow,
  TiWeatherSunny,
} from "react-icons/ti"


export const Header = () => {

  return (
    <>
    <div className="header">
      <h1 className="header-title">Weather Tracker</h1>
      <h2>know before you go...</h2>
      <h2>
        <TiWeatherSnow />
        <TiWeatherStormy />
        <TiWeatherSunny />
      </h2>
    </div>
    </>
  );
};


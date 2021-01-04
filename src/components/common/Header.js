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
      <p>know before you go...</p>
      <TiWeatherSnow />
      <TiWeatherStormy />
      <TiWeatherSunny />
    </div>
    </>
  );
};


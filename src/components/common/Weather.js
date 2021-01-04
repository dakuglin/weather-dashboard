import React, { useContext} from "react";
import { Context } from "../../Context";

export const Weather = () => {

  const { weather } = useContext(Context);

  return (
    <>
    <div className="Weather">
      <p>Weather for </p> <span>Denver</span>
      <div>
        <p>Tempature:{weather.temp}</p>
      </div>

    </div>
    </>
  );
};
import React from "react";

import { WeatherRow } from "./WeatherRow";

import "./style.scss";

interface IWeatherLayout {
  feels_like: number;
  wind_speed: number;
  humidity: number;
  pressure: number;
  min: number;
  max: number;
}

export const WeatherLayout: React.FC<IWeatherLayout> = ({
  feels_like,
  humidity,
  pressure,
  wind_speed,
  max,
  min,
}): React.ReactElement => {
  return (
    <>
      <div className="weather__details">
        <WeatherRow label="Details" />
        <WeatherRow
          label="Feels like"
          value={
            <>
              {Math.round(feels_like)}
              <sup>&#8451;</sup>
            </>
          }
        />
        <WeatherRow label="Wind" value={`${wind_speed}m/s`} />
        <WeatherRow
          label="Min"
          value={
            <>
              {Math.round(min)}
              <sup>&#8451;</sup>{" "}
            </>
          }
        />
        <WeatherRow
          label="Max"
          value={
            <>
              {Math.round(max)}
              <sup>&#8451;</sup>
            </>
          }
        />
        <WeatherRow label="Humidity" value={<>{humidity}%</>} />
        <WeatherRow label="Pressure" value={<>{pressure} hPa</>} />
      </div>
    </>
  );
};

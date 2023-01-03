import React from "react";

import "./style.scss";

interface IWeatherLayout {
  feels_like: number;
  wind_speed: number;
  humidity: number;
  pressure: number;
}

export const WeatherLayout: React.FC<IWeatherLayout> = ({
  feels_like,
  humidity,
  pressure,
  wind_speed,
}): React.ReactElement => {
  return (
    <>
      <div className="weather__details">
        <div className="weather__parameter-row">
          <span className="weather__parameter-label">Details</span>
        </div>
        <div className="weather__parameter-row">
          <span className="weather__parameter-label">Feels like</span>
          <span className="weather__parameter-value">
            {feels_like}
            <sup>&#8451;</sup>
          </span>
        </div>
        <div className="weather__parameter-row">
          <span className="weather__parameter-label">Wind</span>
          <span className="weather__parameter-value">{wind_speed}m/s</span>
        </div>
        <div className="weather__parameter-row">
          <span className="weather__parameter-label">Humidity</span>
          <span className="weather__parameter-value">{humidity}%</span>
        </div>
        <div className="weather__parameter-row">
          <span className="weather__parameter-label">Pressure</span>
          <span className="weather__parameter-value">{pressure} hPa</span>
        </div>
      </div>
    </>
  );
};

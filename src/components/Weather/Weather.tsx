import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { IWeatherDailyData, IWeatherData } from "../../store/types";
import { DailyForecast } from "../DailyForecast/DailyForecast";

import "./style.scss";

interface IWeatherProps {
  data: IWeatherData;
  dailyData: IWeatherDailyData;
}

export const Weather: React.FC<IWeatherProps> = ({ data, dailyData }): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <>
      <section className="weather__section">
        <div className="weather">
          <div className="top">
            <button className="weather__back" onClick={() => navigate("/")}>
              <FaArrowLeft color="white" />
            </button>
            <div>
              <p className="weather__city">
                {data.name}, {data.sys.country}
              </p>
              <p className="weather__description">{data.weather[0].description}</p>
            </div>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} />
          </div>
          <div className="bottom">
            <p className="temperature">
              {Math.round(data.main.temp)}
              <sup>&#8451;</sup>
            </p>
            <div className="weather__details">
              <div className="weather__parameter-row">
                <span className="weather__parameter-label">Details</span>
              </div>
              <div className="weather__parameter-row">
                <span className="weather__parameter-label">Feels like</span>
                <span className="weather__parameter-value">
                  {Math.round(data.main.feels_like)}
                  <sup>&#8451;</sup>
                </span>
              </div>
              <div className="weather__parameter-row">
                <span className="weather__parameter-label">Wind</span>
                <span className="weather__parameter-value">{data.wind.speed} m/s</span>
              </div>
              <div className="weather__parameter-row">
                <span className="weather__parameter-label">Humidity</span>
                <span className="weather__parameter-value">{data.main.humidity}%</span>
              </div>
              <div className="weather__parameter-row">
                <span className="weather__parameter-label">Pressure</span>
                <span className="weather__parameter-value">{data.main.pressure} hPa</span>
              </div>
            </div>
          </div>
        </div>
        <DailyForecast dailyData={dailyData} />
      </section>
    </>
  );
};

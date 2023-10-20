import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { IWeatherData } from "../../store/types/currentWeather";
import { IWeatherDailyData } from "../../store/types/dailyWeather";

import { DailyForecast } from "../DailyForecast/DailyForecast";

import { WeatherLayout } from "./WeatherLayout/WeatherLayout";

import "./style.scss";

import { HourlyWeather } from "../HourlyForecast/HourlyForecast";
import { IWeatherHourlyData } from "../../store/types/hourlyWeather";

interface IWeatherProps {
  data: IWeatherData;
  dailyData: IWeatherDailyData;
  hourlyData: IWeatherHourlyData;
}

export const Weather: React.FC<IWeatherProps> = ({ data, dailyData, hourlyData }): React.ReactElement => {
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
              <p className="weather__description">
                {new Date(data.dt * 1000).toLocaleDateString("en", { weekday: "long" })}
              </p>
              <p className="weather__description">{data.weather[0].description}</p>
            </div>
            <img alt="weather_icon" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} />
          </div>
          <div className="bottom">
            <p className="temperature">
              {Math.round(data.main.temp)}
              <sup>&#8451;</sup>
            </p>
            <WeatherLayout
              min={data.main.temp_min}
              max={data.main.temp_max}
              feels_like={data.main.feels_like}
              humidity={data.main.humidity}
              pressure={data.main.pressure}
              wind_speed={data.wind.speed}
            />
          </div>

          <HourlyWeather hourlyData={hourlyData} />
        </div>
        <DailyForecast dailyData={dailyData} />
      </section>
    </>
  );
};

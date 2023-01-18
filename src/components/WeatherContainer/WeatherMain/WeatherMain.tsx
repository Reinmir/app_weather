import React, { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { IResponseCity } from "../../../types/weather-type";
import ChoiceIcon from "../../../utils/ChoiceIcon";
import { convertedLocalDate } from "../../../utils/convertedLocalDate";
import { ResultDaysType } from "../../../utils/formattedDate";
import { weatherAverage } from "../../../utils/weatherAverage";

interface IPropsType {
  params: IResponseCity;
  currentWeather: ResultDaysType;
}

const WeatherMain: FC<IPropsType> = ({ params, currentWeather }): React.ReactElement => {
  const date = convertedLocalDate(currentWeather.weather[0].dt_txt);
  const description = currentWeather.weather[0].weather[0].description;
  const pop = (currentWeather.weather[0].pop * 100).toFixed(0);
  const humidity = currentWeather.weather[0].main.humidity.toFixed(0);
  const windSpeed = currentWeather.weather[0].wind.speed.toFixed(0);
  const temp = weatherAverage(currentWeather.weather).toFixed(0);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="weather-main">
      <div className="weather__data">
        <div className="weather__more">
          <FaArrowLeft size={25} onClick={handleBack} style={{ cursor: "pointer" }} />
          <div className="weather__icon">
            <ChoiceIcon value={description} />
          </div>
          <div className="weather__temp">
            <span>Average t°</span>
            <div>
              {temp}
              <span>
                <sup>&#8451;</sup>
              </span>
            </div>
          </div>
          <ul className="weather__list">
            <li className="weather__item">
              Precipitation probability:
              <span> {pop}%</span>
            </li>
            <li className="weather__item">
              Humidity:
              <span> {humidity}%</span>
            </li>
            <li className="weather__item">
              Wind:
              <span> {windSpeed}</span> m/s
            </li>
            <li className="weather__item">
              Minimum temperature:
              <span>
                 {Math.round(currentWeather.weather[0].main.temp_min)} <sup>&#8451;</sup>{" "}
              </span>
            </li>
            <li className="weather__item">
              Maximum temperature:
              <span>
                 {Math.round(currentWeather.weather[0].main.temp_max)} <sup>&#8451;</sup>
              </span>
            </li>
          </ul>
        </div>
        <div className="weather__info">
          <div className="weather__city">
            {params.name}
            {params.country && ","} <span>{params.country}</span>
          </div>
          <div>{date}</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherMain;

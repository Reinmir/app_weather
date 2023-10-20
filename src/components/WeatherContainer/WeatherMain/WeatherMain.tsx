import React from "react";
import { IResponseCity } from "../../../store/types/weather";
import ChoiceIcon from "../../../store/utils/ChoiceIcon";
import { convertedLocalDate } from "../../../store/utils/convertedToLocalDate";
import { ResultDaysType } from "../../../store/utils/formattedData";
import { weatherAverage } from "../../../store/utils/weatherAverage";

interface IWeatherMainProps {
  params: IResponseCity;
  currentWeather: ResultDaysType;
}

export const WeatherMain: React.FC<IWeatherMainProps> = ({ currentWeather, params }): React.ReactElement => {
  const date = convertedLocalDate(currentWeather.weather[0].dt_txt);
  const description = currentWeather.weather[0].weatherMain[0].description;
  const pop = (currentWeather.weather[0].pop * 100).toFixed(0);
  const humidity = currentWeather.weather[0].main.humidity.toFixed(0);
  const windSpeed = currentWeather.weather[0].wind.speed.toFixed(0);
  const temp = weatherAverage(currentWeather.weather).toFixed(0);
  return (
    <section className="weather__main">
      <div className="weather__data">
        <div className="weather__more">
          <ChoiceIcon value={description} />
        </div>
        <div className="weather__temp">
          {temp}
          <sup>&#8451;</sup>
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
        </ul>
      </div>
      <div className="weather__info">
        <div className="weather__city">
          {params.name} {params.country && ","} <span>{params.country}</span>
        </div>
        <div>{date}</div>
        <div>{description}</div>
      </div>
    </section>
  );
};

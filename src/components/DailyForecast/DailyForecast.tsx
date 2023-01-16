import React from "react";

import { IWeatherDailyData } from "../../store/types/dailyWeather";

import "./style.scss";

interface IWeatherDailyProps {
  dailyData: IWeatherDailyData;
}

export const DailyForecast: React.FC<IWeatherDailyProps> = ({ dailyData }): React.ReactElement => {
  return (
    <section className="daily__container">
      {dailyData.daily.slice(1, 6).map((item) => (
        <section key={item.dt}>
          <div className="daily__item">
            <label className="day">{new Date(item.dt * 1000).toLocaleDateString("en", { weekday: "long" })}</label>
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="" />
            <label className="description">{item.weather[0].description}</label>
            <label className="min-max">
              {Math.round(item.temp.min)}
              <sup>&#8451;</sup> / {Math.round(item.temp.max)}
              <sup>&#8451;</sup>
            </label>
          </div>
        </section>
      ))}
    </section>
  );
};

import React from "react";

import { IWeatherDailyData } from "../../store/types/dailyWeather";

import "./style.scss";

interface IWeatherDailyProps {
  dailyData: IWeatherDailyData;
}

export const DailyForecast: React.FC<IWeatherDailyProps> = ({ dailyData }): React.ReactElement => {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const dayInWeek = new Date().getDay();
  const forecastDays = days.slice(dayInWeek, days.length).concat(days.slice(0, dayInWeek));

  return (
    <section className="daily__container">
      {dailyData.list.splice(0, 5).map((item, idx) => (
        <section key={item.dt}>
          <div className="daily__item">
            <label className="day">{forecastDays[idx]}</label>
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="" />
            <label className="description">{item.weather[0].description}</label>
            <label className="min-max">
              {Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C
            </label>
          </div>
        </section>
      ))}
    </section>
  );
};

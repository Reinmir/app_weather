import React from "react";
import { IWeatherDailyData } from "../../store/types/dailyWeather";

import "./style.scss";

interface IWeatherDailyProps {
  dailyData: IWeatherDailyData;
}

export const DailyForecast: React.FC<IWeatherDailyProps> = ({
  dailyData,
}): React.ReactElement => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // let d = new Date(dailyData.list[0].dt* 1000);
  // let dayName = days[d.getDay()];
  // console.log(dayName);
  const res = dailyData.list.map(
    (item) => days[new Date(item.dt_txt).getDay()]
  );
  const dayInWeek = new Date().getDay();
  const forecastDays = days
    .slice(dayInWeek, days.length)
    .concat(days.slice(0, dayInWeek));

  console.log(dailyData.list[0].main.temp.toFixed(0));
  return (
    <section className="daily__container">
      {dailyData.list.splice(0, 5).map((item, idx) => (
        <section key={idx}>
          <div className="daily__item">
            <label className="day">{forecastDays[idx]}</label>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt=""
            />
            <br />
            <label className="description">{item.weather[0].description}</label>
            <br />
            <label className="min-max">
              {Math.round(item.main.temp_max)}°C /
              {Math.round(item.main.temp_min)}°C
            </label>
          </div>
        </section>
      ))}
    </section>
  );
};

import React from "react";
import { IWeatherDailyData } from "../../store/types";

import "./style.scss";

interface IWeatherDailyProps {
  dailyData: IWeatherDailyData;
}

export const DailyForecast: React.FC<IWeatherDailyProps> = ({ dailyData }): React.ReactElement => {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let d = new Date(dailyData.dt * 1000);
  let dayName = days[d.getDay()];
  console.log(dayName);

  return (
    <section className="daily__container">
      <div className="daily__blocks">
        {dailyData.name} {dailyData.main.temp.toFixed(0)} {dayName}
      </div>
      <div className="daily__blocks">
        {dailyData.name} {dailyData.main.temp.toFixed(0)} {dayName}
      </div>
      <div className="daily__blocks">
        {dailyData.name} {dailyData.main.temp.toFixed(0)} {dayName}
      </div>
      <div className="daily__blocks">
        {dailyData.name} {dailyData.main.temp.toFixed(0)} {dayName}
      </div>
      <div className="daily__blocks">
        {dailyData.name} {dailyData.main.temp.toFixed(0)} {dayName}
      </div>
    </section>
  );
};

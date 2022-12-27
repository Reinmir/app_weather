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

  return (
    <section className="daily__container">
      <div className="daily__blocks"></div>
    </section>
  );
};

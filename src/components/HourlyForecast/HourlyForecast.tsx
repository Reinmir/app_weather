import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { IWeatherData } from "../../store/types/currentWeather";
import { IWeatherHourlyData } from "../../store/types/hourlyWeather";

interface IHourlyForecastProps {
  hourlyData: IWeatherHourlyData;
}

export const HourlyWeather: React.FC<IHourlyForecastProps> = ({ hourlyData }): React.ReactElement => {
  const currentData = useSelector((state: RootState) => state.weather.data);
  const dailyData = useSelector((state: RootState) => state.dailyWeather.dailyData);

  return (
    <>
      <div className="hourly__container">
        {hourlyData.list.map((item) => (
          <section key={item.dt}>
            {/* <div className="daily__item">
              <label className="day">{new Date(item.dt * 1000).toLocaleDateString("en", { weekday: "long" })}</label>
              <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="" />
              <label className="description">{item.weather[0].description}</label>
              <label className="min-max">
                {Math.round(item.main.temp_min)}
                <sup>&#8451;</sup> / {Math.round(item.main.temp_max)}
                <sup>&#8451;</sup>
              </label>
            </div> */}
          </section>
        ))}
      </div>
    </>
  );
};

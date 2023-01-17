import React, { useState, useEffect } from "react";
import { getWeather } from "../../store/reducers/weather-reducer";

import { useAppDispatch, useAppSelector } from "../../store/store";
import Alert from "../Alert/Alert";
import { Loader } from "../Loader/Loader";
import WeatherChart from "../WeatherChart/WeatherChart";
import { WeatherItem } from "./WeatherItem/WeatherItem";
import { WeatherMain } from "./WeatherMain/WeatherMain";

export const WeatherContainer: React.FC = (): React.ReactElement => {
  const [selected, setSelected] = useState(0);

  const days = useAppSelector((state) => state.weather.days);
  const weatherCity = useAppSelector((state) => state.weather.weather?.city);
  const currentWeather = useAppSelector((state) => state.weather.currentDayWeather);

  return (
    <section className="weather__container">
      <WeatherMain params={weatherCity!} currentWeather={currentWeather!} />
      <WeatherChart />
      <div className="weather__list_card">
        {days!.map((item, index) => (
          <WeatherItem
            key={index}
            day={index}
            weatherData={item}
            active={selected === index}
            onChangeSelected={setSelected}
          />
        ))}
      </div>
    </section>
  );
};

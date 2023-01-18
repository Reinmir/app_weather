import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../store";

import ChartWeather from "../ChartWeather/ChartWeather";
import ErrorLoad from "../ErrorLoad/ErrorLoad";
import Loader from "../Loader/Loader";

import "./style.scss";
import WeatherItem from "./WeatherItem/WeatherItem";
import WeatherMain from "./WeatherMain/WeatherMain";

const WeatherContainer: React.FC = (): React.ReactElement => {
  const [selected, setSelected] = useState(0);

  const isPending = useAppSelector((state) => state.weather.isPending);
  const days = useAppSelector((state) => state.weather.days);
  const weatherCity = useAppSelector((state) => state.weather.weather?.city);
  const currentWeather = useAppSelector((state) => state.weather.currentDayWeather);
  const error = useAppSelector((state) => state.weather.error);

  useEffect(() => {
    setSelected(0);
  }, [weatherCity]);

  if (isPending || !weatherCity) {
    return <Loader />;
  }

  if (!days || error) {
    return <ErrorLoad />;
  }

  return (
    <div className="weather-container">
      <WeatherMain params={weatherCity!} currentWeather={currentWeather!} />
      <ChartWeather />
      <div className="weather__list-card">
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
    </div>
  );
};

export default WeatherContainer;

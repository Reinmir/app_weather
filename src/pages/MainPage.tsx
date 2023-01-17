import React from "react";
import { useSelector } from "react-redux";

import { Loader } from "../components/Loader/Loader";
import { Weather } from "../components/Weather/Weather";
import { WeatherContainer } from "../components/WeatherContainer/WeatherContainer";
import { WeatherItem } from "../components/WeatherContainer/WeatherItem/WeatherItem";

import { RootState } from "../store";

export const MainPage: React.FC = (): React.ReactElement => {
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const dailyData = useSelector((state: RootState) => state.dailyWeather.dailyData);
  const hourlyData = useSelector((state: RootState) => state.hourlyWeather.hourlyData);

  const isData = weatherData && dailyData && hourlyData;

  const loading = useSelector((state: RootState) => state.weather.loading);
  const dailyLoading = useSelector((state: RootState) => state.dailyWeather.loading);
  const hourlyLoading = useSelector((state: RootState) => state.hourlyWeather.loading);

  const isLoading = [loading, dailyLoading, hourlyLoading].some(Boolean);

  return (
    <>
      {/* <WeatherContainer /> */}
      {isLoading ? <Loader /> : isData && <WeatherContainer />}
    </>
  );
};

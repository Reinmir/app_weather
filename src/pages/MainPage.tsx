import React from "react";
import { useSelector } from "react-redux";

import { Loader } from "../components/Loader/Loader";
import { Weather } from "../components/Weather/Weather";

import { RootState } from "../store";

export const MainPage: React.FC = (): React.ReactElement => {
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const dailyWeather = useSelector((state: RootState) => state.dailyWeather.dailyData);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const dailyLoading = useSelector((state: RootState) => state.dailyWeather.loading)

  return <>{loading || dailyLoading ? <Loader /> : weatherData && dailyWeather && <Weather data={weatherData} dailyData={dailyWeather} />}</>;
};

import { getDailyWeather } from "../../api/openweatherapi/getDailyWeather";

import { IWeatherDailyData, IWeatherError } from "../types";

export const getDailyWeatherForecast = async (city: string): Promise<IWeatherDailyData> => {
  const res = await getDailyWeather(city);

  if (!res.ok) {
    const resData: IWeatherError = await res.json();
    throw new Error(resData.message);
  }

  return res.json();
};

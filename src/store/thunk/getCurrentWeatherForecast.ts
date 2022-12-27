import { getCurrnetWeather } from "../../api/openweatherapi/getCurrentWeather";

import { IWeatherData, IWeatherError } from "../types";

export const getCurrentWeatherForecast = async (city: string): Promise<IWeatherData> => {
  const res = await getCurrnetWeather(city);

  if (!res.ok) {
    const resData: IWeatherError = await res.json();
    throw new Error(resData.message);
  }

  return res.json();
};

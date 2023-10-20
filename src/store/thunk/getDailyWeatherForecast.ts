import { getDailyWeather } from "../../api/openweatherapi/getDailyWeather";
import { IDailyWeatherError, IWeatherDailyData } from "../types/dailyWeather";

export const getDailyWeatherForecast = async (lat: number, lon: number): Promise<IWeatherDailyData> => {
  const res = await getDailyWeather(lat, lon);

  if (!res.ok) {
    const resData: IDailyWeatherError = await res.json();
    throw new Error(resData.message);
  }

  return res.json();
};

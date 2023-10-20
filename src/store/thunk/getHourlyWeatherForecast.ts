import { getHourlyWeather } from "../../api/openweatherapi/getHourlyWeather";
import { IHourlyWeatherError, IWeatherHourlyData } from "../types/hourlyWeather";

export const getHourlyWeatherForecast = async (lat: number, lon: number): Promise<IWeatherHourlyData> => {
  const res = await getHourlyWeather(lat, lon);
  if (!res.ok) {
    const resData: IHourlyWeatherError = await res.json();
    throw new Error(resData.message);
  }
  return res.json();
};

import { getDailyWeather } from "../../api/openweatherapi/getDailyWeather";
import { IDailyWeatherError, IWeatherDailyData } from "../types/dailyWeather";



export const getDailyWeatherForecast = async (city: string): Promise<IWeatherDailyData> => {
  const res = await getDailyWeather(city);

  if (!res.ok) {
    const resData: IDailyWeatherError = await res.json();
    throw new Error(resData.message);
  }

  return res.json();
};

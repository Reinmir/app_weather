import { getWeather } from "../../api/getWeatherApi";
import { IResponseCity, ResponseType } from "../../types/weather-type";

export const getWeatherForecast = async (name: string): Promise<ResponseType> => {
  const res = await getWeather(name);
  if (!res.ok) {
    const resData: IResponseCity = await res.json();
    throw new Error(resData.message);
  }
  return res.json();
};

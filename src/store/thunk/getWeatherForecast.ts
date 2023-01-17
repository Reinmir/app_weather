import { getWeather } from "../../api/openweatherapi/getWeather";
import { IResponseError, ResponseType } from "../types/weather";

export const getWeatherForecast = async (name: string): Promise<ResponseType> => {
    const res = await getWeather(name)  ;
    if (!res.ok) {
      const resData: IResponseError = await res.json();
      throw new Error(resData.message);
    }
    return res.json();
  };
  
import { GET_HOURLY_WEATHER_SUCCESS, IGetHourlyWeatherAction, IWeatherHourlyData } from "../../types/hourlyWeather";

export const getWeatherHourlySuccess = (payload: IWeatherHourlyData): IGetHourlyWeatherAction => ({
  type: GET_HOURLY_WEATHER_SUCCESS,
  payload,
});

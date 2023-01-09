import { GET_DAILY_WEATHER_SUCCESS, IGetDailyWeatherAction, IWeatherDailyData } from "../types/dailyWeather";

export const getWeatherDailySuccess = (payload: IWeatherDailyData): IGetDailyWeatherAction => ({
  type: GET_DAILY_WEATHER_SUCCESS,
  payload,
});

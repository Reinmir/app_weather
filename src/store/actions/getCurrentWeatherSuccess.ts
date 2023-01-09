import { GET_WEATHER_SUCCESS, IGetWeatherAction, IWeatherData } from "../types/currentWeather";

export const getWeatherSuccess = (payload: IWeatherData): IGetWeatherAction => ({
  type: GET_WEATHER_SUCCESS,
  payload,
});

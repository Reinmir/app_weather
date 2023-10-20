import { ISetHourlyErrorAction, SET_HOURLY_ERROR } from "../../types/hourlyWeather";

export const setWeatherHourlyFail = (payload: string): ISetHourlyErrorAction => ({
  type: SET_HOURLY_ERROR,
  payload,
});

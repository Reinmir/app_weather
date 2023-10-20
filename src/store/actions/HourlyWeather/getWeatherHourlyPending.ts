import { ISetHourlyLoadingAction, SET_HOURLY_LOADING } from "../../types/hourlyWeather";

export const getWeatherHourlyPending = (): ISetHourlyLoadingAction => ({
  type: SET_HOURLY_LOADING,
});

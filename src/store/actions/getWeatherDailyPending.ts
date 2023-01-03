import { ISetDailyLoadingAction, SET_DAILY_LOADING } from "../types/dailyWeather";

export const getWeatherDailyPending = (): ISetDailyLoadingAction => ({
    type: SET_DAILY_LOADING,
  });
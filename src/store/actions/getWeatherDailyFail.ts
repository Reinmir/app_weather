import { ISetDailyErrorAction, SET_DAILY_ERROR } from "../types/dailyWeather";

export const getWeatherDailyFail = (payload: string): ISetDailyErrorAction => ({
  type: SET_DAILY_ERROR,
  payload,
});

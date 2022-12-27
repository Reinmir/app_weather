import { ThunkAction } from "redux-thunk";

import { RootState } from "..";

import { getDailyWeatherForecast } from "../thunk/getDailyWeatherForecast";

import {
  getDailyWeatherSuccess,
  getWeatherDailyFail,
  getWeatherDailyPending,
} from "../reducers/dailyWeatherReducer";

import { DailyWeatherAction, SET_DAILY_CITY_NAME } from "../types/dailyWeather";

export const getDailyWeather = (
  city: string
): ThunkAction<void, RootState, null, DailyWeatherAction> => {
  return async (dispatch) => {
    try {
      dispatch(getWeatherDailyPending());
      const res = await getDailyWeatherForecast(city);
      dispatch(getDailyWeatherSuccess(res));
      dispatch({
        type: SET_DAILY_CITY_NAME,
        payload: res.name,
      });
      return { ok: true };
    } catch (err: any) {
      dispatch(getWeatherDailyFail(err.message));
      return { ok: false };
    }
  };
};

export const setLoading = () => {
  getWeatherDailyPending();
};
export const resetError = () => {
  getWeatherDailyFail("");
};

import { ThunkAction } from "redux-thunk";

import { RootState } from "..";

import { getWeatherDailySuccess, getWeatherDailyPending, getWeatherDailyFail } from "../reducers/dailyWeatherReducer";

import { SET_CITY_NAME, WeatherAction } from "../types";

import { getDailyWeatherForecast } from "../thunk/getDailyWeatherForecast";

export const getDailyWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      dispatch(getWeatherDailyPending());
      const res = await getDailyWeatherForecast(city);
      dispatch(getWeatherDailySuccess(res));
      dispatch({
        type: SET_CITY_NAME,
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

import { ThunkAction } from "redux-thunk";

import { RootState } from "..";

import { getWeatherFail, getWeatherPending } from "../reducers/weatherReducer";
import { getDailyWeatherSuccess } from "../reducers/dailyWeatherReducer";

import { SET_CITY_NAME, WeatherAction } from "../types";

import { getDailyWeatherForecast } from "../thunk/getDailyWeatherForecast";

export const getDailyWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      dispatch(getWeatherPending());
      const res = await getDailyWeatherForecast(city);
      dispatch(getDailyWeatherSuccess(res));
      dispatch({
        type: SET_CITY_NAME,
        payload: res.name,
      });
      return { ok: true };
    } catch (err: any) {
      dispatch(getWeatherFail(err.message));
      return { ok: false };
    }
  };
};

export const setLoading = () => {
  getWeatherPending();
};
export const resetError = () => {
  getWeatherFail("");
};

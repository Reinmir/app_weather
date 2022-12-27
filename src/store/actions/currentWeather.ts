import { ThunkAction } from "redux-thunk";

import { RootState } from "..";

import { getCurrentWeatherForecast } from "../thunk/getCurrentWeatherForecast";

import { getWeatherFail, getWeatherPending, getWeatherSuccess } from "../reducers/weatherReducer";

import { WeatherAction, SET_CITY_NAME } from "../types";


export const getCurrentWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      dispatch(getWeatherPending());
      const res = await getCurrentWeatherForecast(city);
      dispatch(getWeatherSuccess(res));
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

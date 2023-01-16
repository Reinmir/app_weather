import { ThunkAction } from "redux-thunk";

import { RootState } from "..";

import { getCurrentWeatherForecast } from "../thunk/getCurrentWeatherForecast";

import { WeatherAction, SET_CITY_NAME } from "../types/currentWeather";

import { setWeatherFail as setWeatherFail } from "./getCurrentWeatherFail";
import { getWeatherPending } from "./getCurrentWeatherPending";
import { getWeatherSuccess } from "./getCurrentWeatherSuccess";

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
      return { ok: true, lat: res.coord.lat, lon: res.coord.lon };
    } catch (err: any) {
      dispatch(setWeatherFail(err.message));
      return { ok: false };
    }
  };
};

export const setLoading = () => {
  getWeatherPending();
};
export const resetError = () => {
  setWeatherFail("");
};

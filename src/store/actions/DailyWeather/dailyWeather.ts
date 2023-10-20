import { ThunkAction } from "redux-thunk";

import { RootState } from "../..";

import { getDailyWeatherForecast } from "../../thunk/getDailyWeatherForecast";

import { DailyWeatherAction } from "../../types/dailyWeather";
import { setWeatherDailyFail } from "./getWeatherDailyFail";
import { getWeatherDailyPending } from "./getWeatherDailyPending";
import { getWeatherDailySuccess } from "./getWeatherDailySucces";

export const getDailyWeather = (lat: number, lon: number): ThunkAction<void, RootState, null, DailyWeatherAction> => {
  return async (dispatch) => {
    try {
      dispatch(getWeatherDailyPending());
      const res = await getDailyWeatherForecast(lat, lon);
      dispatch(getWeatherDailySuccess(res));
      return { ok: true };
    } catch (err: any) {
      dispatch(setWeatherDailyFail(err.message));
      return { ok: false };
    }
  };
};

export const setLoading = () => {
  getWeatherDailyPending();
};
export const resetError = () => {
  setWeatherDailyFail("");
};

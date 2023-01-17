import { ThunkAction } from "redux-thunk";

import { RootState } from "../..";
import { getHourlyWeatherForecast } from "../../thunk/getHourlyWeatherForecast";

import { HourlyWeatherAction } from "../../types/hourlyWeather";
import { setWeatherHourlyFail } from "./getWeatherHourlyFail";
import { getWeatherHourlyPending } from "./getWeatherHourlyPending";
import { getWeatherHourlySuccess } from "./getWeatherHourlySuccess";

export const getHourlyWeather = (lat: number, lon: number): ThunkAction<void, RootState, null, HourlyWeatherAction> => {
  return async (dispatch) => {
    try {
      dispatch(getWeatherHourlyPending());
      const res = await getHourlyWeatherForecast(lat, lon);
      dispatch(getWeatherHourlySuccess(res));
      return { ok: true };
    } catch (err: any) {
      dispatch(setWeatherHourlyFail(err.message));
      return { ok: false };
    }
  };
};

export const setLoading = () => {
  getWeatherHourlyPending();
};
export const resetError = () => {
  setWeatherHourlyFail("");
};

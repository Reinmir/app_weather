import { ISetLoadingAction, SET_LOADING } from "../types/currentWeather";

export const getWeatherPending = (): ISetLoadingAction => ({
  type: SET_LOADING,
});

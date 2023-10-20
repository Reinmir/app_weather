import { ISetErrorAction, SET_ERROR } from "../../types/currentWeather";

export const setWeatherFail = (payload: string): ISetErrorAction => ({
  type: SET_ERROR,
  payload,
});

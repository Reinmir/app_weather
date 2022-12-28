import { ISetErrorAction, SET_ERROR } from "../types/currentWeather";

export const getWeatherFail = (payload: string): ISetErrorAction => ({
    type: SET_ERROR,
    payload,
  });
  
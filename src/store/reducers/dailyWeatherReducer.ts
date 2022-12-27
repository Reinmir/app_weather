import {
  SET_ERROR,
  SET_LOADING,
} from "../types";

import { DailyWeatherAction, GET_DAILY_WEATHER_SUCCESS, IGetDailyWeatherAction, ISetDailyErrorAction, ISetDailyLoadingAction, IWeatherDailyData, IWeatherDailyState, SET_DAILY_ERROR, SET_DAILY_LOADING } from "../types/dailyWeather";

const initalState: IWeatherDailyState = {
  dailyData: null,
  loading: false,
  error: "",
  city: "",
};

export const dailyWeatherReducer = (state = initalState, action: DailyWeatherAction): IWeatherDailyState => {
  switch (action.type) {
    case GET_DAILY_WEATHER_SUCCESS:
      return {
        ...state,
        dailyData: action.payload,
        loading: false,
        error: "",
      };
    case SET_DAILY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_DAILY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getDailyWeatherSuccess = (payload: IWeatherDailyData): IGetDailyWeatherAction => ({
  type: GET_DAILY_WEATHER_SUCCESS,
  payload,
});

export const getWeatherDailyFail = (payload: string): ISetDailyErrorAction => ({
  type: SET_DAILY_ERROR,
  payload,
});

export const getWeatherDailyPending = (): ISetDailyLoadingAction => ({
  type: SET_DAILY_LOADING,
});

import {
  GET_DAILY_WEATHER_SUCCESS,
  IGetDailyWeatherAction,
  IWeatherDailyData,
  IWeatherDailyState,
  SET_ERROR,
  SET_LOADING,
  WeatherAction,
} from "../types";

const initalState: IWeatherDailyState = {
  dailyData: null,
  loading: false,
  error: "",
  city: "",
};

export const dailyWeatherReducer = (state = initalState, action: WeatherAction): IWeatherDailyState => {
  switch (action.type) {
    case GET_DAILY_WEATHER_SUCCESS:
      return {
        dailyData: action.payload,
        loading: false,
        error: "",
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
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

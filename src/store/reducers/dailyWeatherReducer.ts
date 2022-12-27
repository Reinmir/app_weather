import {
  GET_DAILY_WEATHER_SUCCESS,
  IGetDailyWeatherAction,
  ISetErrorAction,
  ISetLoadingAction,
  IWeatherDailyData,
  IWeatherDailyState,
  REMOVE_CITY_NAME,
  REMOVE_WEATHER,
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
    case REMOVE_CITY_NAME:
      return {
        ...state,
        city: "",
      };
    case REMOVE_WEATHER:
      return {
        ...state,
        dailyData: null,
      };
    default:
      return state;
  }
};

export const getWeatherDailySuccess = (payload: IWeatherDailyData): IGetDailyWeatherAction => ({
  type: GET_DAILY_WEATHER_SUCCESS,
  payload,
});

export const getWeatherDailyFail = (payload: string): ISetErrorAction => ({
  type: SET_ERROR,
  payload,
});

export const getWeatherDailyPending = (): ISetLoadingAction => ({
  type: SET_LOADING,
});

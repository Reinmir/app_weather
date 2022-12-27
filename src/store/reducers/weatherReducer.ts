import {
  GET_WEATHER_SUCCESS,
  SET_ERROR,
  SET_LOADING,
  WeatherAction,
  IWeatherState,
  SET_CITY_NAME,
  REMOVE_CITY_NAME,
  REMOVE_WEATHER,
  IWeatherData,
  ISetLoadingAction,
  ISetErrorAction,
  IGetWeatherAction,
  GET_DAILY_WEATHER_SUCCESS,
  IWeatherDailyData,
  IGetDailyWeatherAction,
} from "../types";

const initalState: IWeatherState = {
  data: null,
  loading: false,
  error: "",
  city: "",
};

export const weatherReducer = (state = initalState, action: WeatherAction): IWeatherState => {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return {
        data: action.payload,
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
    case SET_CITY_NAME:
      return {
        ...state,
        city: action.payload,
      };
    case REMOVE_CITY_NAME:
      return {
        ...state,
        city: "",
      };
    case REMOVE_WEATHER:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};

export const getWeatherSuccess = (payload: IWeatherData): IGetWeatherAction => ({
  type: GET_WEATHER_SUCCESS,
  payload,
});


export const getWeatherFail = (payload: string): ISetErrorAction => ({
  type: SET_ERROR,
  payload,
});

export const getWeatherPending = (): ISetLoadingAction => ({
  type: SET_LOADING,
});

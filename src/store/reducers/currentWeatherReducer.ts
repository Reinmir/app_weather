import {
  GET_WEATHER_SUCCESS,
  SET_ERROR,
  SET_LOADING,
  WeatherAction,
  IWeatherState,
  SET_CITY_NAME,
  REMOVE_CITY_NAME,
  REMOVE_WEATHER,
} from "../types/currentWeather";

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
        ...state,
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
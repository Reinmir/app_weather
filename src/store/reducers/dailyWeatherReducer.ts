import {
  DailyWeatherAction,
  GET_DAILY_WEATHER_SUCCESS,
  IWeatherDailyState,
  REMOVE_DAILY_CITY_NAME,
  REMOVE_DAILY_WEATHER,
  SET_DAILY_ERROR,
  SET_DAILY_LOADING,
} from "../types/dailyWeather";

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
    case REMOVE_DAILY_CITY_NAME:
      return {
        ...state,
        city: "",
      };
    case REMOVE_DAILY_WEATHER:
      return {
        ...state,
        dailyData: null,
      };
    default:
      return state;
  }
};

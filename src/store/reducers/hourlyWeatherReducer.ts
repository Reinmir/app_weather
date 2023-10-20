import {
  GET_HOURLY_WEATHER_SUCCESS,
  HourlyWeatherAction,
  IWeatherHourlyState,
  SET_HOURLY_ERROR,
  SET_HOURLY_LOADING,
} from "../types/hourlyWeather";

const initalState: IWeatherHourlyState = {
  hourlyData: null,
  loading: false,
  error: "",
};

export const hourlyWeatherReducer = (state = initalState, action: HourlyWeatherAction): IWeatherHourlyState => {
  switch (action.type) {
    case GET_HOURLY_WEATHER_SUCCESS:
      return {
        ...state,
        hourlyData: action.payload,
        loading: false,
        error: "",
      };
    case SET_HOURLY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_HOURLY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

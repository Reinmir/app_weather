export const GET_DAILY_WEATHER_SUCCESS = "GET_DAILY_WEATHER_SUCCESS";
export const SET_DAILY_ERROR = "SET_DAILY_ERROR";
export const SET_DAILY_LOADING = "SET_DAILY_LOADING";
export const SET_DAILY_CITY_NAME = "SET_DAILY_CITY_NAME";
export const REMOVE_DAILY_CITY_NAME = "REMOVE_DAILY_CITY_NAME";
export const REMOVE_DAILY_WEATHER = "REMOVE_DAILY_WEATHER";

export interface IDailyWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface IWeatherDailyData {
  daily: [
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
      };
      humidity: number;
      moon_phase: number;
      moonrise: number;
      moonset: number;
      pop: number;
      pressure: number;
      sunrise: number;
      sunset: number;
      temp: {
        day: number;
        night: number;
        eve: number;
        morn: number;
        max: number;
        min: number;
      };
      uvi: number;
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
      lat: number;
      lon: number;
      timezone: string;
      timezone_offset: number;
      weather: IDailyWeather[];
    }
  ];
}

export interface IWeatherDailyState {
  dailyData: IWeatherDailyData | null;
  loading: boolean;
  error: string;
  city?: string;
}

export interface IGetDailyWeatherAction {
  type: typeof GET_DAILY_WEATHER_SUCCESS;
  payload: IWeatherDailyData;
}

export interface ISetDailyLoadingAction {
  type: typeof SET_DAILY_LOADING;
}

export interface ISetDailyErrorAction {
  type: typeof SET_DAILY_ERROR;
  payload: string;
}
export interface IDailyCityAction {
  type: typeof SET_DAILY_CITY_NAME;
  payload: string;
}

export interface IDailyRemoveCityAction {
  type: typeof REMOVE_DAILY_CITY_NAME;
}

export interface IRemoveDailyWeather {
  type: typeof REMOVE_DAILY_WEATHER;
}

export interface IDailyWeatherError {
  cod: string;
  message: string;
}

export type DailyWeatherAction =
  | ISetDailyErrorAction
  | ISetDailyLoadingAction
  | IGetDailyWeatherAction
  | IDailyCityAction
  | IDailyRemoveCityAction
  | IRemoveDailyWeather;

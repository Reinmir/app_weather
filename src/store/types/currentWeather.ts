export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const SET_ALERT = "SET_ALERT";
export const SET_CITY_NAME = "SET_CITY_NAME";
export const REMOVE_CITY_NAME = "REMOVE_CITY_NAME";
export const REMOVE_WEATHER = "REMOVE_WEATHER";

export interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface IWeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  dew_point: number;
  timezone: number;
  visibility: number;
  weather: IWeather[];
}

export interface IWeatherError {
  cod: string;
  message: string;
}

export interface IWeatherState {
  data: IWeatherData | null;
  loading: boolean;
  error: string;
  city?: string;
}

export interface ICityAction {
  type: typeof SET_CITY_NAME;
  payload: string;
}

export interface IRemoveCityAction {
  type: typeof REMOVE_CITY_NAME;
}

export interface IRemoveWeather {
  type: typeof REMOVE_WEATHER;
}
export interface IGetWeatherAction {
  type: typeof GET_WEATHER_SUCCESS;
  payload: IWeatherData;
}

export interface ISetLoadingAction {
  type: typeof SET_LOADING;
}

export interface ISetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type WeatherAction =
  | IGetWeatherAction
  | ISetLoadingAction
  | ISetErrorAction
  | ICityAction
  | IRemoveWeather
  | IRemoveCityAction;

export interface IAlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

export interface IAlertState {
  message: string;
}

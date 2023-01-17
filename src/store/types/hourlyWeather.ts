export const GET_HOURLY_WEATHER_SUCCESS = "GET_HOURLY_WEATHER_SUCCESS";
export const SET_HOURLY_ERROR = "SET_HOURLY_ERROR";
export const SET_HOURLY_LOADING = "SET_HOURLY_LOADING";
export const SET_HOURLY_CITY_NAME = "SET_HOURLY_CITY_NAME";

export interface IHourlyWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface IWeatherHourlyData {
  list: [
    {
      dt: number;
      dt_txt: string;
      main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
      };
      weather: IHourlyWeather[];
    }
  ];
}

export interface IWeatherHourlyState {
  hourlyData: IWeatherHourlyData | null;
  loading: boolean;
  error: string;
  city?: string;
}

export interface IGetHourlyWeatherAction {
  type: typeof GET_HOURLY_WEATHER_SUCCESS;
  payload: IWeatherHourlyData;
}

export interface ISetHourlyLoadingAction {
  type: typeof SET_HOURLY_LOADING;
}

export interface ISetHourlyErrorAction {
  type: typeof SET_HOURLY_ERROR;
  payload: string;
}
export interface IDailyCityAction {
  type: typeof SET_HOURLY_CITY_NAME;
  payload: string;
}

export interface IHourlyWeatherError {
  cod: string;
  message: string;
}

export type HourlyWeatherAction = ISetHourlyErrorAction | ISetHourlyLoadingAction | IGetHourlyWeatherAction;

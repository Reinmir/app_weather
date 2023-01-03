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
  city: {
    name: string;
  };
  name: string;
  base: string;
  cod: number;
  id: number;
  wind: {
    speed: number;
    deg: number;
  };


  list: [
    {
      dt: number;
      dt_txt: string;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
      };
      weather: IDailyWeather[];
      clouds: {
        all: number;
      };
      sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
      };
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

export interface IResponseCity {
  country: string;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface IResponseError {
  cod: string;
  message: string;
}

interface IWeather {
  description: string;
  main: string;
  icon: string;
}
interface IWeatherMain {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export interface IResponseListItem {
  clouds: {
    all: number;
  };
  dt: number;
  dt_txt: string;
  pop: number;
  visibility: number;
  weatherMain: IWeather[];
  main: IWeatherMain;
  wind: {
    speed: number;
  };
}
export type ResponseType = {
  city: IResponseCity;
  list: IResponseListItem[];
};

import { baseUrl } from "../config/config";

export const getHourlyWeather = (lat: number, lon: number) =>
  fetch(
    `${baseUrl}forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric&include=hourly,daily,current`
  );

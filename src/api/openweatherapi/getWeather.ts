import { baseUrl } from "../config/config";

export const getWeather = (name: string) =>
  fetch(`${baseUrl}forecast?appid=${process.env.REACT_APP_API_KEY}&units=metric&q=${name}`);

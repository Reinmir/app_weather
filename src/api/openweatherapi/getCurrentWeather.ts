import { baseUrl } from "../config/config";

export const getCurrnetWeather = (city: string) =>
  fetch(`${baseUrl}weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);

import { baseUrl } from "../config/config";

export const getDailyWeather = (city: string) =>
  fetch(`${baseUrl}/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&exclude=daily&units=metric`);

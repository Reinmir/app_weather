import { baseUrl } from "./config";

export const getCurrnetWeather = (city: string) => fetch(`${baseUrl}?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)



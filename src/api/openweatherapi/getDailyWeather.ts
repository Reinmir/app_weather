import { baseUrl } from "../config/config";

// export const getDailyWeather = (city: string) =>
//   fetch(`${baseUrl}/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);

export const getDailyWeather = (lat: number, lon: number) =>
  fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,current&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  );

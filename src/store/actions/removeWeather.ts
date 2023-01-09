import { IRemoveWeather, REMOVE_WEATHER } from "../types/currentWeather";

export const removeWeather = (): IRemoveWeather => {
  return {
    type: REMOVE_WEATHER,
  };
};

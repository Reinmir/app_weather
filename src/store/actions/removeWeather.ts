import { IRemoveWeather, REMOVE_WEATHER } from "../types";

export const removeWeather = (): IRemoveWeather => {
  return {
    type: REMOVE_WEATHER,
  };
};

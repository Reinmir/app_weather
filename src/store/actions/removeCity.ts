import { IRemoveCityAction, REMOVE_CITY_NAME } from "../types/currentWeather";

export const removeCity = (): IRemoveCityAction => {
  return {
    type: REMOVE_CITY_NAME,
  };
};

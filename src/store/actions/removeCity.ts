import { IRemoveCityAction, REMOVE_CITY_NAME } from "../types";

export const removeCity = (): IRemoveCityAction => {
  return {
    type: REMOVE_CITY_NAME,
  };
};

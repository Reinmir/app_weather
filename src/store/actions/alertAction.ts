import { SET_ALERT, IAlertAction } from "../types";

export const setAlert = (message: string): IAlertAction => {
  return {
    type: SET_ALERT,
    payload: message,
  };
};

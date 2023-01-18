import { ActionsTypes, ThunkType } from "..";
import { actions } from "../reducers/weather-reducer";
import { getWeatherForecast } from "../thunk/getWeatherForecast";

export const getWeather =
  (city: string): ThunkType<ActionsTypes<typeof actions>> =>
  async (dispatch) => {
    try {
      dispatch(actions.setPending(true));
      dispatch(actions.setError(false));
      const weather = await getWeatherForecast(city);
      dispatch(actions.setWeather(weather));
      dispatch(actions.changeDay(0));
    } catch (e) {
      dispatch(actions.setError(true));
    } finally {
      dispatch(actions.setPending(false));
    }
  };

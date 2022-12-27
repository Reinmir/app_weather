import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

import alertReducer from "./reducers/alertReducer";
import { dailyWeatherReducer } from "./reducers/dailyWeatherReducer";
import { weatherReducer } from "./reducers/weatherReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  dailyWeather: dailyWeatherReducer,
  alert: alertReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;

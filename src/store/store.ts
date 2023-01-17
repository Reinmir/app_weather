import { Action } from "redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

import weatherReducer from "./reducers/weather-reducer";

let rootReducer = combineReducers({
  weather: weatherReducer,
});

type AppRootReducer = typeof rootReducer;

export type RootStateType = ReturnType<AppRootReducer>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<InferValueTypes<T>>;

export type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootStateType, unknown, A>;

type AppAction = ReturnType<typeof store.dispatch>;
export type AppDispatch = ThunkDispatch<RootStateType, any, AppAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

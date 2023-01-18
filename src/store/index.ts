import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import weatherReducer from "./reducers/weather-reducer";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

let rootReducer = combineReducers({
  weather: weatherReducer,
});

type AppRootReducer = typeof rootReducer;

export type RootStateType = ReturnType<AppRootReducer>;

//Для работоспособности расширения redux devtools
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

//Типизирование Action
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<InferValueTypes<T>>;

//Типизирование Thnuk
export type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootStateType, unknown, A>;

type AppAction = ReturnType<typeof store.dispatch>;
export type AppDispatch = ThunkDispatch<RootStateType, any, AppAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

//Типизация useSelector
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

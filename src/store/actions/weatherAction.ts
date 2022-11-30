import { ThunkAction } from 'redux-thunk'


import { RootState } from '..'
import { getCurrnetWeather } from '../../api/openweatherapi/getCurrentWeather'
import { GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherData, WeatherError, WeatherState, } from '../types'


export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            const res = await getCurrnetWeather(city);

            if (!res.ok) {
                const resData: WeatherError = await res.json();
                throw new Error(resData.message);
            }

            const resData: WeatherData = await res.json();
            dispatch({
                type: GET_WEATHER,
                payload: resData
            });
        } catch (err: any) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            });
        }
    }
}


export const setLoading = (): WeatherAction => {
    return {
        type: SET_LOADING,
    }
}

export const setError = (): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}
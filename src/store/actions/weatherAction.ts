import { ThunkAction } from 'redux-thunk'


import { RootState } from '..'
import { getCurrnetWeather } from '../../api/openweatherapi/getCurrentWeather'
import { GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, IWeatherData, IWeatherError, IWeatherState, SET_CITY_NAME, } from '../types'


export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            const res = await getCurrnetWeather(city);

            if (!res.ok) {
                const resData: IWeatherError = await res.json();
                throw new Error(resData.message);
            }

            const resData: IWeatherData = await res.json();
            dispatch({
                type: GET_WEATHER,
                payload: resData
            });

            dispatch({
                type: SET_CITY_NAME,
                payload: resData.name
            })
            console.log(resData.name)
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

export const resetError = (): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}
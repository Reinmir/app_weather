import { GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, IWeatherState, SET_CITY_NAME } from "../types"


const initalState: IWeatherState = {
    data: null,
    loading: false,
    error: '',
    city: ''
}


export const weatherReducer = (state = initalState, action: WeatherAction): IWeatherState => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                data: action.payload,
                loading: false,
                error: ''
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case SET_CITY_NAME:
            return {
                ...state,
                city: action.payload
            }
        default:
            return state;
    }
}
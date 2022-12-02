import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { setAlert } from '../../store/actions/alertAction';

import { getWeather, setLoading } from '../../store/actions/weatherAction';
import { WeatherAction } from '../../store/types';



interface IMainPageProps {
  title?: string;
}

const MainPage: React.FC<IMainPageProps> = ({ title }): React.ReactElement => {
  const dispatch = useDispatch<any>();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(city.trim() === ''){
      dispatch(setAlert('City name is requiered!'))
      return
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity('');
  }

  return (
    <section>
      <h1 >{title}</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={changeHandler}
        />
        <button>Search</button>
      </form>
    </section>
  );
}

export default MainPage;
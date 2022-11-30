import React, { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setAlert } from '../../store/actions/alertAction';
import { getWeather, setLoading } from '../../store/actions/weatherAction';



interface MainPageProps {
  title?: string;
}

const MainPage: React.FC<MainPageProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === '') {
      return dispatch(setAlert('City is required!'));
    }

    dispatch(setLoading());
    dispatch<any>(getWeather(city));
    setCity('');
  }

  return (
    <div>
      <div >
        <div >
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
        </div>
      </div>
    </div>
  );
}

export default MainPage;
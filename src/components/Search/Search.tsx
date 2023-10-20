import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import { RootState } from "../../store";
import { setAlert } from "../../store/actions/alertAction";
import { getCurrentWeather } from "../../store/actions/CurrentWeather/currentWeather";
import { getDailyWeather } from "../../store/actions/DailyWeather/dailyWeather";
import { getHourlyWeather } from "../../store/actions/HourlyWeather/hourlyWeather";

import { Loader } from "../Loader/Loader";

import "./style.scss";
import { getWeatherForecast } from "../../store/thunk/getWeatherForecast";
import { useAppDispatch } from "../../store/store";
import { getWeather } from "../../store/reducers/weather-reducer";

interface ISearchProps {
  title: string;
}

export const Search: React.FC<ISearchProps> = ({ title }): React.ReactElement => {
  const [city, setCity] = useState<string>("");

  const dispatch: any = useAppDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state: RootState) => state.weather.loading);
  const dailyLoading = useSelector((state: RootState) => state.dailyWeather.loading);
  const hourlyLoading = useSelector((state: RootState) => state.hourlyWeather.loading);

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const onSearchCity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === "") {
      dispatch(setAlert("City name is requiered!"));
      return;
    }

    const res = dispatch(getWeather(city));
    if (res.ok) {
      setCity("");
      navigate("/weather-forecast");
    } else {
      setCity("");
    }
  };

  // const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (city.trim() === "") {
  //     dispatch(setAlert("City name is requiered!"));
  //     return;
  //   }

  //   const currentWeatherRes = await dispatch(getCurrentWeather(city));
  //   const getWeather = await dispatch(getWeatherForecast(city));
  //   const dailyWeatherRes = await dispatch(getDailyWeather(currentWeatherRes.lat, currentWeatherRes.lon));
  //   const hourlyWeatherRes = await dispatch(getHourlyWeather(currentWeatherRes.lat, currentWeatherRes.lon));
  //   if (getWeather.ok) {
  //     setCity("");
  //     navigate("/weather-forecast");
  //   } else {
  //     setCity("");
  //   }
  // };

  return (
    <>
      <section className="search__container">
        <div className="form__container">
          <h1 className="search__title">{title}</h1>
          <form className="search__form" onSubmit={onSearchCity}>
            <input
              type="search"
              className="search__input"
              value={city}
              placeholder="Enter city name"
              onChange={changeHandler}
            />
            <button type="submit" className="search__button">
              <FaSearch />
            </button>
          </form>
        </div>
      </section>
      {/* {loading && <Loader />}
      {dailyLoading && <Loader />}
      {hourlyLoading && <Loader />} */}
    </>
  );
};

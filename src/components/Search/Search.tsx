import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import { RootState } from "../../store";
import { setAlert } from "../../store/actions/alertAction";
import { getCurrentWeather } from "../../store/actions/currentWeather";

import { getDailyWeather } from "../../store/actions/dailyWeather";

import { Loader } from "../Loader/Loader";

import "./style.scss";

interface ISearchProps {
  title: string;
}

export const Search: React.FC<ISearchProps> = ({ title }): React.ReactElement => {
  const [city, setCity] = useState<string>("");

  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state: RootState) => state.weather.loading);

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      dispatch(setAlert("City name is requiered!"));
      return;
    }

    const res = await dispatch(getCurrentWeather(city));
    const res1 = await dispatch(getDailyWeather(city));
    if (res.ok && res1.ok) {
      setCity("");
      navigate("/weather-forecast");
    } else {
      setCity("");
    }
  };

  return (
    <>
      <section className="search__container">
        <h1 className="search__title">{title}</h1>
        <form className="search__form" onSubmit={submitHandler}>
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
      </section>

      {loading && <Loader />}
    </>
  );
};

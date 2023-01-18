import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { getWeather } from "../../store/actions/getWeatherAction";

import "./style.scss";
const Search = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const onHandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSearchCity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getWeather(value));
    navigate("/weather-forecast");
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={onSearchCity}>
        <input type="search" placeholder="Enter city name" value={value} onChange={onHandlerChange} />
        <button>
          <CgSearch /> Search
        </button>
      </form>
    </div>
  );
};

export default Search;

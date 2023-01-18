import React, { FC } from "react";
import { useAppDispatch } from "../../../store";
import { actions } from "../../../store/reducers/weather-reducer";

import ChoiceIcon from "../../../utils/ChoiceIcon";
import { convertedLocalDate } from "../../../utils/convertedLocalDate";
import { ResultDaysType } from "../../../utils/formattedDate";
import { weatherAverage } from "../../../utils/weatherAverage";

import "./style.scss";

interface IPropsType {
  onChangeSelected: (val: number) => void;
  active: boolean;
  day: number;
  weatherData: ResultDaysType;
}

const WeatherItem: FC<IPropsType> = ({ onChangeSelected, active, day, weatherData }): React.ReactElement => {
  const data = convertedLocalDate(weatherData.weather[0].dt_txt);
  const description = weatherData.weather[0].weather[0].description;
  const temp = weatherAverage(weatherData.weather).toFixed(0);
  const dispatch = useAppDispatch();
  const onHandlerDays = (day: number) => {
    onChangeSelected(day);
    dispatch(actions.changeDay(day));
  };

  return (
    <div className={active ? "weather-card weather-card-active" : "weather-card"} onClick={() => onHandlerDays(day)}>
      <div className="weather-card__day">{data}</div>
      <div className="weather-card__icon">
        <ChoiceIcon value={description} />
      </div>
      <div className="weather-card__temp">
        {temp} <span>°C</span>
      </div>
      <div>{description}</div>
    </div>
  );
};

export default WeatherItem;

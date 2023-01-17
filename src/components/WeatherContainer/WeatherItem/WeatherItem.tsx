import React from "react";
import { actions } from "../../../store/reducers/weather-reducer";
import { useAppDispatch } from "../../../store/store";
import ChoiceIcon from "../../../store/utils/ChoiceIcon";
import { convertedLocalDate } from "../../../store/utils/convertedToLocalDate";
import { ResultDaysType } from "../../../store/utils/formattedData";
import { weatherAverage } from "../../../store/utils/weatherAverage";

interface WeatherItemProps {
  onChangeSelected: (val: number) => void;
  active: boolean;
  day: number;
  weatherData: ResultDaysType;
}

export const WeatherItem: React.FC<WeatherItemProps> = ({
  active,
  day,
  onChangeSelected,
  weatherData,
}): React.ReactElement => {
  const data = convertedLocalDate(weatherData.weather[0].dt_txt);
  const description = weatherData.weather[0].weatherMain[0].description;
  const temp = weatherAverage(weatherData.weather).toFixed(0);
  const dispatch = useAppDispatch();

  const onHandleDays = (day: number) => {
    onChangeSelected(day);
    dispatch(actions.changeDay(day));
  };

  return (
    <div className={active ? "weather__card_active" : "weather__card"} onClick={() => onHandleDays(day)}>
      <div className="weather__card_day">{data}</div>
      <div className="weather__card_icon">
        <ChoiceIcon value={description} />
      </div>
      <div className="weather__card_temp">
        {temp} <sup>&#8451;</sup>
      </div>
      <div>{description}</div>
    </div>
  );
};

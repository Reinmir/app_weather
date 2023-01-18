import React, { FC } from "react";
import {
  BsFillCloudSleetFill,
  BsCloudSunFill,
  BsFillCloudsFill,
  BsFillCloudRainFill,
  BsCloudRain,
} from "react-icons/bs";
import { FaCloudRain } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { AiFillApi } from "react-icons/ai";
import { WiNightSnowWind, WiDaySunny } from "react-icons/wi";

interface IPropsType {
  value: string;
}
const ChoiceIcon: FC<IPropsType> = ({ value }) => {
  switch (value) {
    case "cloudly":
      return <BsCloudRain />;
    case "clear sky":
      return <WiDaySunny />;
    case "rain":
      return <FaCloudRain />;
    case "light rain":
      return <BsFillCloudRainFill />;
    case "broken clouds":
      return <BsCloudSunFill />;
    case "few clouds":
      return <BsCloudSunFill />;
    case "sunny":
      return <FiSun />;
    case "overcast clouds":
      return <BsFillCloudsFill />;
    case "scattered clouds":
      return <BsCloudSunFill />;
    case "snow":
      return <BsFillCloudSleetFill />;
    case "light snow":
      return <WiNightSnowWind />;
    case "moderate rain":
      return <BsFillCloudRainFill />;
    default:
      return <AiFillApi />;
  }
};

export default ChoiceIcon;

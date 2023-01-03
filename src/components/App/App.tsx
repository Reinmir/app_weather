import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store";
import { setAlert } from "../../store/actions/alertAction";
import { getWeatherFail } from "../../store/actions/getCurrentWeatherFail";

import Alert from "../Alert/Alert";
import { Search } from "../Search/Search";

import "./App.scss";

const App: React.FC = (): React.ReactElement => {
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(true);

  return (
    <>
      
      <Search title="Enter city name and press search button" />
      {alertMsg && (
        <Alert
          active={modalActive}
          setActive={setModalActive}
          message={alertMsg}
          onClose={() => dispatch(setAlert(""))}
        />
      )}
      {error && (
        <Alert
          active={modalActive}
          setActive={setModalActive}
          message={error}
          onClose={() => dispatch(getWeatherFail(""))}
        />
      )}
    </>
  );
};

export default App;

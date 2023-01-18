import React from "react";

import Search from "../Search/Search";

import "./style.scss";

export const App: React.FC = (): React.ReactElement => {
  return (
    <div className="App">
      <div className="AppGlass">
        <div className="container">
          <h1 className="title">Enter city name and press search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./style.scss";
const Loader: React.FC = (): React.ReactElement => {
  return (
    <div className="wrapper">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;

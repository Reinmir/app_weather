import React from "react";

import "./style.scss";

interface ILayout extends React.PropsWithChildren {}

export const Layout: React.FC<ILayout> = ({ children }): React.ReactElement => {
  return (
    <>
      <div className="wave" />
      <div className="wave" />
      <div className="wave" />
      {children}
    </>
  );
};

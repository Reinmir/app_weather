import React from "react";

import "./style.scss";

interface WeatherRowProps {
  label?: string;
  value?: React.ReactNode;
}

export const WeatherRow: React.FC<WeatherRowProps> = ({ label, value }): React.ReactElement => {
  return (
    <div className="weather__parameter-row">
      <span className="weather__parameter-label">{label}</span>
      {value && <span className="weather__parameter-value">{value}</span>}
    </div>
  );
};

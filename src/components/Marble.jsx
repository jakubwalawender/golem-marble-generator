import React, { useEffect, useState } from "react";
import { colorMapping } from "../colorMapping";

export const Marble = ({ color, position }) => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTop(`${80 - 10 * position}%`);
    }, position);
  }, [position]);

  return (
    <img
      src={colorMapping[color]}
      alt={`marble-${color}`}
      className="marble"
      style={{ top }}
    />
  );
};

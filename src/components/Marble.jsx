import React from "react";
import { colorMapping } from "../colorMapping";

export const Marble = ({ color }) => (
  <img src={colorMapping[color]} alt={`marble-${color}`} className="marble" />
);

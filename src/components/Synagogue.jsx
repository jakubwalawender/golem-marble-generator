import React, { useState, useEffect } from "react";

import { Marble } from "./Marble";
import { playerCounts } from "../playerCountOptions";
import { roll } from "./helpers";

export const Synagogue = () => {
  const [synagogue, setSynagogue] = useState([]);
  const [currentValue, setCurrentValue] = useState("4");

  useEffect(() => {
    setSynagogue(roll(currentValue));
  }, [currentValue]);

  return (
    <div>
      <div className="synagogue">
        {synagogue.map((column, id) => {
          return (
            <div key={id} className="track">
              {column.map(({ color, id }) => {
                return <Marble key={id} color={color}></Marble>;
              })}
            </div>
          );
        })}
      </div>
      <div className="menu">
        <button
          onClick={() => setSynagogue(roll(currentValue))}
          className="roll-button"
        >
          Roll
        </button>
        <select
          className="players-select"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        >
          {Object.entries(playerCounts).map(([playersCount, { display }]) => {
            return <option value={playersCount}>{display}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

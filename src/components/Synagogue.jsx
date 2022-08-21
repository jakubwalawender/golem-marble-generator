import React, { useState, useEffect } from "react";

import { Marble } from "./Marble";
import { playerCounts } from "../playerCountOptions";
import { clear, roll } from "./helpers";

export const Synagogue = () => {
  const [synagogue, setSynagogue] = useState([]);
  const [currentValue, setCurrentValue] = useState("4");

  const handleRoll = () => {
    setSynagogue(clear(currentValue));
    setTimeout(() => {
      setSynagogue(roll(currentValue));
    }, 50);
  };

  useEffect(() => {
    setSynagogue(roll(currentValue));
  }, [currentValue]);

  return (
    <div>
      <div className="synagogue">
        {synagogue.map((column, id) => {
          return (
            <div key={id} className="track">
              {column.map(({ color, id }, position) => {
                return (
                  <Marble key={id} color={color} position={position}></Marble>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="menu">
        <button onClick={handleRoll} className="roll-button">
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

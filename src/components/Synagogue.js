import React, { useState, useEffect, useCallback } from "react";

import { Marble } from "./Marble";
import { playerCounts } from "../playerCountOptions";
import { roll } from "./helpers";

export const Synagogue = () => {
  const [synagogue, setSynagogue] = useState([]);
  const [currentValue, setCurrentValue] = useState("4");

  const handleRoll = useCallback(() => {
    let options = playerCounts.filter(function (x) {
      return x.count === Number(currentValue);
    })[0];
    setSynagogue(roll(options));
  }, [currentValue]);

  useEffect(() => {
    handleRoll();
  }, [handleRoll, currentValue]);

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
      <button onClick={handleRoll}>
        Roll
      </button>
      <select
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      >
        {playerCounts.map((config) => {
          return <option players={config.count}>{config.count}</option>;
        })}
      </select>
    </div>
  );
};

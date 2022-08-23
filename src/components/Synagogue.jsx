import React, { useReducer } from "react";

import { Marble } from "./Marble";
import { playerCounts } from "../playerCountOptions";
import { ACTION, roll, rollReducer } from "./helpers";

export const Synagogue = () => {
  const [{ tracks, key, playersCount }, dispach] = useReducer(rollReducer, {
    tracks: roll(4),
    key: 0,
    playersCount: 4,
  });

  return (
    <div>
      <div className="menu">
        <button
          onClick={() => dispach({ action: ACTION.ROLL })}
          className="roll-button"
        >
          Roll
        </button>
        <select
          className="players-select"
          value={playersCount}
          onChange={(e) => {
            const newValue = e.target.value;
            dispach({
              action: ACTION.CHANGE_PLAYERS,
              playersCount: newValue,
            });
          }}
        >
          {Object.entries(playerCounts).map(([playersCount, { display }]) => {
            return <option value={playersCount}>{display}</option>;
          })}
        </select>
      </div>
      <div className="synagogue">
        {tracks.map((column, id) => {
          return (
            <div key={`${id}-${key}`} className="track">
              {column.map(({ color, id }, position) => {
                return (
                  <Marble key={id} color={color} position={position}></Marble>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

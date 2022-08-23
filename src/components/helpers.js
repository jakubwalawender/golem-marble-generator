import { playerCounts } from "../playerCountOptions";

export const ACTION = {
  CHANGE_PLAYERS: "changePlayers",
  ROLL: "roll",
};

export const roll = (playersCount) => {
  const options = playerCounts[playersCount];
  const synagogue = Array.from(
    new Array(Number(options.pathsCount)).fill().map(() => [])
  );
  const availablePaths = [...synagogue];

  options.colorConfig.forEach((m) => {
    const path = Math.floor(Math.random() * availablePaths.length);
    availablePaths[path].push(m);
    if (availablePaths[path].length === 5) {
      availablePaths.splice(path, 1);
    }
  });

  return synagogue;
};

export const rollReducer = (current, { action, playersCount }) => {
  switch (action) {
    case ACTION.ROLL:
      return {
        ...current,
        key: current.key + 1,
        tracks: roll(current.playersCount),
      };
    case ACTION.CHANGE_PLAYERS:
      return {
        key: current.key + 1,
        playersCount,
        tracks: roll(playersCount),
      };
    default:
  }
};

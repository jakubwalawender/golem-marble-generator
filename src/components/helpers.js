import { playerCounts } from "../playerCountOptions";

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

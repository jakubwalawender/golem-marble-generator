const fourPlayerMarbles = [].concat(
  Array(3).fill("red"),
  Array(3).fill("blue"),
  Array(3).fill("yellow"),
  Array(4).fill("white"),
  Array(1).fill("black")
);

const threePlayerMarbles = [].concat(
  Array(2).fill("red"),
  Array(2).fill("blue"),
  Array(2).fill("yellow"),
  Array(5).fill("white"),
  Array(1).fill("black")
);

const twoPlayerMarbles = [].concat(
  Array(2).fill("red"),
  Array(2).fill("blue"),
  Array(2).fill("yellow"),
  Array(3).fill("white"),
  Array(1).fill("black")
);

const onePlayerMarbles = [].concat(
  Array(2).fill("red"),
  Array(2).fill("blue"),
  Array(2).fill("yellow"),
  Array(3).fill("white"),
  Array(1).fill("black")
);
export const playerCounts = [
  {
    colorConfig: fourPlayerMarbles.map((color, id) => ({ color, id })),
    pathsCount: 5,
    display: "Four players",
    count: 4,
  },
  {
    colorConfig: threePlayerMarbles.map((color, id) => ({ color, id })),
    pathsCount: 5,
    display: "Three players",
    count: 3,
  },
  {
    colorConfig: twoPlayerMarbles.map((color, id) => ({ color, id })),
    pathsCount: 5,
    display: "Two players",
    count: 2,
  },
  {
    colorConfig: onePlayerMarbles.map((color, id) => ({ color, id })),
    pathsCount: 5,
    display: "One player",
    count: 1,
  },
];

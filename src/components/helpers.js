const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export const roll = (options) => {
  let syn = new Array(options.pathsCount);
  for (let i = 0; i < options.pathsCount; i++) {
    syn[i] = [];
  }
  let marblesList = shuffle(options.colorConfig);
  marblesList.forEach((element) => {
    let path;
    do {
      path = Math.floor(Math.random() * options.pathsCount + 1);
    } while (syn[path - 1].length >= 5);
    syn[path - 1].push(element);
  });

  return syn;
};

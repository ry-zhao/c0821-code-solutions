const makeCounter = () => {
  let privateCounter = 0;
  const changeBy = value => {
    privateCounter += value;
  };
  return {
    increment: () => changeBy(1),
    decrement: () => changeBy(-1),
    value: () => privateCounter
  };
};

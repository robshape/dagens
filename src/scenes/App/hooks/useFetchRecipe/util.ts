export const randomNumber = (max: number): number => {
  const number = Math.random() * max;
  return Math.floor(number);
};

export const randomNumberWithIncrement = (max: number, increment: number): number => {
  const seed = Math.floor((max - increment) / increment);
  const number = Math.random() * seed;
  return Math.floor(number) * increment;
};

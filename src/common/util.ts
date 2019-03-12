export const randomNumber = (max: number): number => {
  const number = Math.random() * max;
  return Math.floor(number);
};

export const randomNumberWithIncrement = (max: number, increment: number): number => {
  const seed = Math.floor((max - increment) / increment);
  const number = Math.random() * seed;
  return Math.floor(number) * increment;
};

export const today = (): string => {
  const date = new Date();

  const day = new Intl
    .DateTimeFormat('sv-SE', {
      weekday: 'long',
    })
    .format(date);

  return day
    .charAt(0)
    .toUpperCase()
    + day
      .slice(1);
};

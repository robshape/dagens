export const today = (): string => {
  const date = new Date();

  const day = new Intl.DateTimeFormat('sv-SE', {
    weekday: 'long',
  }).format(date);

  return day.charAt(0).toUpperCase() + day.slice(1);
};

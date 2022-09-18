export const convertHourStringToMinutes = (hourString: string) => {
  // "18:00" -> ["18", "00"] -> [18, 00]

  const [hours, minutes] = hourString.split(':').map(Number);
  const minutesAmount = (hours * 60) + minutes;

  return minutesAmount;
};

export const convertMinutesToHourString = (minutesAmount: number) => {
  // 1800 -> "18:00"

  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;

  const hour = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  
  return hour;
};

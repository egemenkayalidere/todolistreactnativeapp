export const humanFriendlyDate = (date?: any) => {
  const now = date ? date : new Date();

  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  return `${day < 10 ? 0 : ''}${day} ${monthName(month)} ${year}`;
};

export const monthName = (monthNumber: string | number) => {
  switch (monthNumber) {
    case 1:
      return 'Jan';
    case 2:
      return 'Feb';
    case 3:
      return 'Mar';
    case 4:
      return 'Apr';
    case 5:
      return 'May';
    case 6:
      return 'Jun';
    case 7:
      return 'Jul';
    case 8:
      return 'Aug';
    case 9:
      return 'Sep';
    case 10:
      return 'Oct';
    case 11:
      return 'Nov';
    case 12:
      return 'Dec';
    default:
      return 'Unknown';
  }
};

export const getTRDate = (_date?: Date) => {
  const date = _date ? _date : new Date();
  date.setHours(3);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
};

export const dateDayNumber = () => {
  const now = new Date();
  return now.getDate();
};

export const dateDayName = () => {
  const now = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[now.getDate()];
};

export const specificDayNumber = (date: Date) => {
  return date.getDate();
};

export const specificMonthName = (date: Date) => {
  return monthName(date.getMonth() + 1);
};

export const specificDayName = (date: Date) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[date.getDay()];
};

export const getAllDatesOfYear = (year: number) => {
  const date = new Date();
  const startDate = new Date(year, date.getMonth(), date.getDate());
  const endDate = new Date(year + 1, 0, 1);
  const dates = [];

  while (startDate < endDate) {
    dates.push(new Date(startDate.setHours(3)));
    startDate.setDate(startDate.getDate() + 1);
  }

  return dates;
};

export const dayOfYear = () => {
  const date = new Date();
  const start = new Date(date.getFullYear(), 0, 1);
  const diff =
    date -
    start +
    (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay) + 1;
};

export const isToday = (date: Date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

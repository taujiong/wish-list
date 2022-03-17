/**
 * calculate required string according to current date
 */
export function calculateDate(date: Date, base: Date = new Date()) {
  const now = base;

  if (isToday(date, now)) {
    return `今天 ${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }

  if (isYesterday(date, now)) {
    return `昨天 ${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }

  if (isThisYear(date, now)) {
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  }

  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

export function isToday(targetDate: Date, now: Date = new Date()) {
  return (
    targetDate.getFullYear() === now.getFullYear() &&
    targetDate.getMonth() === now.getMonth() &&
    targetDate.getDate() === now.getDate()
  );
}

// a better method: https://stackoverflow.com/questions/4944750/how-to-subtract-date-time-in-javascript
export function isYesterday(targetDate: Date, now: Date = new Date()) {
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  return isToday(targetDate, yesterday);
}

export function isThisYear(targetDate: Date, now: Date = new Date()) {
  return targetDate.getFullYear() === now.getFullYear();
}

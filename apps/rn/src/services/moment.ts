/**
 * calculate an iso format date string according to current date
 * @param isoDate the iso format date string
 */
export function calculateDate(isoDate: string) {
  const date = new Date(isoDate); // TODO: error handler
  const now = new Date();

  if (isToday(date, now)) {
    return `今天 ${date.getHours()}:${date.getMinutes()}`;
  }

  if (isYesterday(date, now)) {
    return `昨天 ${date.getHours()}:${date.getMinutes()}`;
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

export function isYesterday(targetDate: Date, now: Date = new Date()) {
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  return isToday(targetDate, yesterday);
}

export function isThisYear(targetDate: Date, now: Date = new Date()) {
  return targetDate.getFullYear() === now.getFullYear();
}

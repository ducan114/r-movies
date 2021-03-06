// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  return formatter.format(money);
};

export const standardizedAlt = alt => alt.replace(/ /g, '-');

export const isPersistedState = stateName => {
  const sessionState = sessionStorage.getItem(stateName);
  return JSON.parse(sessionState);
};

export const isEmptyObject = obj =>
  obj &&
  Object.keys(obj).length === 0 &&
  Object.getPrototypeOf(obj) === Object.prototype;

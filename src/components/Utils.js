// utils.js
export const getInitialDataFromLocalStorage = () => {
  const userDataKeys = Object.keys(localStorage).filter((key) =>
    key.startsWith("userData_")
  );
  const userData = userDataKeys.map((key) => {
    const userString = localStorage.getItem(key);
    return JSON.parse(userString);
  });
  return userData;
};

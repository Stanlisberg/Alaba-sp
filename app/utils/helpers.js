export const SaveToLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const GetFromLocalStorage = (key) => {
  const storageString = localStorage.getItem(key);
  if (storageString) {
    return JSON.parse(storageString);
  }
  return null;
};

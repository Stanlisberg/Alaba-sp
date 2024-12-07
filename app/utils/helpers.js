export const SaveToLocalStorage = (key, item) => {
  if (typeof window !== "undefined") {
    const localStorageData = localStorage.setItem(key, JSON.stringify(item));

    if (localStorageData) {
      return localStorageData;
    }
  }
};

export const GetFromLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    const storageString = localStorage.getItem(key);
    if (storageString) {
      return JSON.parse(storageString);
    }
    return null;
  }
};

export const capitalizeWords = (text: string): string => {
return text.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const isSearchEmpty = (searchValue: string): boolean => {
  return searchValue.trim() === "";
};

export const getSearchButtonStyles = (searchValue: string): string => {
  return isSearchEmpty(searchValue)
    ? "cursor-not-allowed opacity-50 border-gray-300 bg-gray-200 text-gray-500"
    : "hover:cursor-pointer hover:border-primary hover:text-primary text-brand border-primary bg-primary hover:bg-transparent";
};

export const getClearButtonVisibility = (searchValue: string): string => {
  return isSearchEmpty(searchValue) ? "hidden" : "block";
};
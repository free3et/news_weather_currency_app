import { createContext, useContext } from "react";

const defaultNewsContext = {
  category: "",
  country: "",
  search: "",
};

export const NewsContext = createContext(defaultNewsContext);
export const useNewsContext = () => {
  return useContext(NewsContext);
};

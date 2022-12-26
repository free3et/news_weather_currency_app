import { useState } from "react";
import { NewsList } from "./NewsComponent/NewsList";
import { NewsNavigation } from "./NewsComponent/NewsNavigation";
import { NewsContext } from "../context/NewsContext";
import { SelectCountry } from "./NewsComponent/SelectCountry";
import { SearchNews } from "./SearchNews";
import { TopNews } from "./NewsComponent/TopNews";
import { NewsListSearch } from "./NewsComponent/NewsListSearch";

export const GeneralLayout = () => {
  const [category, setCategory] = useState("business");
  const [country, setCountry] = useState("ua");
  const [search, setSearchNews] = useState("");

  function getCategory(item) {
    setCategory(item);
    setSearchNews("");
  }

  function getCountry(item) {
    setCountry(item);
    setSearchNews("");
  }

  function getSearchNews(item) {
    setSearchNews(item);
  }

  return (
    <div className="App">
      <NewsContext.Provider value={{ category, country, search }}>
        <SearchNews getSearchNews={getSearchNews} />
        <SelectCountry getCountry={getCountry} />
        <NewsNavigation getCategory={getCategory} />
        <TopNews />
        <NewsList />
        <NewsListSearch />
      </NewsContext.Provider>
    </div>
  );
};

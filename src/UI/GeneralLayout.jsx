import { useState, useEffect } from "react";
import { NewsList } from "./NewsComponent/NewsList";
import { NewsNavigation } from "./NewsComponent/NewsNavigation";
import { NewsContext } from "../context/NewsContext";
import { SelectCountry } from "./NewsComponent/SelectCountry";
import { SearchNews } from "./SearchNews";
import { TopNews } from "./NewsComponent/TopNews";
import { NewsListSearch } from "./NewsComponent/NewsListSearch";
import { useSearchParams } from "react-router-dom";

export const GeneralLayout = () => {
  const [category, setCategory] = useState("business");
  const [country, setCountry] = useState("ua");
  const [search, setSearchNews] = useState("");

  /*   useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log(currentParams); // get new values onchange
  }, [searchParams]);
 */
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

  const [searchParams, setSearchParams] = useSearchParams();

  const setQueryParams = (query) => {
    searchParams.set("country", country);
    searchParams.set("category", category);
    searchParams.set("search", search);
    setSearchParams(searchParams);
  };

  const getQueryParams = (query) => {
    searchParams.get("country");
    searchParams.get("category");
    searchParams.get("search");

    setSearchParams(searchParams);
  };

  useEffect(() => setQueryParams(country, category, search), [country, category, search]);
  useEffect(() => getQueryParams(country, category, search), [country, category, search]);

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

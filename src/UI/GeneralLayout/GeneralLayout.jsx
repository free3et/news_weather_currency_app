import { useState, useEffect } from "react";
import { NewsList } from "../NewsComponent/NewsList";
import { NewsNavigation } from "../NewsComponent/NewsNavigation";
import { NewsContext } from "../../context/NewsContext";
import { SelectCountry } from "../NewsComponent/SelectCountry";
import { SearchNews } from "../SearchNews";
import { TopNews } from "../NewsComponent/TopNews";
import { NewsListSearch } from "../NewsComponent/NewsListSearch";
import { useSearchParams } from "react-router-dom";
import { Currency } from "../CurrencyComponent/CurrencyComponent";
import WeatherPage from "../WeatherComponent/WeatherComponent";

export const GeneralLayout = () => {
  const [category, setCategory] = useState("technology");
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
    <div className="container">

      <NewsContext.Provider value={{ category, country, search }}>
        <SearchNews getSearchNews={getSearchNews} />
        <SelectCountry getCountry={getCountry} />
        <NewsNavigation getCategory={getCategory} />
      </NewsContext.Provider>
      <div className="row">
        <NewsContext.Provider value={{ category, country, search }}>
          <div className="col-lg-7">
            <TopNews />
          </div>
        </NewsContext.Provider>
          <div className="col-lg-4">
            <WeatherPage />
          </div>
      </div>
      <div className="row">
        <div className="col-lg-7">
        <NewsContext.Provider value={{ category, country, search }}>
            <NewsList />
            <NewsListSearch />
        </NewsContext.Provider>
        </div>
        <div className="col-lg-3"><Currency/></div>
      </div>

    </div>
  );
};

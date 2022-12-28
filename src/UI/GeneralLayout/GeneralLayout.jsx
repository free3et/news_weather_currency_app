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
import stylesLayout from "./Layout.module.scss";

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
        <NewsNavigation getCategory={getCategory} />
        <div className={`${stylesLayout.news_top_navigation} col-lg-12`}>
          <SelectCountry getCountry={getCountry} />
          <SearchNews getSearchNews={getSearchNews} />
        </div>
        <div className={stylesLayout.content_wrapper}>
          <div className={`${stylesLayout.news_wrapper} col-sm-12 col-lg-9`}>
            <TopNews />
            <NewsList />
            <NewsListSearch />
          </div>

          <div className={`${stylesLayout.weather_currency_wrapper} col-lg-3`}>
            <WeatherPage />
            <Currency />
          </div>
        </div>
      </NewsContext.Provider>
    </div>
  );
};

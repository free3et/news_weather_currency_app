import { NewsList } from "../NewsComponent/NewsList";
import { NewsNavigation } from "../NewsComponent/NewsNavigation";
import { NewsContext } from "../../context/NewsContext";
import { SelectCountry } from "../NewsComponent/SelectCountry";
import { SearchNews } from "../SearchNews";
import { TopNews } from "../NewsComponent/TopNews";
import { NewsListSearch } from "../NewsComponent/NewsListSearch";
import { Currency } from "../CurrencyComponent/CurrencyComponent";
import { WeatherPage } from "../WeatherComponent/WeatherComponent";
import { useSearchParam } from "../../context/hooks/useSearchParam";
import stylesLayout from "./Layout.module.scss";

export const GeneralLayout = () => {
  const [country, category, search, getCategory, getCountry, getSearchNews] = useSearchParam();
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
        <div className="col-lg-3">
          <Currency />
        </div>
      </div>
      <div className="row">
        <NewsNavigation getCategory={getCategory} />
      </div>
      <div className="row">
        <div className={`${stylesLayout.news_top_navigation} col-lg-12`}>
          <SelectCountry getCountry={getCountry} />
          <SearchNews getSearchNews={getSearchNews} />
        </div>
      </div>
      <div className="row">
        <div className={stylesLayout.content_wrapper}>
          <div className={`${stylesLayout.news_wrapper} col-sm-12 col-lg-9`}>
            {search === "" && (
              <>
                <h2>Top news</h2>
                <TopNews />
              </>
            )}

            {search === "" && (
              <>
                <h2>{category}</h2>
                <NewsList />
              </>
            )}
            {search !== "" && (
              <>
                <h2>Результити пошуку</h2>
                <NewsListSearch />
              </>
            )}
          </div>

          <div className={`${stylesLayout.weather_currency_wrapper} col-lg-3`}>
            <WeatherPage />
            <Currency />
          </div>
        </div>
      </div>
      <NewsContext.Provider />
    </div>
  );
};

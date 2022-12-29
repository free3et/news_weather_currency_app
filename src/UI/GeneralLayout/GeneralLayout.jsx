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
                  <h2>Search results "{search}"</h2>
                  <NewsListSearch />
                </>
              )}
            </div>

            <div
              className={`${stylesLayout.weather_currency_wrapper} col-md-12 col-sm-12 col-lg-3 col-12`}
            >
              <WeatherPage />
              <Currency />
            </div>
          </div>
        </div>
      </NewsContext.Provider>
    </div>
  );
};

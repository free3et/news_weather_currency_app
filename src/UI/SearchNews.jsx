import { useState } from "react";
import styles from "./NewsComponent/News.module.scss";

export const SearchNews = ({ getSearchNews }) => {
  const [value, setValue] = useState("");
  return (
    <div className={`${styles.search_field} col-sm-12 col-md-5 col-lg-6`}>
      <input
        type="text"
        id="search-input"
        name="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => {
          getSearchNews(e.target.value);
          setValue("");
        }}
      />
      <label htmlFor="search-input">Пошук по сайту</label>
    </div>
  );
};

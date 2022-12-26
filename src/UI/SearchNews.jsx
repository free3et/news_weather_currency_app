import { useState } from "react";

export const SearchNews = ({ getSearchNews }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <div className="search_field">
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
        <label htmlFor="search-input">Enter search word</label>
      </div>
    </div>
  );
};

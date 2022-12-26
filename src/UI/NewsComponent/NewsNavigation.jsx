import { NewsComponent } from "./NewsComponent";
import styles from "./News.module.scss";
import { useState } from "react";

const category = {
  business: "business",
  entertainment: "entertainment",
  general: "general",
  health: "health",
  science: "science",
  sports: "sports",
  technology: "technology",
};

export const NewsNavigation = ({ getCategory }) => {
  return (
    <div>
      {Object.values(category).map((item, index) => (
        <button key={index} onClick={() => getCategory(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

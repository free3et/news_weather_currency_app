import { NewsComponent } from "./NewsComponent";
import styles from "./News.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [target, setTarget] = useState("");

  return (
    <div onClick={(e) => setTarget(e.target)} className={`${styles.news_navigation} col-lg-12`}>
      {Object.values(category).map((item, index) => (
        <Link
          key={index}
          onClick={() => getCategory(item)}
          className={target.innerText === item ? "active" : ""}
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

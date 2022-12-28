import { NewsComponent } from "./NewsComponent";
import styles from "./News.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const category = {
  business: "Бізнес",
  entertainment: "Розваги",
  general: "Загальні",
  health: "Здоров'я",
  science: "Наука",
  sports: "Спорт",
  technology: "Технології",
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

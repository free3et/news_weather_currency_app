import styles from "./News.module.scss";

const countries = {
  ua: "Україна",
  us: "США",
  au: "Австралія",
  at: "Австрія",
  be: "Бельгія",
  br: "Бразилія",
  fr: "Франція",
  ca: "Канада",
  de: "Німеччина",
  gr: "Греція",
  jp: "Японія",
  nl: "Нідерланди",
  no: "Норвегія",
  pt: "Польща",
  ch: "Швейцарія",
  tr: "Турція",
  gb: "Великобританія",
};

export const SelectCountry = ({ getCountry }) => {
  return (
    <div className={`${styles.select_country} col-sm-12 col-md-6`}>
      <label>Вибрати країну</label>
      <select name="country" id="country" onChange={(e) => getCountry(e.target.value)}>
        {Object.entries(countries).map((key, value) => (
          <option value={key[0]} key={key[0]}>
            {key[1]}
          </option>
        ))}
      </select>
    </div>
  );
};

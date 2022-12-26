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
    <div>
      <label>Choose your country</label>
      <select name="country" id="country" onChange={(e) => getCountry(e.target.value)}>
        {Object.keys(countries).map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

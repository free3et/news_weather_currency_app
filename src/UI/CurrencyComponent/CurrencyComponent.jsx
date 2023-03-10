import { RowCurrency } from "./Row";
import { useCurrency } from "../../context/hooks/useCurrency";
import style from "./Currency.module.scss";
export const Currency = () => {
  const [currency, isLoading, errorMessage] = useCurrency();
  return (

    <div className={style.currency}>
      <h3 className={style.title}>Курс НБУ</h3>
      <div className={style.main_unit}>
        {errorMessage.error ? (
          <p className={style.error}>{errorMessage.message}</p>
        ) : isLoading ? (
          <span className={style.loader}></span>
        ) : currency !== undefined ? (
          currency.map((element, i) => <RowCurrency element={element} key={i} />)
        ) : null}
      </div>
    </div>

  );
};

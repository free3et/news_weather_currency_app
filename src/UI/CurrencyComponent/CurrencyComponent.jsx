import style from './Currency.module.scss'
import { RowCurrency } from "./Row"
import { useCurrency } from "../../context/hooks/useCurrency"

export const Currency = () => {
    const [currency, errorMessage, isLoading] = useCurrency()

    return (
        <div className={`${style.currency} col-lg-3`}>
            <h3 className={style.title}>Курс НБУ</h3>
            {errorMessage.error ?
                (<p className={style.error}>{errorMessage.message}</p>
                ) : isLoading ? <span className={style.loader}></span> : currency !== undefined ? currency.map((element, i) =>
                    <RowCurrency element={element} key={i} />
                ) : null}
        </div>

    )
}
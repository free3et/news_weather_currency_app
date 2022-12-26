import { useState } from "react"
import style from './Currency.module.scss'
export const RowCurrency = ({ element }) => {
    const [value, setValue] = useState(1)

    return (
        <div className={style.row}>
            <p className={style.row_p}>{element.cc}</p>
            <input className={style.row_p} type="number" value={value} onChange={(e) => setValue(e.target.value)} />
            <input className={style.input} value={Math.floor((element.rate * value) * 100) / 100} readOnly></input>
        </div>
    )
}
import { useEffect, useState } from "react";
import { useGetCurrencyQuery } from "../../GetData/currencySlice";
const getCurrency = (data) => {
  let result = data.filter(
    (e) =>
      e.cc == "USD" ||
      e.cc == "EUR" ||
      e.cc == "PLN" ||
      e.cc == "GBP" ||
      e.cc == "CHF" ||
      e.cc == "CAD"
  );
  return result.sort((a, b) => b.r030 - a.r030);
};
export const useCurrency = () => {
  const [currency, setCurency] = useState();
  const { data, error, isLoading, isError } = useGetCurrencyQuery();
  const [errorMessage, setError] = useState({ error: false, message: "" });
  useEffect(() => {
    if (!isLoading && !isError) {
      setCurency(getCurrency(data));
    }
    if (isError) {
      setError({ error: isError, message: error.error });
    }
  }, [isLoading, isError]);
  return [currency, isLoading, errorMessage];
};

import { createBrowserRouter } from "react-router-dom";
import { GeneralLayout } from "../UI/GeneralLayout/GeneralLayout";
import { Layout } from "./Layout";
import { NewsListSearch } from "../UI/NewsComponent/NewsListSearch";
import { ErrorComponent } from "../Error/ErrorComponent";

const ROUTES = {
  mainPage: "/news-weather-currency/",
  searchPage: "search",
};

export const router = createBrowserRouter([
  {
    path: ROUTES.mainPage,
    element: <Layout />,
    errorElement: <ErrorComponent />,

    children: [
      {
        index: true,
        element: <GeneralLayout />,
      },
      {
        path: ROUTES.searchPage,
        element: <NewsListSearch />,
      },
    ],
  },
]);

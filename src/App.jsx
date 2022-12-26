import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./grid.css";
import { GeneralLayout } from "./UI/GeneralLayout";
import { Loader } from "./UI/Loader/Loader";
import { router } from "./Router/router";

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<Loader />}>
      <GeneralLayout />
    </RouterProvider>
  );
}

export default App;

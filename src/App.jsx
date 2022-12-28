import { RouterProvider } from "react-router-dom";
import { GeneralLayout } from "./UI/GeneralLayout/GeneralLayout";
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

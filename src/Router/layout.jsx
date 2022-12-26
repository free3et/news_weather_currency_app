import { Outlet } from "react-router-dom";
import { Footer } from "../UI/Footer/Footer";
import { Header } from "../UI/Header/Header";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

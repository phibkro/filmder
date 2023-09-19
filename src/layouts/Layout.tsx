import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MovieAppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

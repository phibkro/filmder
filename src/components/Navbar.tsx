import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../layouts/Header";
import Example from "./example";
import Root from "../pages/root";
import ErrorPage from "../pages/error-page";

export default function Navbar() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Root />} />
            </Route>
        </Routes>
      </BrowserRouter>
    );
  }
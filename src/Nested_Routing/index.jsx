import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./home";
import { ProductDetails } from "./details";
import { Info } from "./info";

export const StartPage = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header>
          <h2>FakeStore</h2>
        </header>
        <section className="mt-3">
          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="details/:catname/" element={<ProductDetails />}>
              <Route path="info/:prodId" element={<Info />} />
            </Route>
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
};

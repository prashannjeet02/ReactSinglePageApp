import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "../Home/home";
import { CategoryPage } from "../Category/category";

export const ShoppingIndex = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className="d-flex justify-content-between bg-dark text-white m-2 p-2">
          <div>
            <h2>ShopperStop</h2>
          </div>
          <div className="fs-5">
            <span className="me-3">
              <Link to="home" className="btn text-white text-decoration-none">
                Home
              </Link>
            </span>
            <span className="me-3">
              <Link
                to="category/electronics"
                className="btn text-white text-decoration-none"
              >
                Electronics
              </Link>
            </span>
            <span className="me-3">
              <Link
                to="category/jewelery"
                className="btn text-white text-decoration-none"
              >
                Jewellery
              </Link>
            </span>
            <span className="me-3">
              <Link
                to="category/men's clothing"
                className="btn text-white text-decoration-none"
              >
                Men's fashion
              </Link>
            </span>
            <span className="me-3">
              <Link
                to="category/women's clothing"
                className="btn text-white text-decoration-none"
              >
                Women's Fashion
              </Link>
            </span>
          </div>
          <div className="fs-5">
            <span className="bi bi-search me-3"></span>
            <span className="bi bi-person me-3"></span>
            <span className="bi bi-heart me-3"></span>
            <span className="bi bi-cart4 me-3"></span>
          </div>
        </header>
        <section className="mt-4 overflow-auto" style={{ height: 500 }}>
          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="category/:catname" element={<CategoryPage />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
};

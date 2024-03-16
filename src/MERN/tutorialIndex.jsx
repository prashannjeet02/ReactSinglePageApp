import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Home } from "./home";
import { Register } from "./register";
import { Login } from "./login";
import { Videos } from "./video";
export const IndexPage = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className="bg-dark text-white text-center p-2">
          <h2>React Video Tutorial</h2>
        </header>
        <section className="mt-3 row">
          <nav className="col-3 ml-3">
            <div className="mb-2">
              <Link to="home" className="text-decoration-none">
                Home
              </Link>
            </div>
            <div className="mb-2">
              <Link to="register" className="text-decoration-none">
                Register
              </Link>
            </div>
            <div className="mb-2">
              <Link to="login" className="text-decoration-none">
                Login
              </Link>
            </div>
            <div className="mb-2">
              <Link to="videos" className="text-decoration-none ">
                Videos
              </Link>
            </div>
          </nav>
          <main className="col-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/videos" element={<Videos />} />
            </Routes>
          </main>
        </section>
      </BrowserRouter>
    </div>
  );
};

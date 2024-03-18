import { useState, useEffect } from "react";
import axios from "axios";
import {
  Link,
  Routes,
  useParams,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Info } from "./info";

export const ProductDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/category/${params.catname}`,
    }).then((res) => {
      setDetails(res.data);
    });
  });
  return (
    <div className="container-fluid">
      <div>
        <h2>Product Details</h2>
      </div>
      <section className="row mt-2">
        <div className="col-4">
          {details.map((detail) => (
            <p>
              <Link to={`info/${detail.id}`}>{detail.title}</Link>
            </p>
          ))}
        </div>
        <div className="col-8">
          <Routes>
            <Route path="info/:prodId" element={<Info />} />
          </Routes>
        </div>
      </section>
      <div>
        <Link to="/home">Back to Category</Link>
      </div>
    </div>
  );
};

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const CategoryPage = () => {
  const params = useParams();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/category/${params.catname}`,
    }).then((res) => {
      setCategories(res.data);
    });
  }, [params.catname]);
  return (
    <div className="container-fluid">
      <h3>Category Page {params.catname}</h3>
      <div className="d-flex flex-wrap">
        {categories.map((category) => (
          <div className="card m-2 p-2">
            <img
              src={category.image}
              style={{ height: 300, width: 300 }}
              className="card-img-top"
            />
            <div className="card-header">
              <p style={{ width: 200, height: 100 }}>{category.title}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary w-100">Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products/categories",
    }).then((response) => {
      setCategories(response.data);
    });
  }, []);
  return (
    <div className="container-fluid">
      <h2>Categories Home</h2>
      <ol>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/details/${category}`}>{category}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const DetailsPage = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${params.id}`,
    }).then((res) => {
      setDetails(res.data);
    });
  });
  return (
    <div className="container-fluid">
      <h2>Details Page</h2>
      <dl>
        <dt>ID</dt>
        <dd>{details.id}</dd>
        <dt>Title</dt>
        <dd>{details.title}</dd>
        <dt>Price</dt>
        <dd>{details.price}</dd>
        <dt>Category</dt>
        <dd>{details.category}</dd>
      </dl>
      <div>
        <Link to={`/category/${details.category}`}>
          Back to {details.category}
        </Link>
      </div>
    </div>
  );
};

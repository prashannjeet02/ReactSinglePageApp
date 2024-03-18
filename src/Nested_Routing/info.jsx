import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Info = () => {
  const params = useParams();
  const [information, setInformation] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${params.prodId}`,
    }).then((res) => {
      setInformation(res.data);
    });
  }, [params.prodId]);
  return (
    <div className="container-fluid">
      <h2>Info</h2>
      <dl>
        <dt>Title</dt>
        <dd>{information.title}</dd>
        <dt>Price</dt>
        <dd>{information.price}</dd>
      </dl>
    </div>
  );
};

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

export default function VendorProducts() {
  const { vendorId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get(`/products/vendor/${vendorId}`).then(res => {
      setProducts(res.data);
    });
  }, [vendorId]);

  return (
    <div>
      <h1>Products</h1>
      {products.map(p => (
        <div key={p._id}>
          <img src={p.image} width={100} />
          <h2>{p.name}</h2>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}

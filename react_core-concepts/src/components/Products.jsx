import { useState, useEffect } from "react";
import "../App.css";

function Products() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const api = "https://fakestoreapi.com/products";
    try {
      const responce = await fetch(api);
      const finalResponce = await responce.json();
      setData(finalResponce);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="products">
        <h1 className="products-title">React Practice</h1>

        <div className="product-grid">
          {data.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.title} />

              <h3>{item.title}</h3>
              <h4>
                <b>${item.price}</b>
              </h4>
              <h5>
                <b>Rating {item.rating.rate}</b>
              </h5>

              <button onClick={() => alert(`You bought: ${item.title}`)}>
                Buy Now!
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;

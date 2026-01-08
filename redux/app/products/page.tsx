"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Link from "next/link";

export default function Users() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const api = "https://dummyjson.com/products";
      const response = await fetch(api);
      const finalData = await response.json();
      console.log(finalData.products);
      setData(finalData.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (data.length === 0) {
    return "loading...";
  }
  const handleBuyNow = () => {
    alert("your order Placed");
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Product Catalog
        </h1>
        <div className="flex items-center justify-between">
          <h5 className="font-bold text-gray-800 text-2xl">
          Add to Cart : {count}
        </h5>
        </div>
        
        <div>
          
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item: any) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-5 flex flex-col"
            >
              <div className="h-48 flex items-center justify-center mb-4">
                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Category: {item.category || "General"}
                </p>

                <p className="text-xl font-bold text-indigo-600 mt-3">
                  ₹{item.price}
                </p>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  className="cursor-pointer w-1/2 bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-all"
                  onClick={() => {
                    dispatch(addToCart(item));
                    setCount(count + 1);
                  }}
                >
                  Add to Cart
                </button>
                <Link
                  href="/addToCart"
                  className="w-1/2 border border-indigo-600 text-indigo-600 py-2 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-all text-center"
                >
                  Go to Cart
                </Link>
                <button
                  className="w-1/2 border border-indigo-600 text-indigo-600 py-2 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-all"
                  onClick={() => handleBuyNow(item)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

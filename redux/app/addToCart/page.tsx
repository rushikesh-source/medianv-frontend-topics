"use client";

import { removeFromCart } from "../redux/cartSlice";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function AddToCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // const cartItems = useSelector((state: RootState) => state.cart.items);

  console.log(cartItems);
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">my cart page</h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cartItems.length === 0 && <p className="font-bold text-gray-800">cart is empty</p>}
        {cartItems.map((item) => (
          <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-5 flex flex-col" key={item.id}>
            <img src={item.images?.[0]} alt={item.title} />
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{item.title}</h3>
            <p className="text-lg font-semibold text-gray-800 line-clamp-2">₹ {item.price}</p>

            <button
              className=" cursor-pointer w-1/2 bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-all"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import Spinner from "../components/ui/Spinner"
const TodosApi = () => {
  const [data, setData] = useState([]);

  const fetchTodos = async () => {
    try {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const finalRes = await responce.json();
      setData(finalRes);
      console.log(finalRes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  if(data.length===0){
   return <Spinner/>
  }
  return (
    <>
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-md p-4 mb-3 hover:shadow-sm transition"
          >
            <h1 className="text-sm font-semibold text-blue-100">
              User ID: {item.id}
            </h1>

            <h1 className="text-base font-medium text-amber-100">
              Name: {item.name}
            </h1>

            <h1 className="text-sm text-amber-100">Username: {item.username}</h1>

            <h3 className="text-sm text-amber-100">Email: {item.email}</h3>

            <h3 className="text-sm text-amber-100">Phone: {item.phone}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodosApi;

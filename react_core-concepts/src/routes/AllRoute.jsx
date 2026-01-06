import { Routes, Route } from "react-router-dom";
import Home from "../navbar/Home";
import Products from "../components/Products";
import Todo from "../components/Todo";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
};

export default AllRoute;

import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">MyStore</div>

      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/todo" className="nav-link">Todo</Link>
      </div>
    </nav>
  );
};

export default Navbar;

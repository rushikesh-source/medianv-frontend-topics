import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ 
      display: "flex", 
      gap: "20px", 
      padding: "15px", 
      background: "black",
      color: "white"
    }}>
      <Link href="/" style={{ color: "white" }}>Home</Link>
      <Link href="/contact" style={{ color: "white" }}>Contact</Link>
      <Link href="/about" style={{ color: "white" }}>About</Link>
      <Link href="/products" style={{ color: "white" }}>Products</Link>
    </nav>
  );
}

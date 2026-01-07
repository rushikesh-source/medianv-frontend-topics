import styles from "./products.module.css";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>

      <div className={styles.grid}>
        {data.map((item: any) => (
          <div key={item.id} className={styles.card}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.image}
            />
            <p className={styles.productTitle}>{item.title}</p>
            <p className={styles.meta}>price: $ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

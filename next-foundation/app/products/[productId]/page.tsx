export default function ProductById({ params }: { params: { productId: string } }) {
  console.log("ROUTE PARAMS =>", params);

  return (
    <>
      <h1>Product Details Page</h1>
      <h2>Product ID: {params.productId}</h2>
    </>
  );
}

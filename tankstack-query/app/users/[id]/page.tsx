
export default async function UserById({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <h1>User Details</h1>
      <p>User ID: {id}</p>
    </>
  );
}

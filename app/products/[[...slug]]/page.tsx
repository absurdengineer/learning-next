// File: app/products/[[...slug]]/page.tsx
// Example route: /products/groceries/dairy/milk
interface Props {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ sortOrder?: string }>;
}

const ProductPage = async ({ params, searchParams }: Props) => {
  const { slug } = await params;
  const { sortOrder } = await searchParams;

  return (
    <div>
      <h1>Product Page</h1>
      <p>Slug: {slug ? slug.join(" / ") : "No slug provided"}</p>
      <p>Sort Order: {sortOrder}</p>
    </div>
  );
};

export default ProductPage;

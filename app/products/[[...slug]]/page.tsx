import React from "react";

/// app/products/%5B...slug%5D/page.tsx
/// for a route defined as /products/groceries/dairy/milk
interface Props {
  params: { slug: string[] };
  searchParams: {
    sortOrder: string;
  };
}

const ProductPage = async ({ params, searchParams }: Props) => {
  const { slug } = await params;
  const { sortOrder } = await searchParams;
  return (
    <div>
      ProductPage: {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;

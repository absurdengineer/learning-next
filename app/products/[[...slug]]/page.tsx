import React from "react";

/// app/products/%5B...slug%5D/page.tsx
/// for a route defined as /products/groceries/dairy/milk
interface Props {
  params: { slug: string[] };
}

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params;
  return <div>ProductPage: {slug}</div>;
};

export default ProductPage;

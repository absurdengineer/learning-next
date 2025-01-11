import { NextRequest, NextResponse } from "next/server";
import { getNextProductId, products } from "./products";
import productSchema from "./schema";

export const GET = (request: NextRequest) => {
  return NextResponse.json({
    data: products,
  });
};

export const POST = async (request: NextRequest) => {
  let product = await request.json();
  const validation = productSchema.safeParse(product);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  product = { id: getNextProductId(), ...product };
  products.push(product);
  return NextResponse.json(
    {
      data: product,
    },
    {
      status: 201,
    }
  );
};

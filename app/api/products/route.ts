import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import productSchema from "./schema";

export const GET = async (request: NextRequest) => {
  const products = await prisma.product.findMany();
  return NextResponse.json({
    data: products,
  });
};

export const POST = async (request: NextRequest) => {
  let body = await request.json();
  const validation = productSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  const product = await prisma.product.create({
    data: body,
  });
  return NextResponse.json(
    {
      data: product,
    },
    {
      status: 201,
    }
  );
};

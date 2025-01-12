import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";
import { prisma } from "@/prisma/client";

/// request is not needed here, but it's a good practice and also
/// nextjs cache the response if the request object is not included
export const GET = async (request: NextRequest) => {
  const users = await prisma.user.findMany();
  return NextResponse.json({
    data: users,
  });
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = userSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  let user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  user = await prisma.user.create({ data: body });
  return NextResponse.json(
    { data: user },
    {
      status: 201,
    }
  );
};

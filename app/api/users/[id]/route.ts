import { NextRequest, NextResponse } from "next/server";
import { users, User } from "../users";
import userSchema from "../schema";
import { prisma } from "@/prisma/client";

interface Props {
  params: {
    id: string;
  };
}

interface GetUser {
  (id: string): Promise<User | null>;
}

const getUser: GetUser = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
};

export const GET = async (request: NextRequest, { params }: Props) => {
  const { id } = params;
  const user = await getUser(id);
  if (!user) {
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );
  }
  return NextResponse.json(
    {
      data: user,
    },
    { status: 200 }
  );
};

export const PUT = async (request: NextRequest, { params }: Props) => {
  const { id } = await params;
  let user = await getUser(id);
  if (!user) {
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );
  }
  const body = await request.json();
  const isEmailExists = await prisma.user.findUnique({
    where: {
      email: body.email,
      NOT: { id: parseInt(id) },
    },
  });
  if (isEmailExists)
    return NextResponse.json({ error: "Email already taken" }, { status: 400 });
  const validation = userSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  user = await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: body,
  });
  return NextResponse.json(
    {
      data: user,
    },
    { status: 200 }
  );
};

export const DELETE = async (request: NextRequest, { params }: Props) => {
  const { id } = await params;
  const user = await getUser(id);
  if (!user) {
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );
  }
  await prisma.user.delete({
    where: {
      id: parseInt(id),
    },
  });
  return NextResponse.json({}, { status: 200 });
};

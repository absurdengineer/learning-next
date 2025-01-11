import { NextRequest, NextResponse } from "next/server";
import { users, User } from "../users";
import UserSchema from "../schema";
import userSchema from "../schema";

interface Props {
  params: {
    id: string;
  };
}

export const GET = async (request: NextRequest, { params }: Props) => {
  const { id } = params;
  const user = users.find((user: User) => user.id?.toString() === id);
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
  const { id } = params;
  const user = users.find((user: User) => user.id?.toString() === id);
  if (!user) {
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );
  }
  const newUser = await request.json();
  const validation = userSchema.safeParse(newUser);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  Object.assign(user, newUser);
  return NextResponse.json(
    {
      data: user,
    },
    { status: 200 }
  );
};

export const DELETE = async (request: NextRequest, { params }: Props) => {
  const { id } = params;
  const userIndex = users.findIndex((user: User) => user.id?.toString() === id);
  if (userIndex === -1) {
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );
  }
  users.splice(userIndex, 1);
  return NextResponse.json({}, { status: 200 });
};

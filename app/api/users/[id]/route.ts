import { NextRequest, NextResponse } from "next/server";
import { users, User } from "../users";

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
  if (!newUser || !newUser.name || !newUser.email) {
    return NextResponse.json(
      {
        error: "Name and email are required",
      },
      { status: 400 }
    );
  }
  Object.assign(user, newUser);
  return NextResponse.json(
    {
      data: user,
    },
    { status: 200 }
  );
};

import { NextRequest, NextResponse } from "next/server";
import { users, User, getNextId } from "./users";

/// request is not needed here, but it's a good practice and also
/// nextjs cache the response if the request object is not included
export const GET = (request: NextRequest) => {
  return NextResponse.json({
    data: users,
  });
};

export const POST = async (request: NextRequest) => {
  const user: User = await request.json();
  if (!user || !user.name || !user.email)
    return NextResponse.json(
      {
        error: "Name and email are required",
      },
      {
        status: 400,
      }
    );
  return NextResponse.json(
    {
      id: getNextId(),
      ...user,
    },
    {
      status: 201,
    }
  );
};

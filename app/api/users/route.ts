import { NextRequest, NextResponse } from "next/server";
import users from "./users.json";

let id = 1;

const getUserId = () => {
  if (id > 100) id = 1;
  return (id += 1);
};

interface User {
  name: string;
  email: string;
}

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
  return NextResponse.json({
    id: getUserId(),
    ...user,
  });
};

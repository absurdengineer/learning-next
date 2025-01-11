import { NextRequest, NextResponse } from "next/server";
import { users, User, getNextId } from "./users";
import userSchema from "./schema";

/// request is not needed here, but it's a good practice and also
/// nextjs cache the response if the request object is not included
export const GET = (request: NextRequest) => {
  return NextResponse.json({
    data: users,
  });
};

export const POST = async (request: NextRequest) => {
  const user = await request.json();
  const validation = userSchema.safeParse(user);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
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

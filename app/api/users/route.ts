import { NextRequest, NextResponse } from "next/server";
import { users, getNextUserId } from "./users";
import userSchema from "./schema";

/// request is not needed here, but it's a good practice and also
/// nextjs cache the response if the request object is not included
export const GET = (request: NextRequest) => {
  return NextResponse.json({
    data: users,
  });
};

export const POST = async (request: NextRequest) => {
  let user = await request.json();
  const validation = userSchema.safeParse(user);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  user = { id: getNextUserId(), ...user };
  users.push(user);
  return NextResponse.json(
    { data: user },
    {
      status: 201,
    }
  );
};

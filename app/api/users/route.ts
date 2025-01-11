import { NextRequest, NextResponse } from "next/server";
import users from "./users.json";

/// request is not needed here, but it's a good practice and also
/// nextjs cache the response if the request object is not included
export const GET = (request: NextRequest) => {
  return NextResponse.json({
    data: users,
  });
};

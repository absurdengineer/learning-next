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
  return NextResponse.json(
    {
      data: user,
    },
    { status: 200 }
  );
};

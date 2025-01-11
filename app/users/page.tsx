import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";
import Loading from "../components/Loading";

interface Props {
  searchParams: Promise<{
    sortOrder: string;
  }>;
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;
  return (
    <div>
      <div className="flex">
        <div className="flex-1">
          <h1>Users</h1>
        </div>
        <div className="flex-none">
          <Link href="/users/new" className="btn btn-secondary">
            New User
          </Link>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;

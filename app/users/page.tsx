import Link from "next/link";
import UserTable from "./UserTable";

interface Props {
  searchParams: Promise<{
    sortOrder: string;
  }>;
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;
  return (
    <div>
      <h1>Users</h1>
      <Link href="/users/new" className="btn btn-secondary">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;

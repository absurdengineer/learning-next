import { sort } from "fast-sort";
import React from "react";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users: User[] = await res.json();
  users = sort(users).asc(sortOrder === "email" ? "email" : "name");

  return (
    <table className="table table-zebra">
      <thead>
        <tr>
          <th>
            <Link href="?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

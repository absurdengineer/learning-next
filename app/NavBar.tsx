import Link from "next/link";

const NavBar = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="navbar bg-base-100">
      <Link href="/" className="btn btn-ghost text-xl">
        Next.js
      </Link>
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

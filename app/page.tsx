import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}

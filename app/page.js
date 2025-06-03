import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Oasis</h1>
      <Link href="/cabins">cabins</Link>
    </div>
  );
}

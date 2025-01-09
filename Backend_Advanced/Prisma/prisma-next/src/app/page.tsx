import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">Welcome!!!</h1>
      <Link href={`/posts`}>Go to posts page</Link>
    </div>
  );
}
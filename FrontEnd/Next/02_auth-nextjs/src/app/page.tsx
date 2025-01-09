import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-6xl font-bold mb-4">AUTH APP!</h1>
      <Link href="/login"><Button>Login</Button></Link>

    </main>
  );
}

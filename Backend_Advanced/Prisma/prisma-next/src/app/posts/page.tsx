import prisma from "@/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button"


export default async function PostsPage() {

    // Create post
    // Get all posts from the database
    const posts = await prisma.post.findMany() ?? [];

    // If we use pagination we can't use posts.length because it will not return the total no of posts in the database
    const postsCount = await prisma.post.count();

    return (
        <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
            <h1 className="text-3xl font-semibold">All Posts ({postsCount})</h1>
            <ul className="border-t border-b border-white/10 py-5 leading-8">
                {posts?.map((post) => (
                    <li key={post.id} className="flex items-center justify-between px-5">
                        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <Button><Link href={`/posts/create`}>Create Post</Link></Button>
        </main>
    );
}
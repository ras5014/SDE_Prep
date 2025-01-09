import Link from "next/link";
import { prisma } from "../../../lib/prisma";

export default async function PostsPage() {

    // fetch posts from the API
    const posts = await prisma.post.findMany({});


    return (
        <main className="text-center pt-20 px-5 mb-8">
            <h1 className="text-4xl font-bold mb-5 md:text-5xl">All Posts</h1>

            <ul className="grid grid-cols-2 gap-10">
                {(posts.length > 0) && posts.map((post) => (
                    <Link key={post.id} href={`/posts/${post.id}`} className="hover:bg-slate-500 hover:text-white hover:rounded-lg">
                        <li key={post.id} className="border p-5 rounded-lg shadow-lg">
                            <h1 className="text-lg font-semibold mb-4">{post.title}</h1>
                            <p>{post.body.slice(0, 20)}...</p>
                        </li>
                    </Link>
                ))}
            </ul>

            {posts.length === 0 && (
                <p className="text-lg text-gray-500 text">No posts found. Please create a post.</p>
            )}
        </main>
    )
}

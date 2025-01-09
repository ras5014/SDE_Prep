import Upvote from "@/components/upvote";
import { prisma } from "../../../../lib/prisma";
import { notFound } from "next/navigation";

export default async function PostPage({ params }) {

    // fetch post from the API
    const post = await prisma.post.findUnique({
        where: {
            id: params.id
        }
    });

    if (!post) {
        notFound();
    }


    return (
        <main className="text-center pt-20 px-7">
            <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
            <p className="max-w-[700px] mx-auto leading-8">{post.body}</p>
            <Upvote />
        </main>
    )
}

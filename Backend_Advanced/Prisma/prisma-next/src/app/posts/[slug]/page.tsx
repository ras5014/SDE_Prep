import prisma from "@/lib/db";

export default async function PostPage({ params }: any) {

    const { slug } = await params;
    // Get the post from the database
    const post = await prisma.post.findUnique({
        where: {
            slug: slug
        }
    })

    return (
        <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
            <h1 className="text-3xl font-semibold">{post?.title}</h1>
            <p>{post?.content}</p>
        </main>
    );
}
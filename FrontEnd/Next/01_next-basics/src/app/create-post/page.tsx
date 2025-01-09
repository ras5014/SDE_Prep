import { createPost } from "@/actions/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function CreatePostPage() {

    return (
        <main className="text-center pt-20 px-5">
            <h1 className="text-4xl font-bold mb-5 md:text-5xl">Create Post</h1>
            <form action={createPost} className="flex flex-col max-w-[400px] gap-2 mx-auto my-10">
                <input
                    type="text"
                    placeholder="Write your Post Title"
                    name="title"
                    className="border rounded px-3 h-10"
                />
                <textarea
                    name="body"
                    placeholder="Body content for new post"
                    className="border rounded px-3 py-2"
                />
                <button type="submit" className="h-10 bg-blue-500 px-5 rounded text-white hover:bg-blue-800">Submit</button>
            </form>

            <LogoutLink className=" border rounded px-10 py-2 hover:bg-zinc-700 hover:text-zinc-100">Log out</LogoutLink>
        </main>
    )
}

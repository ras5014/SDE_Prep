"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../../lib/prisma";
import { redirect } from "next/navigation";

// To use server actions

export const createPost = async (fromData: FormData) => {
  const title = fromData.get("title") as string;
  const body = fromData.get("body") as string;

  try {
    const post = await prisma.post.create({
      data: {
        title,
        body,
      },
    });

    console.log(post);
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/posts");
  redirect("/posts");
};

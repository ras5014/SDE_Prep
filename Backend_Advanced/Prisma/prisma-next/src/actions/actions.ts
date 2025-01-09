"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";

// Create post
export async function createPost(formData) {
  console.log(formData);
  try {
    await prisma.post.create({
      data: {
        title: formData.title,
        content: formData.content,
        slug: formData.title.toLowerCase().split(" ").join("-"),
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.error("Post with this title already exists");
      }
    }
  }
  revalidatePath("/posts"); // Revalidate the cache for the /posts path
  redirect("/posts");
}

// Update post
export async function updatePost(formData, id: string) {
  await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: formData.title,
      content: formData.content,
      slug: formData.title.toLowerCase().split(" ").join("-"),
    },
  });
}

// Delete post
export async function deletePost(formData, id: string) {
  await prisma.post.delete({
    where: {
      id: id,
    },
  });
}

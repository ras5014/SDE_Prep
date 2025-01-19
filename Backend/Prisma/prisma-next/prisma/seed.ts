import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create posts array

const posts = [
  {
    title: "Post 1",
    content: "This is the content of post 1",
    slug: "post-1",
    author: {
      connectOrCreate: {
        where: {
          email: "test@test.com",
        },
        create: {
          email: "test@test.com",
          name: "Test User",
        },
      },
    },
  },
];
async function main() {
  console.log(`Start seeding ...`);
  for (const p of posts) {
    const post = await prisma.post.create({
      data: p,
    });
    console.log(`Created post with id: ${post.id}`);
  }
  console.log(`Seeding finished.`);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

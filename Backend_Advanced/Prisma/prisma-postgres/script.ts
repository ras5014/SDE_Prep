import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

async function main() {
  // CRUD operations
  // create a new user
  const user = await prisma.user.create({
    data: {
      name: "Radhika",
      email: "radhika@gmail.com",
    },
  });
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  // await prisma.user.deleteMany();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

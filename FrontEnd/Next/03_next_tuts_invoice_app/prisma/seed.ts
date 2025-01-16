import { PrismaClient } from "@prisma/client";
import {
  users,
  customers,
  invoices,
  revenue,
} from "../src/lib/placeholder-data";

const prisma = new PrismaClient();

async function main() {
  // Clean the database
  await prisma.invoice.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.user.deleteMany();
  await prisma.revenue.deleteMany();

  // Seed Users
  await Promise.all(users.map((user) => prisma.user.create({ data: user })));
  // Seed Customers
  await Promise.all(
    customers.map((customer) => prisma.customer.create({ data: customer }))
  );
  // Seed Invoices
  await Promise.all(
    invoices.map((invoice) => prisma.invoice.create({ data: invoice }))
  );
  // Seed Revenue
  await Promise.all(
    revenue.map((revenue) => prisma.revenue.create({ data: revenue }))
  );
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

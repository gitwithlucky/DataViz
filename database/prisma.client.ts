import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const orderRepository = prisma.orders;

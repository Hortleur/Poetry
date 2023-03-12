import { PrismaClient } from "@prisma/client";
const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === "development" || "production"){
    global.prisma = prisma
}

export {prisma}
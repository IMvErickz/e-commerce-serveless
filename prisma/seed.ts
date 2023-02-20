import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient()

async function Main() {
    await prisma.category.create({
        data: {
            id: randomUUID(),
            Name: "Cozinha",
            Description: "Itens para cozinha"
        }
    })
}

Main()
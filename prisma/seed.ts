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

    await prisma.product.create({
        data: {
            Name: "Panela",
            img: "https://cdn.awsli.com.br/600x450/1250/1250980/produto/48170563/panela-especial-polida-20-cm-eirilar-d284a057.jpg",
            Price: 39.9,
            id: randomUUID()
        }
    })
}

Main()
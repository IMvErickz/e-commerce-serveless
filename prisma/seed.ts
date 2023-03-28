import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient()

async function Main() {
    await prisma.category.create({
        data: {
            id: randomUUID(),
            Name: "Íntimo",
            Description: "Roupas íntimas"
        }
    })

    await prisma.product.create({
        data: {
            Name: "Cueca Lupo",
            img: "https://modafacil.vteximg.com.br/arquivos/ids/399596-1000-1000/LUP436-088_2805-1-kit-2-cuecas-boxer-sem-costura-em-microfibra-Lupo.jpg?v=637769051861800000",
            Price: 25.90,
            id: randomUUID()
        }
    })
}

Main()
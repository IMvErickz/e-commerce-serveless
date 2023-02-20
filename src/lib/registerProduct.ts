import { randomUUID } from "crypto"
import { prisma } from "lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export async function NewProduct(req: NextApiRequest, res: NextApiResponse) {
    const { Name, Price } = req.body
        
        await prisma.product.create({
            data: {
                id: randomUUID(),
                Name,
                Price
            }
        })

        return res.status(201).json({data: Name})
}
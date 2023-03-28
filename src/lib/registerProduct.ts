import { randomUUID } from "crypto"
import {db}  from "lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import {z} from 'zod'

export async function NewProduct(req: NextApiRequest, res: NextApiResponse) {
    const product = z.object({
        Name: z.string(),
        Price: z.number(),
        img: z.string()
    })
    
    const {Name, Price, img}= product.parse(req.body)
        
        await db.product.create({
            data: {
                id: randomUUID(),
                Name,
                Price,
                img

            }
        })

        return res.status(201).json({data: Name})
}
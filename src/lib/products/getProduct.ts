import {db} from "lib/prisma"

export async function getProducts() {
    const products = await db.product.findMany({
        select: {
            Name: true,
            img: true,
            Price: true,
            id: true,
            Category: {
                select: {
                    Name: true
                }
            }
        }
    })

    return {products}
}
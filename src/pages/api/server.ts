import { getProducts } from "@/lib/products/getProduct";
import { NewProduct } from "@/lib/registerProduct";
import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { method } = req
    
    if (method == 'GET') {
        const products = await getProducts()

        res.status(200).json({ data: products})
    } else if (method == "POST") {
        const product = await NewProduct(req, res)

        res.status(200).json({ data: product})

    }

    return res.status(404).json({message: "Not Found"})
    
}
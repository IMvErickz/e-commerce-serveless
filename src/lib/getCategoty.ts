import { db } from "lib/prisma";

export async function getCategory() {
    const category = await db.category.findMany()

    return {category}
}
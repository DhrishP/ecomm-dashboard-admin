import prisma from "@/prisma/client";


export default async function getSales(StoreId:string) {
    const res = await prisma.order.findMany({
        where:{
            isPaid:true,
            StoreId
        }
    })

    return res.length
}
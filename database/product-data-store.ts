import { PrismaClient } from "@prisma/client";
import Product from "../model/Product";



const prisma = new PrismaClient();

export async function addProduct(product:Product) {

    try{

       const Base64 = require("js-base64").Base64;
       const decoded = Base64.decode(product.observedImage);

        return await prisma.product.create({
            data: {
                batchCode:product.batchCode,
                name : product.name,
                price:product.price,
                quality:product.quality,
                observedImage : decoded
            }
        });
    }catch (error) {
        console.error(`Error adding logs: ${error}`);
        throw error;
    }
}

export async function deleteProduct(batchCode: string) {
    try{
        return await prisma.product.delete({
            where:{
                batchCode: batchCode
            }
        });
    }catch (error) {
        console.error(`Error deleting batchCode: ${error}`);
        throw error;
    }
}

export async function updateProduct(batchCode: string, product: Product) {
    try{
        const Base64 = require("js-base64").Base64;
        const decoded = Base64.decode(product.observedImage);

        return await prisma.product.update({
            where: {
                batchCode: batchCode
            },
            data: {
                name : product.name,
                price:product.price,
                quality : product.quality,
                observedImage : decoded
            }
        });
    }catch (error) {
        console.error(`Error updating logs: ${error}`);
        throw error;
    }
}

export async function gerProducts() {
    try{
        return await prisma.product.findMany();
    }catch (error) {
        console.error(`Error getting products: ${error}`);
        throw error;
    }
}

// export async function getLogsById(id: string) {
//     try{
//         return await prisma.logs.findUnique({
//             where: {
//                 logID: id
//             }
//         });
//     }catch (error) {
//         console.error(`Error getting logs: ${error}`);
//         throw error;
//     }
// }

import { PrismaClient } from "@prisma/client";
import CinnamonStock from "../model/CinnamonStock";


const prisma = new PrismaClient();


export async function addCinnamonStock(cinnamonStock:CinnamonStock) {
    try {
        return await prisma.cinnamonstock.create({
            data: {
                stockID:cinnamonStock.stockID,
                batchCode:cinnamonStock.batchCode,
                total:cinnamonStock.total,
                quantity:cinnamonStock.quantity,
                supplierID:cinnamonStock.supplierID,
                receivedDate:new Date(cinnamonStock.receivedDate),
            }
        });
    } catch (error) {
        console.error(`Error adding CinnamonStock: ${error}`);
        throw error;
    }
}



export async function deleteCinnamonStock(id: string) {
    try{
        return await prisma.cinnamonstock.delete({
            where : {
                stockID: id
            }
        });
    } catch (error){
        console.error(`Error deleting CinnamonStock: ${error}`);
        throw error;
    }
}

export async function updateCinnamonStock(id: string, cinnamonStock: CinnamonStock) {
    try {
        return await prisma.cinnamonstock.update({
            where: {
                stockID: id
            },
            data: {
                stockID:cinnamonStock.stockID,
                batchCode:cinnamonStock.batchCode,
                total:cinnamonStock.total,
                quantity:cinnamonStock.quantity,
                supplierID:cinnamonStock.supplierID,
                receivedDate:new Date(cinnamonStock.receivedDate),
            }
        });
    }catch (error){
        console.error(`Error updating CinnamonStock: ${error}`);
        throw error;
    }
}

export async function getCinnamonStock() {
    try {
        return await prisma.cinnamonstock.findMany();
    } catch (error) {
        console.error(`Error getting CinnamonStock: ${error}`);
        throw error;
    }
}

export async function getCinnamonStockById(id: string) {
    try {
        return await prisma.cinnamonstock.findUnique({
            where: {
                stockID: id
            }
        });
    } catch (error) {
        console.error(`Error getting CinnamonStock: ${error}`);
        throw error;
    }
}
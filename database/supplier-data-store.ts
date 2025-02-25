import {PrismaClient} from "@prisma/client";
import Supplier from "../model/Suppliers";

const prisma = new PrismaClient();

export async function addSupplier(supplier:Supplier){
    try{
        return await prisma.suppliers.create({
            data : {
                supplierID : supplier.supplierID,
                firstName :supplier.firstName,
                lastName :supplier.lastName,
                gender :supplier.gender,
                addressLine01 :supplier.addressLine01,
                postalCode :supplier.postalCode,
                contactNo : supplier.contactNo,
                email : supplier.email
            }
        });
    }catch(e){
        console.error(`Error adding supplier: ${e}`);
        throw e;
    }
}

export async function deleteSupplier(id: string) {
    try {
        return await prisma.suppliers.delete({
            where:{
                supplierID: id
            }
        });
    } catch (error) {
        console.error(`Error deleting supplier: ${error}`);
        throw error;
    }
}

export async function updateSupplier(id: string, supplier: Supplier ) {
    try {
        return await prisma.suppliers.update({
            where:{
            supplierID: id
        },
            data:{
                firstName :supplier.firstName,
                lastName :supplier.lastName,
                gender :supplier.gender,
                addressLine01 :supplier.addressLine01,
                postalCode :supplier.postalCode,
                contactNo : supplier.contactNo,
                email : supplier.email
            }
            });
        }catch(e){
        console.error(`Error updating supplier: ${e}`);
        throw e;
    }
}

export async function getSuppliers() {
    try {
        return await prisma.suppliers.findMany();
    } catch (error) {
        console.error(`Error getting all supplier: ${error}`);
        throw error;
    }
}

export async function getSupplier(id: string) {
    try {
        return await prisma.suppliers.findUnique({
            where: {
                supplierID: id
            }
        });
    } catch (error) {
        console.error(`Error getting employee: ${error}`);
        throw error;
    }
}

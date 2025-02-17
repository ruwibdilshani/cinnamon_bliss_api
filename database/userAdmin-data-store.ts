import { PrismaClient } from "@prisma/client";
import {UserAdmin} from "../model/UserAdmin";



const prisma = new PrismaClient();

export async function addUserAdmin(userAdmin:UserAdmin) {
    try{
        return await prisma.userAdmin.create({
            data: {
                email: userAdmin.email,
                password: userAdmin.password,
                role: userAdmin.role
            }
        });
    }catch (error) {
        console.error(`Error adding userAdmin: ${error}`);
        throw error;
    }
}

export async function deleteUserAdmin(email: string) {
    try{
        return await prisma.userAdmin.delete({
            where:{
                email: email
            }
        });
    }catch (error) {
        console.error(`Error remove userAdmin: ${error}`);
        throw error;
    }
}

export async function updateUserAdmin(email: string, userAdmin: UserAdmin) {
    try{
        return await prisma.userAdmin.update({
            where: {
                email: email
            },
            data: {
                password: userAdmin.password,
                role: userAdmin.role
            }
        });
    }catch (error) {
        console.error(`Error updating userAdmin: ${error}`);
        throw error;
    }
}

export async function getUserAdmin(email:string) {
    try{
        return await prisma.userAdmin.findUnique({
            where:{
                email: email
            }
        })
    }catch (error) {
        console.error(`Error getting userAdmins: ${error}`);
        throw error;
    }
}

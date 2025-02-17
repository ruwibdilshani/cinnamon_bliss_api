import { PrismaClient } from "@prisma/client";
import Log from "../model/Log";

const prisma = new PrismaClient();

export async function addlogs(log:Log) {
    try{
        return await prisma.logs.create({
            data: {
                logID:log.logID,
                employeeID:log.employeeID,
                logsDes: log.logsDes,
                logDate: log.logDate,
            }
        });
    }catch (error) {
        console.error(`Error adding logs: ${error}`);
        throw error;
    }
}

export async function deleteLogs(id: string) {
    try{
        return await prisma.logs.delete({
            where:{
                logID: id
            }
        });
    }catch (error) {
        console.error(`Error deleting logs: ${error}`);
        throw error;
    }
}

export async function updateLogs(id: string, log: Log) {
    try{
        return await prisma.logs.update({
            where: {
                logID: id
            },
            data: {
                logID:log.logID,
                employeeID:log.employeeID,
                logsDes: log.logsDes,
                logDate: log.logDate,
            }
        });
    }catch (error) {
        console.error(`Error updating logs: ${error}`);
        throw error;
    }
}

export async function getLogs() {
    try{
        return await prisma.logs.findMany();
    }catch (error) {
        console.error(`Error getting logs: ${error}`);
        throw error;
    }
}

export async function getLogsById(id: string) {
    try{
        return await prisma.logs.findUnique({
            where: {
                logID: id
            }
        });
    }catch (error) {
        console.error(`Error getting logs: ${error}`);
        throw error;
    }
}


import Vehicle from "../model/Vehicle";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function addVehicle(vehicle:Vehicle) {
    try {
        return await  prisma.vehicles.create({
            data: {
                vehicleID:vehicle.vehicleID,
                licensePlate:vehicle.licensePlate,
                model:vehicle.model,
                capacity:vehicle.capacity,
                employeeID:vehicle.employeeID,
                available:vehicle.available,

            }
        });
    }catch (error) {
        console.error(`Error adding Vehicle: ${error}`);
        throw error;
    }
}

export async function deleteVehicle(id: string) {
    try{
        return await  prisma.vehicles.delete({
            where:{
                licensePlate:id,
            }
        });
    }catch (error) {
        console.error(`Error deleting vehicle: ${error}`);
        throw error;
    }
}

export async function updateVehicle(id: string, vehicle: Vehicle) {
    try{
        return await prisma.vehicles.update({
            where: {
                licensePlate: id
            },
            data: {
                vehicleID: vehicle.vehicleID,
                licensePlate: vehicle.licensePlate,
                model: vehicle.model,
                capacity: vehicle.capacity,
                employeeID: vehicle.employeeID,
                available:vehicle.available
            }
        });
    }catch (error) {
        console.error(`Error updating vehicle: ${error}`);
        throw error;
    }
}

export async function getVehicles() {
    try{
        return await prisma.vehicles.findMany();

    }catch (error) {
        console.error(`Error getting vehicles: ${error}`);
        throw error;
    }
}

export async function getVehicleById(id: string) {
    try {
        return await prisma.vehicles.findUnique({
            where: {
                licensePlate: id
            }
        });
    } catch (error) {
        console.error(`Error getting vehicle by id: ${error}`);
        throw error;
    }
}





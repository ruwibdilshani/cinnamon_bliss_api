import {PrismaClient} from "@prisma/client";
import {Employee} from "../model/Employee";

const prisma = new PrismaClient();

export async function addEmployee(employee: Employee) {
    try{
        return await prisma.employees.create({
            data:{
                employeeID:employee.employeeID,
                firstName:employee.firstName,
                lastName:employee.lastName,
                role:employee.role,
                gender:employee.gender,
                joinedDate:new Date(employee.joinedDate),
                dob:new Date(employee.dob),
                addressLine01:employee.addressLine01,
                addressLine02:employee.addressLine02,
                addressLine03:employee.addressLine03,
                addressLine04:employee.addressLine04,
                addressLine05:employee.addressLine05,
                postalCode:employee.postalCode,
                contactNo:employee.contactNo,
                email:employee.email
            }
        });    } catch (error) {
        console.error(`Error adding supplier: ${error}`);
        return error

    }
}

export async function deleteEmployee(id: string) {
    try {
        return await prisma.employees.delete({
            where:{
                employeeID: id
            }
        });
    } catch (error) {
        console.error(`Error deleting supplier: ${error}`);
        throw error;
    }
}

export async function updateEmployee(id: string, employee: Employee) {
    try {
        return await prisma.employees.update({
            where: {
                employeeID: id
            },
            data: {
                employeeID:employee.employeeID,
                firstName:employee.firstName,
                lastName:employee.lastName,
                role:employee.role,
                gender:employee.gender,
                joinedDate:new Date(employee.joinedDate),
                dob:new Date(employee.dob),
                addressLine01:employee.addressLine01,
                addressLine02:employee.addressLine02,
                addressLine03:employee.addressLine03,
                addressLine04:employee.addressLine04,
                addressLine05:employee.addressLine05,
                postalCode:employee.postalCode,
                contactNo:employee.contactNo,
                email:employee.email
            }
        });
    } catch (error) {
        console.error(`Error updating supplier: ${error}`);
        throw error;
    }
}

export async function getEmployees() {
    try {
        return await prisma.employees.findMany();
    } catch (error) {
        console.error(`Error getting supplier: ${error}`);
        throw error;
    }
}

export async function getEmployee(id: string) {
    try {
        return await prisma.employees.findUnique({
            where: {
                employeeID: id
            }
        });
    } catch (error) {
        console.error(`Error getting supplier: ${error}`);
        throw error;
    }
}

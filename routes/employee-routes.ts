import express from 'express';
import {Employee} from "../model/Employee";
import {addEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee} from "../database/employee-data-store";

const router = express.Router();


router.post("/add", async (req, res) => {
    const employee : Employee = req.body as Employee;
    try{
        const addedEmployee = await addEmployee(employee);
        res.status(201).json(addedEmployee);
    }catch (error){
        console.log(`Error adding Employee: ${error}`);
        res.status(500).send("Error adding Employee");
    }

});

router.delete("/remove/:employeeID", async (req, res) => {
    const employeeId: string = req.params.employeeID;
    try {
        const deletedEmployee = await deleteEmployee(employeeId);
        res.status(200).json(deletedEmployee);
    } catch (e) {
        console.log(`Error deleting employee: ${e}`);
        res.status(500).send("Error deleting employee");
    }
});

router.put("/update/:employeeID", async (req, res) => {
    const employeeId: string = req.params.employeeID;
    const employee: Employee = req.body as Employee;
    try {
        const updatedEmployee = await updateEmployee(employeeId, employee);
        res.status(200).json(updatedEmployee);
    } catch (e) {
        console.log(`Error updating employee: ${e}`);
        res.status(500).send("Error updating employee");
    }
});

router.get("/all", async (req, res) => {
    try {
        const employees = await getEmployees();
        res.status(200).json(employees);
    } catch (e) {
        console.log(`Error getting employees: ${e}`);
        res.status(500).send("Error getting employees");
    }
});


export default router;


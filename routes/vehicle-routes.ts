import express from "express";
import Vehicle from "../model/Vehicle";
import {addVehicle, deleteVehicle, getVehicles, updateVehicle} from "../database/vehicle-data-store";

const router = express.Router();

router.post("/add", async (req, res) => {
    const vehicle : Vehicle = req.body as Vehicle;
    try{
        const addedVehicle = await addVehicle(vehicle);
        res.status(201).json(addedVehicle);
    }catch (error) {
        console.log(`Error adding vehicle: ${error}`);
        res.status(500).send("Error adding vehicle");
    }
});

router.delete("/remove/:vehicleID", async (req, res) => {
    const vehicleID: string = req.params.vehicleID;
    try{
        const deletedVehicle = await deleteVehicle(vehicleID);
        res.status(200).json(deletedVehicle);
    }catch (error) {
        console.log(`Error deleting vehicle: ${error}`);
        res.status(500).send("Error deleting vehicle");
    }
});

router.put("/update/:vehicleID", async (req, res) => {
    const vehicleID: string = req.params.vehicleID;
    const vehicle: Vehicle = req.body as Vehicle;
    try{
        const updatedVehicle = await updateVehicle(vehicleID, vehicle);
        res.status(200).json(updatedVehicle);
    }catch (error) {
        console.log(`Error updating vehicle: ${error}`);
        res.status(500).send("Error updating vehicle");
    }
});

router.get("/all", async (req, res) => {
    try{
        const vehicles = await getVehicles();
        res.status(200).json(vehicles);
    }catch (error) {
        console.log(`Error getting vehicles: ${error}`);
        res.status(500).send("Error getting vehicles");
    }
});

export default router;


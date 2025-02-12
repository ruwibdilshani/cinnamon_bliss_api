import express from "express";
import Supplier from "../model/Suppliers";
import {addSupplier, deleteSupplier, getSuppliers, updateSupplier} from "../database/supplier-data-store";

const router = express.Router();

router.post("/add",async (req,res)=>{
    const supplier:Supplier = req.body as Supplier;
    try{
        const addedSupplier = await addSupplier(supplier);
        res.status(201).json(addedSupplier);
    }catch (error){
        console.log(`Error adding supplier: ${error}`);
        res.status(500).send("Error adding supplier");
    }
});

router.delete("/remove/:supplierID",async (req,res) =>{
    const supplierID: string = req.params.supplierID;
   try{
       const deletedSupplier = await deleteSupplier(supplierID);
       res.status(200).json(deletedSupplier);
   }catch (e){
       console.log(`Error deleting supplier: ${e}`);
       res.status(500).send("Error deleting supplier");
   }

});

router.put("/update/:supplierID",async (req,res)=>{
    const supplierID: string = req.params.supplierID;
    const supplier: Supplier = req.body as Supplier;
    try{
        const updatedSupplier = await updateSupplier(supplierID,supplier);
        res.status(200).json(updatedSupplier);
    }catch (e){
        console.log(`Error updating supplier: ${e}`);
        res.status(500).send("Error updating supplier");
    }
});

router.get("/all",async (req,res)=>{
    try{
        const suppliers = await getSuppliers();
        res.status(200).json(suppliers);
    }catch (e){
        console.log(`Error getting all suppliers: ${e}`);
        res.status(500).send("Error getting all suppliers");
    }
});

export default router;
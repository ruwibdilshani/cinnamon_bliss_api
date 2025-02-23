import express from "express";
import CinnamonStock from "../model/CinnamonStock";
import {
    addCinnamonStock,
    deleteCinnamonStock,
    getCinnamonStock,
    updateCinnamonStock
} from "../database/cinnamonStock-data-store";

const router = express.Router();

router.post("/add",async (req, res) => {
    const cinnamonStock:CinnamonStock = req.body as CinnamonStock;
    try {
        const addedRawMaterialStock = await addCinnamonStock(cinnamonStock);
        res.status(201).json(addedRawMaterialStock);
    } catch (error) {
        console.log(`Error adding cinnamonStock: ${error}`);
        res.status(500).send("Error adding cinnamonStock");
    }
});

router.delete("/remove/:stockID", async (req, res) => {
    const cinnamonStockID: string = req.params.stockID;
    try {
        const deletedStock = await deleteCinnamonStock(cinnamonStockID);
        res.status(200).json(deletedStock);
    } catch (e) {
        console.log(`Error deleting Stock: ${e}`);
        res.status(500).send("Error deleting Stock");
    }
});

router.put("/update/:stockID", async (req, res) => {
    const cinnamonStockID: string = req.params.stockID;
    const rawMaterialStock: CinnamonStock = req.body as CinnamonStock;
    try {
        const updatedStock = await updateCinnamonStock(cinnamonStockID, rawMaterialStock);
        res.status(200).json(updatedStock);
    } catch (e) {
        console.log(`Error updating stock: ${e}`);
        res.status(500).send("Error updating stock");
    }
});

router.get("/all", async ( req, res) => {
    try {
        const cinnamonStocks = await getCinnamonStock();
        res.status(200).json(cinnamonStocks);
    } catch (e) {
        console.log(`Error getting cinnamonStock: ${e}`);
        res.status(500).send("Error getting cinnamonStock");
    }
});

export default router;
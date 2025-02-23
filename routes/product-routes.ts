import express from "express";
import Product from "../model/Product";
import {addProduct, deleteProduct, gerProducts, updateProduct} from "../database/product-data-store";


const router = express.Router();

router.post("/add",async (req, res) => {
    const product : Product = req.body as Product;
    try{
        const addedProduct = await addProduct(product);
        res.status(201).json(addedProduct);
    }catch (error) {
        console.log(`Error adding product: ${error}`);
        res.status(500).send("Error adding product");
    }
});

router.delete("/remove/:batchCode", async (req, res) => {
    const batchCode: string = req.params.batchCode;
    try{
        const deletedProduct = await deleteProduct(batchCode);
        res.status(200).json(deletedProduct);
    }catch (e) {
        console.log(`Error deleting product: ${e}`);
        res.status(500).send("Error deleting product");
    }
});

router.put("/update/:batchCode", async (req, res) => {
    const batchCode: string = req.params.batchCode;
    const product: Product = req.body as Product;
    try{
        const updatedProduct = await updateProduct(batchCode, product);
        res.status(200).json(updatedProduct);
    }catch (e) {
        console.log(`Error updating product: ${e}`);
        res.status(500).send("Error updating product");
    }
});

router.get("/all", async (req, res) => {
    try{
        const products = await gerProducts();
        res.status(200).json(products);
    }catch (e) {
        console.log(`Error getting products: ${e}`);
        res.status(500).send("Error getting products");
    }
});



export default router;
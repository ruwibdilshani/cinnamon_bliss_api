import express from "express";
import {addUserAdmin, deleteUserAdmin, getUserAdmin, updateUserAdmin} from "../database/userAdmin-data-store";
import {UserAdmin} from "../model/UserAdmin";

const router = express.Router();

router.post("/add", async (req, res) => {
    const user = req.body;
    try{
        const addedUser = await addUserAdmin(user);
        res.status(201).json(user);
    }catch (error) {
        console.error(`Error adding user: ${error}`);
        res.status(500).send("Error adding user");
    }
});

router.delete("/remove/:email", async (req, res) => {
    const email: string = req.params.email;
    try{
        const deletedUser = await deleteUserAdmin(email);
        res.status(200).json(deletedUser);
    }catch (error) {
        console.error(`Error deleting user: ${error}`);
        res.status(500).send("Error deleting user");
    }
});

router.put("/update/:email", async (req, res) => {
    const email: string = req.params.email;
    const user:UserAdmin = req.body as UserAdmin;
    try{
        const updatedUser = await updateUserAdmin(email, user);
        res.status(200).json(updatedUser);
    }catch (error) {
        console.error(`Error updating user: ${error}`);
        res.status(500).send("Error updating user");
    }
});

router.get("/all", async (req, res) => {
    try{
        const email: string = req.query.email as string;
        const user = await getUserAdmin(email);
        res.status(200).json(user);
    }catch (error) {
        console.error(`Error getting user: ${error}`);
        res.status(500).send("Error getting user");
    }
});



export default router;
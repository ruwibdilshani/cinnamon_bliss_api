import express from "express";
import {addlogs, deleteLogs, getLogs, updateLogs} from "../database/log-data-store";
import Log from "../model/Log";

const router = express.Router();

router.post("/add", async (req, res) => {
    const log = req.body;
    try {
        const addedLogs = await addlogs(log);
        res.status(201).json(log);
    } catch (error) {
        console.error(`Error adding logs: ${error}`);
        res.status(500).send("Error adding logs");
    }
});

router.delete("/remove/:logID", async (req, res) => {
    const logID: string = req.params.logID;
    try {
        const deletedLogs = await deleteLogs(logID);
        res.status(200).json(deleteLogs);
    } catch (e) {
        console.error(`Error deleting logs: ${e}`);
        res.status(500).send("Error deleting logs");
    }
});

router.put("/update/:logID", async (req, res) => {
    const logID: string = req.params.logID;
    const logs :Log = req.body as Log;
    try {
        const updatedLogs = await updateLogs(logID, logs);
        res.status(200).json(updatedLogs);
    } catch (e) {
        console.error(`Error updating logs: ${e}`);
        res.status(500).send("Error updating logs");
    }
});

router.get("/all", async (req, res) => {
    try {
        const logs = await getLogs();
        res.status(200).json(logs);
    } catch (e) {
        console.error(`Error getting logs: ${e}`);
        res.status(500).send("Error getting logs");
    }
});

export default router;
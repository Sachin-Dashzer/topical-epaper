
import express from "express";
import {
    addProduct,
    fetchAllProducts,
    deleteProduct,
} from "../controllers/file.controllers.js";

import { upload } from '../utils/claudinary.js'


const router = express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    // const fileUrl = `https://api.pscupdates.com/files/${req.file.filename}`;
    const fileUrl = `http://localhost:9000/files/${req.file.filename}`;

    res.json({
        message: "File uploaded successfully",
        fileUrl: fileUrl,
    });
});

router.post("/add-product", addProduct);
router.get("/get-products", fetchAllProducts);
router.delete("/delete/:id", deleteProduct);


export default router;
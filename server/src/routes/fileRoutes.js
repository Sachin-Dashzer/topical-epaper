
import express from "express";
import {
    addProduct,
    fetchAllProducts,
    editProduct,
    deleteProduct,
} from "../controllers/file.controller.js";

import { upload } from '../utils/claudinary.js'


const router = express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    const fileUrl = `http://localhost:9000/files/${req.file.filename}`;

    res.json({
        message: "File uploaded successfully",
        fileUrl: fileUrl,
    });
});

router.post("/add-product", addProduct);
router.post("/edit-product", editProduct);
router.get("/get-products", fetchAllProducts);
router.post("/delete-product", deleteProduct);


export default router;
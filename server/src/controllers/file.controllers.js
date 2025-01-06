import Product from "../models/newsPaper.model.js";

import { unlinkSync, existsSync } from 'fs';





const addProduct = async (req, res) => {
    try {
        const { title, description, date, fileUrl, author, imgUrl, category } = req.body;

        const newProduct = new Product({
            title,
            description,
            date,
            fileUrl,
            author,
            imgUrl,
            category
        });

        await newProduct.save();
        res.send({
            success: true,
            massage: "File added successfully !",
        });
    } catch (e) {
        console.log(e);
        res.send({
            success: false,
            massage: "Error occurred !",
        });
    }
};


const fetchAllProducts = async (req, res) => {
    try {




        const products = await Product.find({}).sort({ _id: -1 });

        if (products.length > 90) {

            let x = products.length - 90;

            const result = await Product.find().limit(x)


            for (let doc of result) {
                try {
                    if (doc.fileUrl) {

                        const filePath = doc.fileUrl.replace('https://api.pscupdates.com', '/var/www/topical-epaper/server/public');
                        // const filePath = doc.fileUrl.replace('http://localhost:9000', '/var/www/topical-epaper/server/public');
                        if (existsSync(filePath)) {
                            unlinkSync(filePath);
                        } else {
                            console.error(`File does not exist at path: ${filePath}`);
                        }
                    }

                } catch (fileError) {
                    console.error("Error deleting file:", fileError);
                    return res.status(500).send({
                        success: false,
                        massage: "Error deleting Product files!",
                    });
                }

                await Product.deleteOne({ _id: doc._id })
            }
        }


        res.send({
            success: true,
            data: products,
        });
    } catch (e) {
        console.error(e);
        res.send({
            success: false,
            massage: "Error occurred!",
        });
    }
};




const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send({
                success: false,
                massage: "Product not found!",
                id
            });
        }


        try {
            if (product.fileUrl) {

                const filePath = product.fileUrl.replace('https://api.pscupdates.com', '/var/www/topical-epaper/server/public');
                // const filePath = product.fileUrl.replace('http://localhost:9000', '/var/www/topical-epaper/server/public');
                if (existsSync(filePath)) {
                    unlinkSync(filePath);
                } else {
                    console.error(`File does not exist at path: ${filePath}`);
                }
            }

        } catch (fileError) {
            console.error("Error deleting file:", fileError);
            return res.status(500).send({
                success: false,
                massage: "Error deleting product files!",
            });
        }

        await Product.findByIdAndDelete(id);

        res.send({
            success: true,
            massage: "Product deleted successfully!",
        });

    } catch (e) {
        console.error("Error:", e);
        res.status(500).send({
            success: false,
            massage: "Error occurred while deleting the product!",
        });
    }
};








export {
    addProduct,
    fetchAllProducts,
    deleteProduct,
};

import Product from "../models/newsPaper.model.js";
import DailyLInk from "../models/dailyLink.js";

import { unlinkSync, existsSync } from 'fs';
import { asyncHandler } from "../utils/asyncHandler.js";






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




const fetchDailyLink = asyncHandler(async (req, res) => {

    const data = await DailyLInk.find({});

    res.send({
        success: true,
        data: data
    })

});

const updateLink = asyncHandler(async (req, res) => {
    const { date, firstName, firstLink, secondLink, secondName } = req.body;



    if ([date, firstName, firstLink, secondLink, secondName].some((item) => typeof item !== 'string' || item.trim() === '')) {
        return res.status(400).send({
            success: false,
            message: "All fields are required!"
        });
    }

    const user = await DailyLInk.findById("678d340354a2bf6092b55781");
    if (!user) {
        return res.status(404).send({
            success: false,
            message: "User not found!"
        });
    }

    user.date = date;
    user.firstLink = firstLink;
    user.firstBtn = firstName; 
    user.secondLink = secondLink;
    user.secondBtn = secondName; 

    await user.save();

    // Respond with success
    res.status(200).send({
        success: true,
        message: "Link updated successfully!",
    });
});



export {
    addProduct,
    fetchAllProducts,
    deleteProduct,
    fetchDailyLink,
    updateLink
};

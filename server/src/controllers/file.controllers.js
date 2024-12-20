import Product from "../models/newsPaper.model.js";




const addProduct = async (req, res) => {
    try {
        const { title, description, date, fileUrl } = req.body;

        const newProduct = new Product({
            title,
            description,
            date,
            fileUrl,
        });

        await newProduct.save();
        res.status(201).json({
            success: true,
            message: "Product added successfully",
            data: newProduct,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error occurred",
        });
    }
};


const fetchAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            data: products,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error occurred",
        });
    }
};


const editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, date, fileUrl } = req.body;

        let product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        product.title = title || product.title;
        product.description = description || product.description;
        product.date = date || product.date;
        product.fileUrl = fileUrl || product.fileUrl;

        await product.save();
        res.status(200).json({
            success: true,
            data: product,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error occurred",
        });
    }
};


const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
                id
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error occurred",
        });
    }
};

export {
    addProduct,
    fetchAllProducts,
    editProduct,
    deleteProduct,
};
 
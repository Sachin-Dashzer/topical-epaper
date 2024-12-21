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
        res.send({
            success: true,
            massage: "Product added successfully !",
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
        const products = await Product.find({});
        res.send({
            success: true,
            data: products,
        });
    } catch (e) {
        console.log(e);
        res.send({
            success: false,
            massage: "Error occurred !",
        });
    }
};



const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.send({
                success: false,
                massage: "Product not found !",
                id
            });
        }

        res.send({
            success: true,
            massage: "Product deleted successfully !",
        });
    } catch (e) {
        console.log(e);
        res.send({
            success: false,
            massage: "Error occurred !",
        });
    }
};

export {
    addProduct,
    fetchAllProducts,
    deleteProduct,
};

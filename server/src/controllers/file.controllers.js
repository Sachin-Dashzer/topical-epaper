import Product from "../models/newsPaper.model.js";




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

        res.send({
            success: true,
            data: products,
        });
    } catch (e) {
        console.error(e);
        res.send({
            success: false,
            message: "Error occurred!",
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

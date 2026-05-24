import productModel from "../Models/productModel.js";

export const addProduct = async (req, res) => {
    const { name, description, price, category, imageSrc } = req.body
    try {
        const exist = await productModel.findOne({ name });
        if (exist) {
            return res.status(409).json({
                message: "Product Already Exist"
            });
        }
        const product = await productModel.create({
            name,
            description,
            price,
            category,
            imageSrc
        })
        res.status(201).json({
            message: "Add product successfully",
            product
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const getProduct = async (req, res) => {
    try {
        const products = await productModel.find().sort({ createdAt: -1 });
        res.json({
            message: "All Products",
            products
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const updateById = await productModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updateById) {
            return res.status(404).json({
                message: "Product Not Found"
            });
        }
        res.json({
            message: "Product Updated successfully",
            updateById
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteById = await productModel.findByIdAndDelete(id);
        if (!deleteById) {
            return res.status(404).json({
                message: "Product Not Found"
            });
        }
        res.json({
            message: "Product deleted sucessfully",
            deleteById
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
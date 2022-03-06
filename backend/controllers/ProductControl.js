import Product from "../models/ProductsModel.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const saveProduct = async (req, res) => {
    const product = new Product(req.body)
    try {
        const insertProduct = await product.save()
        res.status(201).json(insertProduct)

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const upProduct = await Product.updateOne({ _id: req.params.id }, { $set: req.body })
        res.status(200).json(upProduct)

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const delProduct = await Product.deleteOne({ _id: req.params.id })
        res.status(200).json(delProduct)

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}
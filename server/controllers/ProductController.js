const Product = require('../models/Product');


exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};


exports.createProduct = async (req, res) => {
    const { name, price, description } = req.body;

    try {
        const product = new Product({
            name,
            price,
            description
        });

        await product.save();
        res.json(product);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

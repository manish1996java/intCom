const products = require('../../data/products');

const getProducts = (req,res) => {
    res.status(200).json(products);
}

const addProduct = (req,res) => {
    console.log('addProduct');
}

const editProduct = (req,res) => {
    console.log('editProduct');
}

const deleteProduct = (req,res) => {
    console.log('deleteProduct');
}

const deleteAllProducts = (req,res) => {

}

module.exports = {getProducts, addProduct,editProduct, deleteProduct, deleteAllProducts}
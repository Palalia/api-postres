import { ProductInterface } from "../interfaces/productInterface";
import Product from "../models/productModel";
const findAllProducts = async () => {
    try {
        const result = await Product.findAll();
        return result;
    } catch (e) {
        throw e;
    }
}
const findProductById = async (id: string) => {
    try {
        const result = await Product.findByPk(id);
        return result;
    } catch (e) {
        throw e;
    }
}
const createProduct = async (data: ProductInterface) => {
    try {
        const result = await Product.create(data);
        return result;
    } catch (e) {
        throw e;
    }
}
const updateProduct = async (id: string, data: Partial<ProductInterface>) => {
    try {
        const product = await Product.findByPk(id);
        if (!product) return null;
        const result = await product.update(data);
        return result;
    } catch (e) {
        throw e;
    }
}

const bulkCreateProducts = async (data: ProductInterface[]) => {
    try {
        const result = await Product.bulkCreate(data);
        return result;
    } catch (e) {
        throw e;
    }
}
export { findAllProducts, findProductById, createProduct, updateProduct, bulkCreateProducts };
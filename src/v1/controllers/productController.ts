import { Request, Response } from "express";
import { findAllProducts, findProductById, createProduct, updateProduct } from "../services/productService";
import { httpError } from "../helpers/handleError";
const index = async (req: Request, res: Response) => {
    try {
        const result = await findAllProducts();
        res.send({
            status: 200,
            msg: "ok",
            data: result
        })
    } catch (e) {
        httpError({
            req, res,
            status: 500,
            message: 'Error while processing index product.' + e,
            value: [],
            filename: 'productController.ts',
            functionname: 'index'
        });
    }
}
const show = async (req: Request, res: Response) => {
    try {
        const result = await findProductById(req.params.id);
        if (!result)
            throw 404
        res.send({
            status: 200,
            msg: "ok",
            data: result
        })
    } catch (e) {
        if (e === 404) {
            httpError({
                req, res,
                status: 404,
                message: 'Product not found.',
                value: [],
                filename: 'productController.ts',
                functionname: 'show'
            });
        } else {
            httpError({
                req, res,
                status: 500,
                message: 'Error while processing show product.' + e,
                value: [],
                filename: 'productController.ts',
                functionname: 'show'
            });
        }
    }
}
const create = async (req: Request, res: Response) => {
    try {
        const result = await createProduct(req.body);
        res.status(201).send({
            status: 201,
            msg: "ok",
            data: result,
        });
    } catch (e) {
        httpError({
            req, res,
            status: 500,
            message: 'Error while processing create product.' + e,
            value: [],
            filename: 'productController.ts',
            functionname: 'create'
        });
    }
}
const update = async (req: Request, res: Response) => {
    try {
        const result = await updateProduct(req.params.id, req.body);
        res.send({
            status: 200,
            msg: "ok",
            data: result
        })
    } catch (e) {
        if (e === 404) {
            httpError({
                req, res,
                status: 404,
                message: 'Product not found.',
                value: [],
                filename: 'productController.ts',
                functionname: 'update'
            });
        } else {
            httpError({
                req, res,
                status: 500,
                message: 'Error while processing update product.' + e,
                value: [],
                filename: 'productController.ts',
                functionname: 'update'
            });
        }
    }
}
const bulk = async (req: Request, res: Response) => {
    try {
        const result = await createProduct(req.body);
        res.status(201).send({
            status: 201,
            msg: "ok",
            data: result,
        });
    } catch (e) {
        httpError({
            req, res,
            status: 500,
            message: 'Error while processing bulk create product.' + e,
            value: [],
            filename: 'productController.ts',
            functionname: 'bulk'
        });
    }
}

export { index, show, create, update, bulk };
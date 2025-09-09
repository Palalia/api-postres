import { Request, Response } from "express";
import { findAllConcepts, findConceptById, createConcept, updateConcept } from "../services/conceptService";
import { httpError } from "../helpers/handleError";
const index = async (req: Request, res: Response) => {
    try {
        const result = await findAllConcepts();
        res.send({
            status: 200,
            msg: "ok",
            data: result
        })
    } catch (e) {
        httpError({
            req, res,
            status: 500,
            message: 'Error while processing index Concept.' + e,
            value: [],
            filename: 'conceptController.ts',
            functionname: 'index'
        });
    }
}
const show = async (req: Request, res: Response) => {
    try {
        const result = await findConceptById(req.params.id);
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
                message: 'Concept not found.',
                value: [],
                filename: 'conceptController.ts',
                functionname: 'show'
            });
        } else {
            httpError({
                req, res,
                status: 500,
                message: 'Error while processing show Concept.' + e,
                value: [],
                filename: 'conceptController.ts',
                functionname: 'show'
            });
        }
    }
}
const create = async (req: Request, res: Response) => {
    try {
        const result = await createConcept(req.body);
        res.status(201).send({
            status: 201,
            msg: "ok",
            data: result,
        });
    } catch (e) {
        httpError({
            req, res,
            status: 500,
            message: 'Error while processing create Concept.' + e,
            value: [],
            filename: 'conceptController.ts',
            functionname: 'create'
        });
    }
}
const update = async (req: Request, res: Response) => {
    try {
        const result = await updateConcept(req.params.id, req.body);
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
                message: 'Concept not found.',
                value: [],
                filename: 'conceptController.ts',
                functionname: 'update'
            });
        } else {
            httpError({
                req, res,
                status: 500,
                message: 'Error while processing update Concept.' + e,
                value: [],
                filename: 'conceptController.ts',
                functionname: 'update'
            });
        }
    }
}
const bulk = async (req: Request, res: Response) => {
    try {
        const result = await createConcept(req.body);
        res.status(201).send({
            status: 201,
            msg: "ok",
            data: result,
        });
    } catch (e) {
        httpError({
            req, res,
            status: 500,
            message: 'Error while processing bulk create Concept.' + e,
            value: [],
            filename: 'conceptController.ts',
            functionname: 'bulk'
        });
    }
}

export { index, show, create, update, bulk };
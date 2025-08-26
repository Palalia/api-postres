import { Request, Response } from 'express';

interface IError {
    req: Request;
    res: Response;
    message: string;
    status: number;
    value: Array<any>;
    filename: string;
    functionname: string;
}

export { IError };
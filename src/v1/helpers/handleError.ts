import { IError } from "../interfaces/error";
import logger from "./logger";

const httpError = (errorObj: IError) => {
    const { req, res, status, message, value, filename, functionname } = errorObj;
    var auth = (req.headers.authorization as string);
    var username: string = "";
    if (auth) {
        var token = auth.split(" ").pop() || "";
        const base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        username = JSON.parse(atob(base64)).username
    }
    logger.error(message, {
        username: username,
        company: req.headers.company,
        httpStatus: status,
        method: req.method,
        host: req.headers.host,
        originalUrl: req.originalUrl,
        browser: req.headers["user-agent"],
        filename: filename,
        functionname: functionname,
        body: req.body,
        errors: value
    });

    res.status(status).send({
        "error": {
            "status": status,
            "message": message,
            "value": value
        }
    });
}

export { httpError }
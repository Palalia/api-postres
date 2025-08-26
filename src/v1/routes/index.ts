import { readdirSync } from "fs";
import express, { Router } from "express";
import path from "path";

const router: Router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (filename: string): string =>
    filename.split(".").shift() as string;

const loadRouters = async () => {
    const files = readdirSync(PATH_ROUTES);

    for (const file of files) {
        const name = removeExtension(file);

        if (name !== "index") {
            const routerModule = await import(path.join(PATH_ROUTES, file));

            if (routerModule.router) {
                router.use(`/${name}`, routerModule.router);
                console.log(`✅ Ruta cargada: /${name}`);
            } else {
                console.warn(`⚠️ El archivo ${file} no exporta un "router" válido`);
            }
        }
    }
};

// Ejecutar carga de rutas
loadRouters();

export default router;

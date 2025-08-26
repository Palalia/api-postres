import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./v1/routes";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json({ limit: "2mb" }));

// Configuración de CORS
app.use(
    cors({
        origin: "*", // puedes poner tu dominio en lugar de "*" si lo quieres restringir
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    })
);

// Rutas
app.use("/v1", routes);

// Servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

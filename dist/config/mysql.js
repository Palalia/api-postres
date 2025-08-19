"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.DATABASE_MYSQL || 'mysql', process.env.USER_MYSQL || 'root', process.env.PASSWORD_MYSQL, {
    host: process.env.SERVER_MYSQL,
    dialect: 'mysql',
    timezone: '-06:00',
    retry: {
        match: [/Deadlock/i],
        max: 3
    }
});
sequelize.authenticate().then(() => {
    console.log("conexion exitosa");
}).catch((err) => {
    console.log(err);
});
exports.default = sequelize;

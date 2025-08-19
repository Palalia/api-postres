"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("../config/mysql"));
const sequelize_1 = __importDefault(require("sequelize"));
const Product = mysql_1.default.define('dess_product', {
    id: {
        type: sequelize_1.default.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false
    },
    cost: {
        type: sequelize_1.default.DECIMAL(10, 2),
        allowNull: false
    },
    price: {
        type: sequelize_1.default.DECIMAL(10, 2),
        allowNull: false
    },
    description: {
        type: sequelize_1.default.STRING,
        allowNull: true
    },
    image: {
        type: sequelize_1.default.STRING,
        allowNull: true
    }
});
Product.sync({ alter: true });
exports.default = Product;

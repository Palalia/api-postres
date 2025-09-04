
import sequelize from "../config/mysql";
import DataTypes from "sequelize";
import { ConceptInterface } from "../interfaces/conceptInterface";
const Product = sequelize.define<ConceptInterface>('dess_concept', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('insumo', 'gasto_operativo'),
        allowNull: false
    },
    isInventory: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    baseUnity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    purchasingUnit: {
        type: DataTypes.STRING,
        allowNull: true
    },
    conversionUnit: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
});
Product.sync({ alter: true });
export default Product;
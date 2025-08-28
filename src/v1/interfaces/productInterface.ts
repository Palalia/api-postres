import { InferCreationAttributes, Model } from "sequelize";

interface ProductInterface extends Model<InferCreationAttributes<ProductInterface>> {
    id?: number;
    name: string;
    cost: number;
    price: number;
    description?: string;
    image?: string;
}
export { ProductInterface };
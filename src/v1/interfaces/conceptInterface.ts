import { InferCreationAttributes, Model } from "sequelize";

interface ConceptInterface extends Model<InferCreationAttributes<ConceptInterface>> {
    id: number;
    name: string;
    type: 'insumo' | 'gasto_operativo';
    isInventory: boolean;
    baseUnity: string;
    purchasingUnit: string | null;
    conversionUnit: number | null;
    image: string | null;
}
export { ConceptInterface };
import { ConceptInterface } from "../interfaces/conceptInterface";
import Concept from "../models/conceptModel";
const findAllConcepts = async () => {
    try {
        const result = await Concept.findAll();
        return result;
    } catch (e) {
        throw e;
    }
}
const findConceptById = async (id: string) => {
    try {
        const result = await Concept.findByPk(id);
        return result;
    } catch (e) {
        throw e;
    }
}
const createConcept = async (data: ConceptInterface) => {
    try {
        const result = await Concept.create(data);
        return result;
    } catch (e) {
        throw e;
    }
}
const updateConcept = async (id: string, data: Partial<ConceptInterface>) => {
    try {
        const concept = await Concept.findByPk(id);
        if (!concept) return null;
        const result = await concept.update(data);
        return result;
    } catch (e) {
        throw e;
    }
}

const bulkCreateConcepts = async (data: ConceptInterface[]) => {
    try {
        const result = await Concept.bulkCreate(data);
        return result;
    } catch (e) {
        throw e;
    }
}
export { findAllConcepts, findConceptById, createConcept, updateConcept, bulkCreateConcepts };
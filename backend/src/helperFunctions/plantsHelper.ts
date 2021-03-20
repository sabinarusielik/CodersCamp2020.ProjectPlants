import { ObjectId } from 'mongoose';
import Plants from '../models/Plants';

export async function getPlants() {
    const plants = await Plants.find();
    return plants;
}

export async function getPlantById(id: ObjectId) {
    const thePlant = await Plants.findOne({ plant_id: id });
    return thePlant;
}

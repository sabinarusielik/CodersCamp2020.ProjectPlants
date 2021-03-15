import { ObjectId, Schema, SchemaType } from "mongoose";
import Plants from "./models/Plants";

const plants = require ('././models/Plants');

export async function getPlants() {
    const plants = await Plants.find(); //to się łączy z modelem a w którym miejscu model jest połączony z bazą danych?
    return plants;
    //czyli te funkcje find znajdują nam w bazie danych a get post to dawanie odpowiedzi na strone
}

export async function getPlantById(id: ObjectId) {
    const thePlant = await Plants.findOne({ plant_id: id});
    return thePlant;
}

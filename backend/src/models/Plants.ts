import { SchemaTypes } from 'mongoose';

const mongoose = require('mongoose');

// enum SunExposure {
//     SHADED,
//     HALFSUNNY,
//     SUNNY,
// }

const plantsSchema = new mongoose.Schema({
    //species:
    plant_id: SchemaTypes.ObjectId,
    watering: {
        plannedWateringDate: Date,
        userWateringDate: Date,
    },
    profile: SchemaTypes.ObjectId,
    checkpoint: {
        brownTipsOfLeaves: Boolean,
        yellowing: Boolean,
        dryLeaves: Boolean,
        longSteamsWithoutLeaves: Boolean,
        drySoil: Boolean,
        wetSoil: Boolean,
        mold: Boolean,
        parasite: Boolean,
    },
    wateringInterval: Number,
    conditions: {
        // sunExposure: SunExposure,
        airHumidifier: Boolean,
        artificialLighining: Boolean,
        awayFromTheHeater: Boolean,
        awayFromDrafts: Boolean,
    },
});

export const Plants = mongoose.model('Plants', plantsSchema);

export default Plants;

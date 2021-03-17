import { SchemaTypes } from 'mongoose';
import Plants from '../models/Plants';


const mongoose = require('mongoose');

// enum SunExposure {
//     SHADED,
//     HALFSUNNY,
//     SUNNY,
// }
async function createPlants() {
    const plant1 = new Plants({
        watering: {
            plannedWateringDate: Date.now(),
            userWateringDate: Date.now(),
        },
        checkpoint: {
            brownTipsOfLeaves: false,
            yellowing: false,
            dryLeaves: true,
            longSteamsWithoutLeaves: true,
            drySoil: true,
            wetSoil: true,
            mold: true,
            parasite: false,
        },
        wateringInterval: Number,
        conditions: {
            // sunExposure: SunExposure.HALFSUNNY,
            airHumidifier: false,
            artificialLighining: false,
            awayFromTheHeater: true,
            awayFromDrafts: false,
        },
    });
    const result = await plant1.save();
}
createPlants();
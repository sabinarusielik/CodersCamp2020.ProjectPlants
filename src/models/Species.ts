const express = require('express');
const mongoose = require('mongoose');

// enum preferSunExposureType {
//     SHADED,
//     HALFSUNNY,
//     SUNNY,
// }
const speciesSchema = new mongoose.Schema({
    speciesName: String,
    preferSunExposure: String,
    soilHumidity: Number,
    minTemperature: Number,
    maxTemperature: Number,
    wateringFrequency: Number,
});

const Species = mongoose.model('Species', speciesSchema);

// export const intializeSpecies = () => {
//     createSpecies('kaktusy', 'SHADED', 20, 3, 50, 25);
//     createSpecies('storczyki', 'SUNNY', 25, 15, 30, 10);
//     createSpecies('paprocie', 'SUNNY', 40, 20, 30, 7);
// };

// async function createSpecies(
//     speciesName: string,
//     preferSunExposure: string,
//     soilHumidity: number,
//     minTemperature: number,
//     maxTemperature: number,
//     wateringFrequency: number,
// ) {
//     const species = new Species({
//         speciesName,
//         preferSunExposure,
//         soilHumidity,
//         minTemperature,
//         maxTemperature,
//         wateringFrequency,
//     });
//     await species.save();
// }


module.exports = Species;




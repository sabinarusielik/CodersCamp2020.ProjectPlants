const Species = require('.././models/Species');
const mongoose = require('mongoose');

export const intializeSpecies = () => {
    createSpecies('kaktusy', 'SHADED', 20, 3, 50, 25);
    createSpecies('storczyki', 'SUNNY', 25, 15, 30, 10);
    createSpecies('paprocie', 'SUNNY', 40, 20, 30, 7);
    createSpecies('ziola', 'HALFSUNNY', 50, 8, 40, 5);
};

async function createSpecies(
    speciesName: string,
    preferSunExposure: string,
    soilHumidity: number,
    minTemperature: number,
    maxTemperature: number,
    wateringFrequency: number,
) {
    const species = new Species({
        id: new mongoose.Types.ObjectId(),
        speciesName,
        preferSunExposure,
        soilHumidity,
        minTemperature,
        maxTemperature,
        wateringFrequency,
    });
    await species.save();
}

import * as mongoose from 'mongoose';

const speciesSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    speciesName: String,
    preferSunExposure: String,
    soilHumidity: Number,
    minTemperature: Number,
    maxTemperature: Number,
    wateringFrequency: Number,
});

const Species = mongoose.model('Species', speciesSchema);

module.exports = Species;

import * as mongoose from 'mongoose';

const statsSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    plantsName: String,
    current_streak: Number,
    streak_target: Number,
    max_streak: Number,
    percent_success: Number,
    average_month: Number,
});

const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;

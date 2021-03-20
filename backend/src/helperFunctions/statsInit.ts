const Stats = require('../models/Stats');

export async function createStats(
    plantsName: String,
    current_streak: Number,
    streak_target: Number,
    max_streak: Number,
    percent_success: Number,
    average_month: Number,
) {
    const stats = new Stats({
        plantsName,
        current_streak,
        streak_target,
        max_streak,
        percent_success,
        average_month,
    });
    await stats.save();
}

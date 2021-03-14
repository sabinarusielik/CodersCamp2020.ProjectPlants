const Stats = require('.././models/Stats')

export async function getStats() {
    const stats = await Stats.find();
    return stats;
}

export async function getStatsForOnePlant(name: string) {
    const statsForOnePlant = await Stats.findOne({plantsName: name})
    return statsForOnePlant;
}
const express = require('express');
const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
    plantsName: String,
    current_streak: Number,
    streak_target: Number,
    max_streak: Number,
    percent_success: Number,
    average_month: Number
});

const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;
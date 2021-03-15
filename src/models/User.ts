const express = require('express');
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
//  profile: ObjectId
})

const User = mongoose.model('User', userSchema);

module.exports = User;
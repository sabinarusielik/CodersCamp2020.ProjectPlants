import express from 'express';
import 'dotenv/config';

const app = express();
const mongoose = require('mongoose');

const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_PATH,
} = process.env;

app.listen(3000);
mongoose.connect('mongodb+srv://'+process.env.MONGO_USER+':'+process.env.MONGO_PASSWORD+process.env.MONGO_PATH, {useNewUrlParser: true, useUnifiedTopology: true},
(err: string) => {
if (err)
console.log(err);
else
console.log("Connected to the mongoDB");
});
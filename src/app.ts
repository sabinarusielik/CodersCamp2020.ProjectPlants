import express from 'express';
const species = require('./routes/api/species');

import connectDatabase from '../config/database';

import statsRouter from './routes/api/stats'

require('dotenv').config();
const app = express();

// Connect to MongoDB
connectDatabase();

// Express configuration
app.set('port', process.env.PORT || 8080);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/stats', statsRouter)

app.use('/api/species', species)

app.get('/', (_req, res) => {
    console.log('I am alive');
    res.send('API Running');
});

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8080;
app.listen(+port, host, () => console.log(`[Server] Listening on http://${host}:${port}`));

export default app;


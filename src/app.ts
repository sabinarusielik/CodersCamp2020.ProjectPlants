require('dotenv').config();

import express from 'express';
import connectDatabase from '../config/database';

import userRoutes from './routes/api/userRoutes';
import profileRoutes from './routes/api/profileRoutes';
import speciesRoutes from './routes/api/speciesRoutes';
import plantsRoutes from './routes/api/plantsRoutes';
import statsRouter from './routes/api/statsRoutes';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../docs/swagger.json';

const app = express();

// Connect to MongoDB
connectDatabase();

// Express configuration
app.set('port', process.env.PORT || 8080);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user', userRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/plants', plantsRoutes);
app.use('/api/species', speciesRoutes);
app.use('/api/stats', statsRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (_req, res) => {
    console.log('I am alive');
    res.send('API Running');
});

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8080;
app.listen(+port, host, () => console.log(`[Server] Listening on http://${host}:${port}`));

export default app;

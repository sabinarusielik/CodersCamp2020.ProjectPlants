import express from 'express';
const userRoutes = require('./routes/api/user');

import connectDatabase from '../config/database';

import statsRouter from './routes/api/stats';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'Library API',
//             version: '1.0.0',
//             description: 'Express Library API',
//         },
//         servers: [
//             {
//                 url: 'http://localhost:4000',
//             },
//         ],
//     },
//     apis: ['./src/routes/*.js'],
// };

// const specs = swaggerJSDoc(options);

require('dotenv').config();
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connect to MongoDB
connectDatabase();

// Express configuration
app.set('port', process.env.PORT || 8080);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/stats', statsRouter);

app.use('/api/user', userRoutes)

app.get('/', (_req, res) => {
    console.log('I am alive');
    res.send('API Running');
});

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8080;
app.listen(+port, host, () => console.log(`[Server] Listening on http://${host}:${port}`));

export default app;

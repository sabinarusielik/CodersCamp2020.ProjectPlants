const express = require('express');
import { Request, Response } from 'express';
import { getUser, getUserByName } from '../../helperFunctions/userHelper';
import { createUser } from '../../helperFunctions/userInitializer';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const user = await getUser();
    res.status(200).send(user);
});

router.get('/:name', async (req: Request, res: Response) => {
    const name = req.params.name;
    const oneUser = await getUserByName(name);
    if (!oneUser) res.status(404).send('User not found');
    res.status(200).send(oneUser);
});

router.post('/', async (req: Request, res: Response) => {
    const data = req.body;
    if (Object.keys(data).length === 0) {
        res.status(400).json({
            error: 'Body cannot be empty',
        });
    } else {
        createUser(data.username, data.password, data.email);
        res.status(200).end();
    }
});

export default router;

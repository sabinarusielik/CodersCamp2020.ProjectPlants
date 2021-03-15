const express = require('express');
import { Request, Response, Router } from 'express';
import { getUser, getUserByName } from '../../helperFunctions/userHelper';
import { initializeUser } from '../../helperFunctions/userInitializer'

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const user = await getUser();
    res.status(200).send(user);
});

router.get('/:name', async (req: Request, res: Response) => {
    const name = req.params.name;
    const oneUser = await getUserByName(name);
    if (!oneUser) res.status(404).send('User not found')
    res.status(200).send(oneUser);
});

router.post('/signup', async (req: Request, res: Response) => {
    initializeUser();
    res.status(200).end();
});

module.exports = router;
const express = require('express');
import { Request, Response, Router } from 'express';
import { getProfile } from '../../helperFunctions/profileHelper';
import { initializeProfile } from '../../helperFunctions/profileInitializer';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const profile = await getProfile();
    res.status(200).send(profile);
});

router.post('/', async (req: Request, res: Response) => {
    initializeProfile();
    res.status(200).end();
});

module.exports = router;

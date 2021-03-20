const express = require('express');
import { Request, Response, Router } from 'express';
import { getProfile } from '../../helperFunctions/profileHelper';
import { createProfile } from '../../helperFunctions/profileInitializer';
const Profile = require('../../models/Profile');

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const profile = await getProfile();
    res.status(200).send(profile);
});

router.post('/', async (req: Request, res: Response) => {
    const data = req.body;
    createProfile(
        // data.user,
        // data.household,
        // data.plants,
        data.age,
        data.avatar,
    );
    res.status(200).send('Profile was added').end();
});

export default router;

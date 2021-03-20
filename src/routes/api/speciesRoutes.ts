const express = require('express');
import { Request, Response } from 'express';
import { getSpecies, getSpeciesByName } from '../../helperFunctions/speciesHelper';
import { intializeSpecies } from '../../helperFunctions/speciesInitializer';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const species = await getSpecies();
    if (species.length) {
        res.status(200).send(species);
    } else {
        res.status(404).json({ error: 'There is no species to display' });
    }
});

router.get('/:name', async (req: Request, res: Response) => {
    const name = req.params.name;
    const oneSpecies = await getSpeciesByName(name);
    if (oneSpecies) {
        res.status(200).send(oneSpecies);
    } else {
        res.status(404).json({ error: `There is no species with name: '${name}'.` });
    }
});

router.post('/', async (req: Request, res: Response) => {
    intializeSpecies();
    res.status(200).send('Species were added').end();
});

export default router;

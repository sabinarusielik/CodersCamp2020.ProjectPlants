const express = require('express');
import { Request, Response, Router } from 'express';
import { getSpecies, getSpeciesByName } from '../../helperFunctions/speciesHelper';
import { intializeSpecies } from '../../helperFunctions/speciesInitializer';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const species = await getSpecies();
    res.status(200).send(species);
});

router.get('/:name', async (req: Request, res: Response) => {
    const name = req.params.name;
    const oneSpecies = await getSpeciesByName(name);
    res.status(200).send(oneSpecies);
});

router.post('/', async (req: Request, res: Response) => {
    intializeSpecies();
    res.status(200).end();
});



module.exports = router;

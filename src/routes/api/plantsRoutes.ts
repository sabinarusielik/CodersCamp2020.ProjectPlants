
import {Plants} from "../../models/Plants";
import { Request, Response, Router } from 'express';
const Joi = require('joi');

import {getPlants} from '../../plantsHelper'
const mongoose = require('mongoose');
const router: Router = Router();

router.get('/', (req: Request, res: Response) => { 
    const plants = getPlants();
    res.status(200).send(plants);
});

router.post('/', async (req: Request, res: Response) => {
    const schema = {
        wateringInterval: Joi.Number().required(),
        species: Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body,schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    let plant = new Plants() {
        name: req.body.name,
        species: req.body.species,
        wateringInterval: req.body.wateringInterval
    }
    plant = await plant.save();
});

router.put('/:id', async (req: Request, res: Response) =>{
    const schema = {
        wateringInterval: Joi.Number().required(),
        species: Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body,schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const plant = Plants.findByIdAndUpdate(req.params.id, {wateringInterval: req.body.wateringInterval}, {new:true});

    if (!plant) return res.status(404).send('The plant with the given ID does not exist');

    res.send(plant);

} )

module.exports = router;





import { Request, Response, Router } from 'express';
import { getStats, getStatsForOnePlant } from '../../helperFunctions/statsGet';
import { createStats } from '../../helperFunctions/statsInit';
const Stats = require('../../models/Stats');

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const stats = await getStats();
    res.status(200).send(stats);
});

router.get('/:name', async (req: Request, res: Response) => {
    const name = req.params.name;
    const statsForOnePlant = await getStatsForOnePlant(name);
    if (!statsForOnePlant) {
        return res.status(404).send('Not found, lol');
    }
    return res.status(200).send(statsForOnePlant);
});

router.post('/', async (req: Request, res: Response) => {
    const data = req.body;
    if (Object.keys(data).length === 0) {
        res.status(400).json({
            error: "Body can't be empty",
        });
    } else {
        createStats(
            data.plantsName,
            data.current_streak,
            data.streak_target,
            data.max_streak,
            data.percent_success,
            data.average_month,
        );
        res.status(200).end();
    }
});

router.put('/:name', async (req: Request, res: Response) => {
    const name = req.params.name;
    const data = req.body;
    Stats.findOneAndUpdate(
        { plantsName: name },
        {
            $set: {
                plantsName: data.plantsName,
                current_streak: data.current_streak,
                streak_target: data.streak_target,
                max_streak: data.max_streak,
                percent_success: data.percent_success,
                average_month: data.average_month,
            },
        },
        { new: true },
        (err: Error, msg: string) => {
            if (err) {
                console.log('Yo, error');
            } else {
                console.log(msg);
            }
        },
    );
    res.status(200).send('Updated');
});

router.delete('/:id', async (req: Request, res: Response) => {
    const plant = await Stats.findByIdAndRemove(req.params.id);
    if (plant) {
        return res.status(204).send('Deleted');
    } else {
        return res.status(404).json({
            error: `Cannot find a plant with id: ${req.params.id}`,
        });
    }
});

export default router;

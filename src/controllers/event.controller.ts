import { Request, Response } from 'express';
import Event from '../models/Event';

export const getEventsByCategory = async (req: Request, res: Response) => {
    try {
        const category = req.query.category;
        const eventResults = await Event.find({'category': category});

        //console.log(eventResults);
        res.setHeader('Content-Type','application/json')
        return res.status(200).json({'events': eventResults});
    } catch  {

        console.log('Error finding events. ./controllers/event.controller.ts');
        return res.status(503);

    }
}

export const createEvent = async (req: Request, res: Response) => {
    try {
        const {
            id,
            title,
            eventState,
            category,
            type,
            ticketPrice,
            eventPlace,
        } = req.body;

        const event = new Event({
            id,
            title,
            eventState,
            category,
            type,
            ticketPrice,
            eventPlace,
        })
        await event.save();
        return res.status(200)
    } catch {
        return res.status(500)
    }
}
import { Request, Response } from 'express';
import Configuration from '../models/Configuration';


export const getKey = async (req: Request, res: Response) => {
    try {
        const key = await Configuration.find({})
    } catch  {

    }
}

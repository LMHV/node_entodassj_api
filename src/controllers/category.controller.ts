import { Request, Response } from 'express';
import Category from '../models/Category';

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categoryResults = await Category.find();

        //console.log(categoryResults);
        res.setHeader('Content-Type','application/json')
        return categoryResults.length != 0 ? res.status(200).json({'categories': categoryResults}) : res.status(404);
    } catch  {

        console.log('Error finding categories. ./controllers/category.controller.ts');
        return 503

    }
}

export const createCategory = async (req: Request, res: Response) => {
    try {
        const {id, name, urlImage} = req.body;
        const category = new Category({
            id,
            name,
            urlImage,
        })
        await category.save();
        return 200
    } catch {
        return 500
    }
}


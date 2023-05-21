import { Request, Response } from 'express';
import User from '../models/User';
import * as jwt from 'jsonwebtoken';
import { Error } from 'mongoose';

const SECRET_KEY = '94d0fbe3eae57bc3415e5011835e0e405942255f273ec88fb50b36d859e37e1c'

export const findUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const existUser = await User.findOne({ email: user.email, password: user.password });
        
        if (!existUser) { //Check if exists
            return res.status(403).json({status: 'Usuario incorrecto. Intente otra vez...'});
        }
        return res.status(200).json({ status: 'Exitoso'});

    } catch { // ERROR
        console.log('Error finding user. ./controllers/user.controller.ts');
        return res.status(500).json({ error: 'Error finding user.' });
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const existUser = await User.findOne({ email: user.email, password: user.password });
        
        if (!existUser) { //Check if exists
            return res.status(403).json({status: 'Usuario incorrecto. Intente otra vez...'});
        }
        
        const token = jwt.sign({user: user}, SECRET_KEY, {expiresIn: '15d'});
        //console.log(token);
        return res.status(200).json({ status: 'Exitoso', user: user.email, token: token});


    } catch { // ERROR
        console.log('Error login user. ./controllers/user.controller.ts');
        return res.status(500).json({ error: 'Error login user.' });
    }
}

export const authUser = async(req: Request, res: Response) => {
    try {
        const token = req.body.token;
        if(!token) {
            return res.status(500).json({error: 'Missing token'});
        }
        const decode = jwt.verify(token, SECRET_KEY);

    } catch {

    }
}

export const createUser = async (req: Request , res: Response) => {
    try{
        //console.log(req.body)
        const {name, surname, email, password} = req.body;
        const user = new User({
            name,
            surname,
            email,
            password,
        })

        const existUser = await User.findOne({email: req.body.email})
        if(existUser){
            console.log('Email already exists. ./controllers/user.controller.ts');
            return res.status(403).json({msg: 'Usuario existente.'});
        }

        await user.save();
        return res.status(200).json({msg: 'Usuario creado exitosamente.'});

    }catch (e) {
        console.log('Error creating user. ./controllers/user.controller.ts');
        if(e instanceof Error){
            console.log(e.message);
        }
        return res.status(500).json({msg : 'Error creating user.'})
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ status: 'Usuario eliminado' })
    } catch{
        console.log('Error deleting user. ./controllers/user.controller.ts');
        return res.status(500).json({ error: 'Error deleting user.' })
    }
}
import { Request, Response } from 'express';
import User from '../models/User';
import * as jwt from 'jsonwebtoken';
import moment from 'moment';

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

export const authenticateUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const existUser = await User.findOne({ email: user.email, password: user.password });
        
        if (!existUser) { //Check if exists
            return res.status(403).json({msg: 'Usuario incorrecto. Intente otra vez...'});
        }
        
        const payload = {
            'email': user.email,
        };
        
        const token = jwt.sign({user: payload}, process.env.SECRET_KEY! , {expiresIn: '15d'});
        console.log(token);        
        return res.status(200).json({ msg: 'Login Exitoso', user: user.email, token: token});


    } catch { // ERROR
        console.log('Error login user. ./controllers/user.controller.ts');
        return res.status(500).json({ msg: 'Error login user.' });
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

    }catch (e: any) {
        console.log('Error creating user. ./controllers/user.controller.ts');
        if(e instanceof Error){
            console.log(e.message);
        }
        return res.status(500).json({msg: e.message})
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ status: 'Usuario eliminado' })
    } catch {
        console.log('Error deleting user. ./controllers/user.controller.ts');
        return res.status(500).json({ error: 'Error deleting user.' })
    }
}


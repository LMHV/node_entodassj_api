import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

// Middleware function to verify the JWT token
export const verifyToken = async (req: Request, res: Response, next: any) => {
    try {
        // Extract the token from the Authorization header
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            // If token is missing, return an error response
            return res.status(500).json({ error: 'Missing token' });
        }
                
        // Verify the token using the provided secret key
        const decoded = jwt.verify(token, process.env.SECRET_KEY!, { ignoreExpiration: false }, function(err: any, decoded: any) {
            if (err) {
                console.log(err);
                return res.status(401).json({ err });
            }
        });
    
        // If token is valid, call the next middleware or route handler
        next();
    } catch (e: any) {
        // Handle any exceptions that occur during token verification
        console.log(e.message);
        return res.status(500).json({ error: e.message });
    }
}
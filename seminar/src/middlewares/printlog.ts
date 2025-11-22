import {Request, Response, NextFunction} from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
    const time = new Date()
    console.log(`Method: ${req.method}, Path: ${req.path}, Time: ${time.toISOString}`);
    next();
}
import User from '../models/user.model.js'
import bycryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js'

export const signup = async (req, res, next) =>{
    const { fullname, username, email, password } = req.body;
    const hashedPassword = bycryptjs.hashSync(password, 10);
    const newUser = new User({fullname, username, email, password: hashedPassword});

    try{
        await newUser.save();
        res.status(201).json("User created successfully !!!");
    }
    catch(error){
        next(error);
    }
}
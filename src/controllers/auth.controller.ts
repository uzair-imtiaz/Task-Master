import { Request, Response } from 'express';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const register = async (req: Request, res: Response) => {
  const { name, email, passowrd, username } = req.body;
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
};

const login = async (req: Request, res: Response) => {};

export { register, login };

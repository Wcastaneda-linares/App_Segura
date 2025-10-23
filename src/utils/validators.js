import { body } from 'express-validator';

export const loginSchema = [
  body('email').isEmail().normalizeEmail(),
  body('password').isString().isLength({ min: 8 }).trim()
];

export const signupSchema = [
  body('name').isString().isLength({ min: 2 }).trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('password').isStrongPassword({ minLength: 8 })
];

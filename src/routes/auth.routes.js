import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import { loginSchema, signupSchema } from '../utils/validators.js';

export const router = Router();

const users = new Map(); // email -> { name, email, passHash, role }

router.post('/signup', signupSchema, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, email, password } = req.body;
  if (users.has(email)) return res.status(409).json({ error: 'Usuario ya existe' });

  const passHash = await bcrypt.hash(password, 12);
  users.set(email, { name, email, passHash, role: 'user' });
  return res.status(201).json({ message: 'Registrado correctamente' });
});

router.post('/login', loginSchema, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { email, password } = req.body;
  const user = users.get(email);
  if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });

  const valid = await bcrypt.compare(password, user.passHash);
  if (!valid) return res.status(401).json({ error: 'Credenciales inválidas' });

  const token = jwt.sign({ sub: email, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES || '15m' });
  return res.json({ token });
});

import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { requireRole } from '../middleware/roles.js';

export const router = Router();

router.get('/me', requireAuth, (req, res) => {
  res.json({ user: { email: req.user.sub, role: req.user.role } });
});

router.get('/admin', requireAuth, requireRole('admin'), (_req, res) => {
  res.json({ secret: 'Solo para admins' });
});

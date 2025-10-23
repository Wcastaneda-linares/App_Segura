import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { router as authRouter } from './routes/auth.routes.js';
import { router as usersRouter } from './routes/users.routes.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost' }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json());
app.use(morgan('combined'));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);


app.use((err, _req, res) => {
  const code = err.status || 500;
  res.status(code).json({ error: err.message || 'Error interno' });
});


export default app;

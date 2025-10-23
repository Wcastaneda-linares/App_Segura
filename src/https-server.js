import fs from 'fs';
import https from 'https';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

const options = {
  key: fs.readFileSync('./certs/key.pem'),
  cert: fs.readFileSync('./certs/cert.pem')
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`Servidor HTTPS activo en https://localhost:${PORT}`);
});

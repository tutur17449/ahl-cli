import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const PORT = process.env.PORT || 1234;
const server = express();

server.get('/', (_req, res) => {
  res.send('Hello world');
});

server.listen(PORT, () => {
  console.log(`Server start on http://localhost:${PORT}`);
});

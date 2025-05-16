import express, { Request, Response } from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

export const handler = serverless(app);

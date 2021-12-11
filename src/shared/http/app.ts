import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes'
import AppError from '../errors/AppError';
import '../db/db';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());

// Middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if(error instanceof AppError){
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});

export default app;
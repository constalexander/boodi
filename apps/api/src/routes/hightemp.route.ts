import express from 'express';
import { ask } from '../controllers/hightemp.controller.js';
import limiter from '../middlewares/rate-limiter.middleware.js';
import catchErrors from '../middlewares/catch-errors.middleware.js';
import { tinyws } from '../middlewares/tinyws.middleware.js';

const hightempRouter = express.Router();

hightempRouter.get('/', limiter, tinyws(), catchErrors(ask));

export default hightempRouter;

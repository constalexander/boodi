import express from 'express';
import { ask } from '../controllers/reflection.controller.js';
import limiter from '../middlewares/rate-limiter.middleware.js';
import catchErrors from '../middlewares/catch-errors.middleware.js';
import { tinyws } from '../middlewares/tinyws.middleware.js';

const reflectionRouter = express.Router();

reflectionRouter.get('/', limiter, tinyws(), catchErrors(ask));

export default reflectionRouter;

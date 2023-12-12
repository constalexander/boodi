import express from 'express';
import { ask, quote } from '../controllers/zero-shot-wisdom.controller.js';
import limiter from '../middlewares/rate-limiter.middleware.js';
import catchErrors from '../middlewares/catch-errors.middleware.js';
import { tinyws } from '../middlewares/tinyws.middleware.js';

const zeroShotWisdomRouter = express.Router();

zeroShotWisdomRouter.get('/', limiter, tinyws(), catchErrors(ask));

zeroShotWisdomRouter.get('/quote', limiter, tinyws(), catchErrors(quote));

export default zeroShotWisdomRouter;

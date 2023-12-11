import express from "express";
import { ask } from "../controllers/zero-shot-wisdom-quotes.controller.js";
import limiter from "../middlewares/rate-limiter.middleware.js";
import catchErrors from "../middlewares/catch-errors.middleware.js";
import { tinyws } from "../middlewares/tinyws.middleware.js";

const zeroShotWisdomQuotesRouter = express.Router();

zeroShotWisdomQuotesRouter.use("/", limiter, tinyws(), catchErrors(ask));

export default zeroShotWisdomQuotesRouter;

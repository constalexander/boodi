import express from "express";
import { ask } from "../controllers/zero-shot-wisdom.controller.js";
import limiter from "../middlewares/rate-limiter.middleware.js";
import catchErrors from "../middlewares/catch-errors.middleware.js";
import { tinyws } from "../middlewares/tinyws.middleware.js";

const zeroShotWisdomRouter = express.Router();

zeroShotWisdomRouter.use("/", limiter, tinyws(), catchErrors(ask));

export default zeroShotWisdomRouter;

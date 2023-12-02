import express from "express";
import limiter from "../middlewares/rate-limiter.middleware.js";
import { ask } from "../controllers/zero-shot-wisdom.controller.js";
import catchErrors from "../middlewares/catch-errors.middleware.js";

const zeroShotWisdomRouter = express.Router();

zeroShotWisdomRouter.use("/", limiter, catchErrors(ask));

export default zeroShotWisdomRouter;

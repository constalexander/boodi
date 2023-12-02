import express from "express";
import limiter from "../middlewares/rate-limiter.middleware.js";
import catchErrors from "../middlewares/catch-errors.middleware.js";
import { tinyws } from "../middlewares/tinyws.middleware.js";
import { askFull } from "../controllers/eightfold-path.controller.js";

const eightfoldPathRouter = express.Router();

eightfoldPathRouter.use("/full", limiter, tinyws(), catchErrors(askFull));

export default eightfoldPathRouter;

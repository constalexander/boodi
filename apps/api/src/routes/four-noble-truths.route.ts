import express from "express";
import limiter from "../middlewares/rate-limiter.middleware.js";
import catchErrors from "../middlewares/catch-errors.middleware.js";
import { tinyws } from "../middlewares/tinyws.middleware.js";
import { ask } from "../controllers/four-noble-truths.controller.js";

const fourNobleTruthsRouter = express.Router();

fourNobleTruthsRouter.use("/", limiter, tinyws(), catchErrors(ask));

export default fourNobleTruthsRouter;

import express from "express";
import limiter from "../middlewares/rate-limiter.middleware.js";
import { ask } from "../controllers/four-noble-truths.controller.js";
import catchErrors from "../middlewares/catch-errors.middleware.js";

const fourNobleTruthsRouter = express.Router();

fourNobleTruthsRouter.use("/", catchErrors(ask));

export default fourNobleTruthsRouter;

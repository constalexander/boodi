import express from "express";
import { experiment1 } from "../controllers/experiment.controller.js";
import limiter from "../middlewares/rate-limiter.middleware.js";

const experimentRouter = express.Router();

experimentRouter.get("/1", limiter, experiment1);

export default experimentRouter;

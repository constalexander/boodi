import express from "express";
import limiter from "../middlewares/rate-limiter.middleware.js";
import { experiment1 } from "../controllers/experiment.controller.js";

const experimentRouter = express.Router();

experimentRouter.get("/1", limiter, experiment1);

export default experimentRouter;

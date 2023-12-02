import express from "express";
import limiter from "../middlewares/rate-limiter.middleware.js";
import { check } from "../controllers/health-check.controller.js";

const healthCheckRouter = express.Router();

healthCheckRouter.get("/", limiter, check);

export default healthCheckRouter;

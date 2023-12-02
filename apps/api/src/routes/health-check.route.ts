import express from "express";
import { check } from "../controllers/health-check.controller.js";
import limiter from "../middlewares/rate-limiter.middleware.js";

const healthCheckRouter = express.Router();

healthCheckRouter.get("/", limiter, check);

export default healthCheckRouter;

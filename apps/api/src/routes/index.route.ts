import express from "express";
import limiter from "../middlewares/rate-limiter.middleware.js";
import { indexController } from "../controllers/index.controller.js";

const indexRouter = express.Router();

indexRouter.get("/", limiter, indexController);

export default indexRouter;

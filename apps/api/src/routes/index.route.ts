import express from "express";
import { indexController } from "../controllers/index.controller.js";
import limiter from "../middlewares/rate-limiter.middleware.js";

const indexRouter = express.Router();

indexRouter.get("/", limiter, indexController);

export default indexRouter;

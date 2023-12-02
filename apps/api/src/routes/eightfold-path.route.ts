import express from "express";
import limiter from "../middlewares/rate-limiter.middleware.js";
import { askFull } from "../controllers/eightfold-path.controller.js";
import catchErrors from "../middlewares/catch-errors.middleware.js";

const eightfoldPathRouter = express.Router();

eightfoldPathRouter.use("/full", catchErrors(askFull));

export default eightfoldPathRouter;

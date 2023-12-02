import express from "express";
import limiter from "../middlewares/rate-limiter.middleware.js";
import { tts } from "../controllers/tts.controller.js";
import catchErrors from "../middlewares/catch-errors.middleware.js";

const ttsRouter = express.Router();

ttsRouter.get("/", limiter, catchErrors(tts));

export default ttsRouter;

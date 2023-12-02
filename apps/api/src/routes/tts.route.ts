import express from "express";
import { tts } from "../controllers/tts.controller.js";
import limiter from "../middlewares/rate-limiter.middleware.js";
import catchErrors from "../middlewares/catch-errors.middleware.js";
import { tinyws } from "../middlewares/tinyws.middleware.js";

const ttsRouter = express.Router();

ttsRouter.get("/", limiter, catchErrors(tts));
ttsRouter.get("/ws", limiter, tinyws(), catchErrors(tts));

export default ttsRouter;

import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';
import config from './configs/app.config.js';
import indexRouter from './routes/index.route.js';
import eightfoldPathRouter from './routes/eightfold-path.route.js';
import healthCheckRouter from './routes/health-check.route.js';
import fourNobleTruthsRouter from './routes/four-noble-truths.route.js';
import zeroShotWisdomRouter from './routes/zero-shot-wisdom.route.js';
import reflectionRouter from './routes/reflection.route.js';
import ttsRouter from './routes/tts.route.js';
import experimentRouter from './routes/experiment.route.js';
import globalErrorHandler from './middlewares/global-error-handler.middleware.js';
import { tinyws } from './middlewares/tinyws.middleware.js';
import { loadPromptsIntoConfig } from './services/supabase.service.js';

const app = express();

app.set('trust proxy', 'loopback');
app.use(
  cors({
    origin: config.app.allowedOrigins,
    methods: ['GET', 'POST'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);
app.use(express.json());

app.get('/', indexRouter);
app.use('/eightfold-path', eightfoldPathRouter);
app.use('/experiment', experimentRouter);
app.use('/four-noble-truths', fourNobleTruthsRouter);
app.use('/health-check', healthCheckRouter);
app.use('/reflection', reflectionRouter);
app.use('/tts', ttsRouter);
app.use('/zero-shot-wisdom', zeroShotWisdomRouter);
app.all('*', (req: Request, res: Response) => {
  res.sendStatus(404);
});

app.use(globalErrorHandler);

const startServer = async () => {
  try {
    await loadPromptsIntoConfig();

    app.use(tinyws());
    const port = config.app.port;
    app.listen(port, () => {
      console.log(`⚡️ [server]: Server is listening on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

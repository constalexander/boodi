import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';
//import { tinyws } from 'tinyws';
import ws from 'ws';
import config from './configs/app.config.js';
import indexRouter from './routes/index.route.js';
import healthCheckRouter from './routes/health-check.route.js';
import fourNobleTruthsRouter from './routes/four-noble-truths.route.js';
import eightfoldPathRouter from './routes/eightfold-path.route.js';
import zeroShotWisdomRouter from './routes/zero-shot-wisdom.route.js';
import ttsRouter from './routes/tts.route.js';
import experimentRouter from './routes/experiment.route.js';
import globalErrorHandler from './middlewares/global-error-handler.middleware.js';
import { loadPromptsIntoConfig } from './services/supabase.service.js';

const tinywsPromise = import('tinyws');
tinywsPromise.then((module) => {
  // You have now access to 'tinyws' after it's imported
  const { tinyws } = module;

  // Use 'tinyws' here
  app.use(tinyws());
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    export interface Request {
      ws: () => Promise<ws>;
    }
  }
}

const app = express();

app.set('trust proxy', 'loopback');
//app.use(tinyws());
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

app.use('/health-check', healthCheckRouter);

app.use('/four-noble-truths', fourNobleTruthsRouter);

app.use('/eightfold-path', eightfoldPathRouter);

app.use('/zero-shot-wisdom', zeroShotWisdomRouter);

app.use('/tts', ttsRouter);

app.use('/experiment', experimentRouter);

app.all('*', (req: Request, res: Response) => {
  res.sendStatus(404);
});

app.use(globalErrorHandler);

const startServer = async () => {
  try {
    await loadPromptsIntoConfig();
    const port = config.app.port;
    app.listen(port, () => {
      console.log(`⚡️ [server]: Server is listening on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

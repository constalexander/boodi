"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_express = __toESM(require("express"));
var import_cors = __toESM(require("cors"));
var import_app_config = __toESM(require("./configs/app.config.js"));
var import_index_route = __toESM(require("./routes/index.route.js"));
var import_health_check_route = __toESM(require("./routes/health-check.route.js"));
var import_four_noble_truths_route = __toESM(require("./routes/four-noble-truths.route.js"));
var import_eightfold_path_route = __toESM(require("./routes/eightfold-path.route.js"));
var import_zero_shot_wisdom_route = __toESM(require("./routes/zero-shot-wisdom.route.js"));
var import_tts_route = __toESM(require("./routes/tts.route.js"));
var import_experiment_route = __toESM(require("./routes/experiment.route.js"));
var import_global_error_handler_middleware = __toESM(require("./middlewares/global-error-handler.middleware.js"));
var import_tinyws_middleware = require("./middlewares/tinyws.middleware.js");
var import_supabase_service = require("./services/supabase.service.js");
var import_zero_shot_wisdom_quotes_route = __toESM(require("./routes/zero-shot-wisdom-quotes.route.js"));
const app = (0, import_express.default)();
app.set("trust proxy", "loopback");
app.use(
  (0, import_cors.default)({
    origin: import_app_config.default.app.allowedOrigins,
    methods: ["GET", "POST"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
  })
);
app.use(import_express.default.json());
app.get("/", import_index_route.default);
app.use("/health-check", import_health_check_route.default);
app.use("/four-noble-truths", import_four_noble_truths_route.default);
app.use("/eightfold-path", import_eightfold_path_route.default);
app.use("/zero-shot-wisdom", import_zero_shot_wisdom_route.default);
app.use("/zero-shot-wisdom-quotes", import_zero_shot_wisdom_quotes_route.default);
app.use("/tts", import_tts_route.default);
app.use("/experiment", import_experiment_route.default);
app.all("*", (req, res) => {
  res.sendStatus(404);
});
app.use(import_global_error_handler_middleware.default);
const startServer = async () => {
  try {
    await (0, import_supabase_service.loadPromptsIntoConfig)();
    app.use((0, import_tinyws_middleware.tinyws)());
    const port = import_app_config.default.app.port;
    app.listen(port, () => {
      console.log(`\u26A1\uFE0F [server]: Server is listening on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
//# sourceMappingURL=main.js.map

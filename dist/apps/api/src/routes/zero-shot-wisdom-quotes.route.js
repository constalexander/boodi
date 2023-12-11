"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var zero_shot_wisdom_quotes_route_exports = {};
__export(zero_shot_wisdom_quotes_route_exports, {
  default: () => zero_shot_wisdom_quotes_route_default
});
module.exports = __toCommonJS(zero_shot_wisdom_quotes_route_exports);
var import_express = __toESM(require("express"));
var import_zero_shot_wisdom_quotes_controller = require("../controllers/zero-shot-wisdom-quotes.controller.js");
var import_rate_limiter_middleware = __toESM(require("../middlewares/rate-limiter.middleware.js"));
var import_catch_errors_middleware = __toESM(require("../middlewares/catch-errors.middleware.js"));
var import_tinyws_middleware = require("../middlewares/tinyws.middleware.js");
const zeroShotWisdomQuotesRouter = import_express.default.Router();
zeroShotWisdomQuotesRouter.use("/", import_rate_limiter_middleware.default, (0, import_tinyws_middleware.tinyws)(), (0, import_catch_errors_middleware.default)(import_zero_shot_wisdom_quotes_controller.ask));
var zero_shot_wisdom_quotes_route_default = zeroShotWisdomQuotesRouter;
//# sourceMappingURL=zero-shot-wisdom-quotes.route.js.map

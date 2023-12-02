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
var eightfold_path_route_exports = {};
__export(eightfold_path_route_exports, {
  default: () => eightfold_path_route_default
});
module.exports = __toCommonJS(eightfold_path_route_exports);
var import_express = __toESM(require("express"));
var import_eightfold_path_controller = require("../controllers/eightfold-path.controller.js");
var import_catch_errors_middleware = __toESM(require("../middlewares/catch-errors.middleware.js"));
const eightfoldPathRouter = import_express.default.Router();
eightfoldPathRouter.use("/full", (0, import_catch_errors_middleware.default)(import_eightfold_path_controller.askFull));
var eightfold_path_route_default = eightfoldPathRouter;
//# sourceMappingURL=eightfold-path.route.js.map

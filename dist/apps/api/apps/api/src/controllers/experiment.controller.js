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
var experiment_controller_exports = {};
__export(experiment_controller_exports, {
  experiment1: () => experiment1
});
module.exports = __toCommonJS(experiment_controller_exports);
var import_openai_service = require("./../services/openai.service.js");
var import_app_config = __toESM(require("./../configs/app.config.js"), 1);
const experiment1 = async (req, res) => {
  const completion = await import_openai_service.ai.chat.completions.create({
    model: import_app_config.default.openai.model,
    temperature: 1,
    max_tokens: 256,
    messages: [
      { role: "system", content: import_app_config.default.prompts.zeroShotLearningAdvice },
      {
        role: "user",
        content: process.env.ALEX_PROMPT_1 || ""
      }
    ]
  });
  res.send(completion.choices[0]);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  experiment1
});
//# sourceMappingURL=experiment.controller.js.map

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
var openai_service_exports = {};
__export(openai_service_exports, {
  ai: () => ai,
  defaultParamsNonStreaming: () => defaultParamsNonStreaming,
  defaultParamsStreaming: () => defaultParamsStreaming,
  getStreamingCompletion: () => getStreamingCompletion
});
module.exports = __toCommonJS(openai_service_exports);
var import_openai = __toESM(require("openai"), 1);
var import_app_config = __toESM(require("../configs/app.config.js"), 1);
const ai = new import_openai.default({
  apiKey: import_app_config.default.openai.key
});
const getStreamingCompletion = async (extraParams) => {
  const params = {
    ...defaultParamsStreaming,
    ...extraParams,
    messages: [...defaultParamsStreaming.messages, ...extraParams.messages]
  };
  const completion = await ai.chat.completions.create(params);
  return completion;
};
const defaultParamsNonStreaming = {
  model: import_app_config.default.openai.model,
  temperature: 0.5,
  max_tokens: 1024,
  messages: [
    {
      role: "system",
      content: import_app_config.default.prompts.initBoodi
    }
  ]
};
const defaultParamsStreaming = {
  ...defaultParamsNonStreaming,
  stream: true
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ai,
  defaultParamsNonStreaming,
  defaultParamsStreaming,
  getStreamingCompletion
});
//# sourceMappingURL=openai.service.js.map

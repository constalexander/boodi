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
var zero_shot_wisdom_controller_exports = {};
__export(zero_shot_wisdom_controller_exports, {
  ask: () => ask
});
module.exports = __toCommonJS(zero_shot_wisdom_controller_exports);
var import_app_config = __toESM(require("../configs/app.config.js"));
var import_supabase_service = require("../services/supabase.service.js");
var import_openai_service = require("../services/openai.service.js");
var import_utils = require("../utils/utils.js");
const ask = async (req, res, next) => {
  if (!req.ws)
    return;
  const ws = await req.ws();
  ws.on("error", console.error);
  ws.on("message", (msg) => {
    const msgObj = JSON.parse(msg);
    const startStream = async (input) => {
      const params = {
        messages: [
          {
            role: "system",
            content: import_app_config.default.prompts.zeroShotWisdom
          },
          {
            role: "user",
            content: input
          }
        ],
        max_tokens: 512
      };
      const stream = await (0, import_openai_service.getStreamingCompletion)(
        params
      );
      let totalTokens = (0, import_utils.countTokens)(input);
      console.log(totalTokens);
      let output = "";
      for await (const chunk of stream) {
        const token = chunk.choices[0]?.delta.content || "";
        totalTokens++;
        output += token;
        ws.send(token);
      }
      ws.close();
      await (0, import_supabase_service.saveInteraction)(
        "/zero-shot-wisdom",
        input,
        output,
        totalTokens,
        msgObj.userUUID
      );
    };
    startStream(msgObj.inputText);
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ask
});
//# sourceMappingURL=zero-shot-wisdom.controller.js.map

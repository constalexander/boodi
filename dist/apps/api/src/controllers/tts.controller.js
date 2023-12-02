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
var tts_controller_exports = {};
__export(tts_controller_exports, {
  tts: () => tts
});
module.exports = __toCommonJS(tts_controller_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_openai_service = require("../services/openai.service.js");
const tts = async (req, res, next) => {
  const speechFile = import_path.default.resolve("./speech.mp3");
  async function main() {
    const mp3 = await import_openai_service.ai.audio.speech.create({
      model: "tts-1-hd",
      voice: "onyx",
      input: `Take. Rest. Take. Rest.`
    });
    console.log(speechFile);
    const buffer = Buffer.from(await mp3.arrayBuffer());
    await import_fs.default.promises.writeFile(speechFile, buffer);
  }
  main();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tts
});
//# sourceMappingURL=tts.controller.js.map

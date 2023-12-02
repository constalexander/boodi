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
var app_config_exports = {};
__export(app_config_exports, {
  default: () => app_config_default
});
module.exports = __toCommonJS(app_config_exports);
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
const env = process.env;
const config = {
  app: {
    env: env.env || "",
    port: Number(env.PORT) || 3e3,
    allowedOrigins: [
      "http://localhost:8888",
      "https://boodi.netlify.app",
      "https://boodi.ai"
    ]
  },
  supabase: {
    url: env.SUPABASE_URL ?? "",
    anonKey: env.SUPABASE_ANON_KEY ?? "",
    serviceRoleKey: env.SUPABASE_SERVICE_ROLE_KEY ?? ""
  },
  openai: {
    key: env.OPENAI_KEY || "",
    //model: "gpt-3.5-turbo",
    //model: "gpt-4",
    model: "gpt-4-1106-preview"
  },
  // see loadPromptsIntoConfig in supabase.service.js
  prompts: {
    initBoodi: "",
    fourNobleTruths: "",
    eightfoldPathFirstOnly: "",
    eightfoldPathFull: "",
    zeroShotLearningAdvice: "",
    zeroShotWisdom: ""
  }
};
var app_config_default = config;
//# sourceMappingURL=app.config.js.map

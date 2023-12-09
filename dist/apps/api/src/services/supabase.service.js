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
var supabase_service_exports = {};
__export(supabase_service_exports, {
  fetchPrompt: () => fetchPrompt,
  loadPromptsIntoConfig: () => loadPromptsIntoConfig,
  saveInteraction: () => saveInteraction,
  supabase: () => supabase
});
module.exports = __toCommonJS(supabase_service_exports);
var import_supabase_js = require("@supabase/supabase-js");
var import_app_config = __toESM(require("../configs/app.config.js"));
const supabase = (0, import_supabase_js.createClient)(
  import_app_config.default.supabase.url,
  import_app_config.default.supabase.serviceRoleKey
);
const fetchPrompt = async (name) => {
  try {
    const { data, error } = await supabase.from("prompts").select("*").eq("name", name);
    if (error)
      throw error;
    return data[0]?.value;
  } catch (error) {
    console.error("Error fetching prompts:", error.message);
  }
};
const loadPromptsIntoConfig = async () => {
  for (const p in import_app_config.default.prompts) {
    const v = await fetchPrompt(p);
    if (!v)
      throw new Error(`Prompt for ${p} not found.`);
    import_app_config.default.prompts[p] = v;
  }
};
const saveInteraction = async (endpoint, input, output, totalTokens, userUUID) => {
  const values = {
    endpoint,
    user_input: input,
    boodi_output: output,
    totalTokens,
    user_uuid: userUUID || null
  };
  const { error } = await supabase.from("interactions").insert(values);
  if (error) {
    console.error("Error saving interaction:", error);
    return false;
  }
  return true;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  fetchPrompt,
  loadPromptsIntoConfig,
  saveInteraction,
  supabase
});
//# sourceMappingURL=supabase.service.js.map

"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var catch_errors_middleware_exports = {};
__export(catch_errors_middleware_exports, {
  default: () => catch_errors_middleware_default
});
module.exports = __toCommonJS(catch_errors_middleware_exports);
const catchErrors = (fn) => (req, res, next) => {
  return fn(req, res, next).catch(next);
};
var catch_errors_middleware_default = catchErrors;
//# sourceMappingURL=catch-errors.middleware.js.map

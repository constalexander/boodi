"use strict";
const Module = require("module");
const path = require("path");
const fs = require("fs");
const originalResolveFilename = Module._resolveFilename;
const distPath = __dirname;
const manifest = [{ "module": "@boodi/providers/*", "pattern": "libs/providers/src/*" }, { "module": "@boodi/contexts/*", "pattern": "libs/contexts/src/*" }, { "module": "@boodi/services/*", "pattern": "libs/services/src/*" }, { "module": "@boodi/guards/*", "pattern": "libs/guards/src/*" }, { "module": "@boodi/models/*", "pattern": "libs/models/src/*" }, { "module": "@boodi/hooks/*", "pattern": "libs/hooks/src/*" }, { "module": "@boodi/ui/*", "pattern": "libs/ui/src/lib/*" }, { "module": "@boodi/analytics", "exactMatch": "libs/analytics/src/index.js", "pattern": "libs/analytics/src/index.ts" }, { "module": "@boodi/auth", "exactMatch": "libs/auth/src/index.js", "pattern": "libs/auth/src/index.ts" }, { "module": "@boodi/chat", "exactMatch": "libs/chat/src/index.js", "pattern": "libs/chat/src/index.ts" }, { "module": "@boodi/welcome", "exactMatch": "libs/welcome/src/index.js", "pattern": "libs/welcome/src/index.ts" }];
Module._resolveFilename = function(request, parent) {
  let found;
  for (const entry of manifest) {
    if (request === entry.module && entry.exactMatch) {
      const entry2 = manifest.find((x) => request === x.module || request.startsWith(x.module + "/"));
      const candidate = path.join(distPath, entry2.exactMatch);
      if (isFile(candidate)) {
        found = candidate;
        break;
      }
    } else {
      const re = new RegExp(entry.module.replace(/\*$/, "(?<rest>.*)"));
      const match = request.match(re);
      if (match?.groups) {
        const candidate = path.join(distPath, entry.pattern.replace("*", ""), match.groups.rest + ".js");
        if (isFile(candidate)) {
          found = candidate;
        }
      }
    }
  }
  if (found) {
    const modifiedArguments = [found, ...[].slice.call(arguments, 1)];
    return originalResolveFilename.apply(this, modifiedArguments);
  } else {
    return originalResolveFilename.apply(this, arguments);
  }
};
function isFile(s) {
  try {
    return fs.statSync(s).isFile();
  } catch (_e) {
    return false;
  }
}
require("./apps/api/src/main.js");
//# sourceMappingURL=main.js.map

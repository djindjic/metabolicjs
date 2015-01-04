System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "app/*": "lib/*.js"
  }
});

System.config({
  "map": {
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.1.1",
    "decimal.js": "github:MikeMcl/decimal.js@4.0.1",
    "forwardablejs": "github:djindjic/forwardablejs@0.1.10",
    "github:aurelia/dependency-injection@0.1.1": {
      "aurelia-metadata": "github:aurelia/metadata@0.1.1",
      "es6-shim": "github:paulmillr/es6-shim@0.21.1"
    }
  }
});

System.traceurOptions.annotations = true;
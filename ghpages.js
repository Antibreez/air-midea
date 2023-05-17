const ghpages = require("gh-pages");

ghpages.publish(".", {
  src: ["**/*", "!node_modules", "!ghpages.js", "!package.json", "!package-lock.json"],
});

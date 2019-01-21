const app = require("./server.js");
const config = require("./configuration.json");
const validate = require("./utils/verifyConfig");

if (validate(config)) {
  app.listen(config.port, () => {
    console.log(`Running on Port ${config.port}`);
  });
} else {
  console.error("Configuration is incorrect. Please read the README.md");
}

const container = require("./src/segments/container");

process.on("unhandledRejection", error => {
  console.error("unhandledRejection", error);
});

const app = container.resolve("app");

app.start().catch(error => {
  console.error("1failed to initiate container. error:", error);
  app.logger.error(error.stack);
  process.exit();
});

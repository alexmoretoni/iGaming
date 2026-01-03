const express = require("express");
const pino = require("pino");

const app = express();
const logger = pino({ name: process.env.SERVICE_NAME || "igame-k5" });
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/ready", (_req, res) => {
  res.json({ status: "ready", uptime: process.uptime() });
});

app.get("/api/v1/info", (_req, res) => {
  res.json({
    service: process.env.SERVICE_NAME || "igame-k5",
    version: process.env.SERVICE_VERSION || "0.1.0",
    environment: process.env.NODE_ENV || "development"
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "not_found",
    message: `Route ${req.method} ${req.path} not implemented yet`
  });
});

app.listen(port, () => {
  logger.info({ port }, "service started");
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cron_jobs_1 = require("./infrastructure/cron-jobs");
const app_1 = require("./app");
app_1.app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});
cron_jobs_1.adScheduling.start();
app_1.app.listen(app_1.port, () => {
  console.log(`[server]: Server is running at http://localhost:${app_1.port}`);
});

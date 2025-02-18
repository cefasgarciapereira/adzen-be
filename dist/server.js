"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
app_1.app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});
app_1.app.listen(app_1.port, () => {
  console.log(`[server]: Server is running at http://localhost:${app_1.port}`);
});

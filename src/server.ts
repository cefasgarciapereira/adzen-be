import { Request, Response } from "express";

import { adScheduling } from "./infrastructure/cron-jobs";

import { app, port } from "./app";

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

adScheduling.start();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

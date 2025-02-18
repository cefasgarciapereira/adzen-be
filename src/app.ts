import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import routes from "./interfaces";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

export { app, port };

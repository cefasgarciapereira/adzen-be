import { Request, Response } from "express";

export default class MetaController {
  check(req: Request, res: Response) {
    return res.status(200).json({ message: "sucesso" });
  }
}

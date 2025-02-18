import { Router, Request, Response } from "express";
import MetaController from "../../controllers/meta";

const router = Router();

router.get("/meta/check", (request: Request, response: Response) => {
  const meta = new MetaController();
  meta.check(request, response);
});

export default router;

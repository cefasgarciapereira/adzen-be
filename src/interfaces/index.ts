import { Router } from "express";
import metaRoutes from "./routes/meta";

const router = Router();

router.use(metaRoutes);

export default router;

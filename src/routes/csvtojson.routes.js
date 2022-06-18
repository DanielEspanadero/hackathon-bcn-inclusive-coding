import { Router } from "express";

import { csvToJson } from "../controllers/csvtojson.controllers";
import { upload } from "../middlewares/upload";

const router = Router();

router.post('/', upload, csvToJson);

export default router;
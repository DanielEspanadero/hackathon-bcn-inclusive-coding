import { Router } from "express";

import { csvToJsonOneColumn } from "../controllers/csvtojson.controllers";
import { upload } from "../middlewares/upload";

const router = Router();

router.post('/', upload, csvToJsonOneColumn);

export default router;
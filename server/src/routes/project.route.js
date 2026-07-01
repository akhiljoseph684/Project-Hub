import express from "express";

import { searchUsers } from "../controllers/project.controller.js"
import { verifyUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/search-users", verifyUser, searchUsers);

export default router;

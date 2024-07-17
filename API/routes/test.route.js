import express from "express"
import { shoulBeLoggedIn, shouldBeAdmin } from "../controllers/test.controller.js"
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router()

router.get("/should-be-logged-in", verifyToken, shoulBeLoggedIn);

router.get("/should-be-admin", verifyToken, shouldBeAdmin);

export default router
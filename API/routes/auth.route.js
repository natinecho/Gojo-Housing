import express from "express"
import { login, logout, register } from "../controllers/auth.controller.js"


const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/forgot-password", forgotPassword);


export default router
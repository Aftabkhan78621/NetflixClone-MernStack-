import express from "express";
import { login, logout, register } from "../controllers/user.js";

const router = express.Router();
router.route("/register").post(register); // fronted s dta bhejnege to post request
router.route("/login").post(login);
router.route("/logout").post(logout);

export default router;

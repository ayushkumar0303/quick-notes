const express = require("express");
const userAuth = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.post("/auth/google", userAuth);

module.exports = authRouter;

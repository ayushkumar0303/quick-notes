const express = require("express");
const userAuth = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.post("/auth/register", userAuth);

module.exports = authRouter;

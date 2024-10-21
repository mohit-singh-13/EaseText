const express = require("express");
const router = express.Router();

const {authentication} = require("../middleware/authentication");
const {login,signup}=require("../controllers/form");
router.post("/signup",signup);
router.post("/login",login);

module.exports = router;
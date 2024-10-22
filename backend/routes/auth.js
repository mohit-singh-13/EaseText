const express = require("express");
const router = express.Router();

const { authentication } = require("../middleware/authentication");
const { login, signup, logout } = require("../controllers/form");
router.post("/signup", signup);
router.post("/login", login);
router.get("/authenticate", authentication);
router.get("/logout", logout);

module.exports = router;

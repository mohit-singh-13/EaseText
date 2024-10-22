// create instance of express and its router
const express = require("express");
const router = express.Router();

const { handleContactForm } = require("../controllers/form");
router.post("/contact", handleContactForm);

module.exports = router;
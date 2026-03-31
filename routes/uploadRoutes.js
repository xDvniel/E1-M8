const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");

router.post("/upload/avatar/:userId", uploadController.subirAvatar);

module.exports = router;
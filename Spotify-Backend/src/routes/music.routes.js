const express = require("express");
const router = express.Router();
const multer = require("multer");


const upload = multer({ storage: multer.memoryStorage() });

const musicController = require("../controllers/music.controller");

router.post("/upload", upload.single("file"), musicController.createMusic);

module.exports = router;
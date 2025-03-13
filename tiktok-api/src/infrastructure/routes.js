const express = require("express");
const AuthController = require("./controllers/AuthController");
const VideoController = require("./controllers/VideoController");
const AuthMiddleware = require("./middlewares/AuthMiddleware");
const StorageService = require("./services/StorageService");

const router = express.Router();

router.get("/health", (req, res) => {
    res.send("API funcionando 🚀");
});
router.post("/login", AuthController.login);
router.post("/upload", AuthMiddleware, StorageService.single("video"), VideoController.uploadVideo);

module.exports = router;

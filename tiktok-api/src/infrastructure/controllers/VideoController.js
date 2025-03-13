const StorageService = require("../services/StorageService");

class VideoController {
  static uploadVideo(req, res) {
    res.json({ message: "Video subido con éxito", file: req.file });
  }
}

module.exports = VideoController;

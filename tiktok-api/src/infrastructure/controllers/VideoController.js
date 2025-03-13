const UploadVideoUseCase = require("../../application/UploadVideoUseCase");
const CommentVideoUseCase = require("../../application/CommentVideoUseCase");

class VideoController {
  async uploadVideo(req, res) {
    try {
      const userId = req.user.id; // Extraído desde el token JWT
      const file = req.file; // Archivo subido

      const video = await UploadVideoUseCase.execute(userId, file);
      res.status(201).json(video);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async commentVideo(req, res) {
    try {
      const { videoId, commentText } = req.body;
      const userId = req.user.id; // Extraído desde el token JWT

      const comment = await CommentVideoUseCase.execute(videoId, userId, commentText);
      res.status(201).json(comment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new VideoController();

const VideoRepository = require("../infrastructure/repositories/VideoRepository");
const StorageService = require("../infrastructure/services/StorageService");

class UploadVideoUseCase {
  async execute(userId, file) {
    if (!userId || !file) {
      throw new Error("Usuario y archivo son obligatorios");
    }

    // Subir el video a Storage (S3, Firebase, etc.)
    const videoUrl = await StorageService.uploadFile(file);

    const newVideo = {
      userId,
      url: videoUrl,
      createdAt: new Date(),
    };

    const savedVideo = await VideoRepository.uploadVideo(newVideo);

    return savedVideo;
  }
}

module.exports = new UploadVideoUseCase();

const { AppDataSource } = require("../../config/ormconfig");
const { Video } = require("../../domain/Video");

class VideoRepository {
  constructor() {
    this.repository = AppDataSource.getRepository(Video);
  }

  async uploadVideo(videoData) {
    const video = this.repository.create(videoData);
    return await this.repository.save(video);
  }

  async getVideoById(videoId) {
    return await this.repository.findOne({ where: { id: videoId } });
  }

  async getAllVideos() {
    return await this.repository.find();
  }

  async deleteVideo(videoId) {
    return await this.repository.delete(videoId);
  }
}

module.exports = new VideoRepository();

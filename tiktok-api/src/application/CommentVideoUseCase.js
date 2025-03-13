const VideoRepository = require("../infrastructure/repositories/VideoRepository");

class CommentVideoUseCase {
    async execute(videoId, userId, commentText) {
        if (!videoId || !userId || !commentText) {
            throw new Error("Todos los campos son obligatorios");
        }

        const video = await VideoRepository.getVideoById(videoId);
        if (!video) {
            throw new Error("El video no existe");
        }

        // Inicializamos la propiedad comments si no existe
        if (!video.comments) {
            video.comments = [];
        }

        const newComment = {
            userId,
            text: commentText,
            createdAt: new Date(),
        };

        video.comments.push(newComment);

        await VideoRepository.updateVideo(videoId, { comments: video.comments });

        return newComment;
    }
}

module.exports = new CommentVideoUseCase();

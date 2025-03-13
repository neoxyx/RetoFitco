class Video {
    constructor(id, userId, url, createdAt, comments = []) {
      this.id = id;
      this.userId = userId;
      this.url = url;
      this.createdAt = createdAt;
      this.comments = comments;
    }
  
    static create({ id, userId, url, createdAt }) {
      if (!id || !userId || !url || !createdAt) {
        throw new Error("Todos los campos son obligatorios");
      }
      return new Video(id, userId, url, createdAt);
    }
  
    addComment(userId, text) {
      if (!userId || !text) {
        throw new Error("Usuario y comentario son obligatorios");
      }
      const newComment = { userId, text, createdAt: new Date() };
      this.comments.push(newComment);
      return newComment;
    }
  }
  
  module.exports = Video;
  
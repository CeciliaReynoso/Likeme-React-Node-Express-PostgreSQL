const { DB } = require('../config/db')//conexion a base de datos

const getPosts = async () => {
  const result = await DB.query('SELECT * FROM posts');
  return result.rows;
};

const addPost = async (titulo, url, descripcion) => {
    // Validar que los campos no estén vacíos o nulos
    if (!titulo || !url || !descripcion) {
      throw new Error('Todos los campos son obligatorios');
    }
  
    const likes = 0; // Inicializar likes en 0
    await DB.query(
      'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)',
      [titulo, url, descripcion, likes]
    );
  };
  
const incrementLike = async (id) => {
  await DB.query('UPDATE posts SET likes = likes + 1 WHERE id = $1', [id]);
};

const deletePost = async (id) => {
  await DB.query('DELETE FROM posts WHERE id = $1', [id]);
};

module.exports = {
  getPosts,
  addPost,
  incrementLike,
  deletePost,
};

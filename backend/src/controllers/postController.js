const postModel = require('../models/postModel');

const getPosts = async (req, res) => {
  try {
    const posts = await postModel.getPosts();
    res.json(posts); // Devolver los posts como un arreglo
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los posts');
  }
};

const addPost = async (req, res) => {
    const { titulo, url, descripcion } = req.body;
// Validar que los campos no estén vacíos o nulos
    if (!titulo || !url || !descripcion) {
     return res.status(400).send('Todos los campos son obligatorios');
   }
    try {
      await postModel.addPost(titulo, url, descripcion);
      const posts = await postModel.getPosts(); // Obtener todos los posts después de agregar uno nuevo
      res.json(posts); // Devolver los posts como un arreglo
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al agregar el post');
    }
  };
  
  const incrementLike = async (req, res) => {
    const { id } = req.params;
    try {
      await postModel.incrementLike(id);
      const posts = await postModel.getPosts(); // Obtener todos los posts después de incrementar el like
      res.json(posts); // Devolver los posts como un arreglo
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al incrementar el like');
    }
  };
  
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await postModel.deletePost(id);
    const posts = await postModel.getPosts(); // Obtener todos los posts después de eliminar uno
    res.json(posts); // Devolver los posts como un arreglo
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al eliminar el post');
  }
};

module.exports = {
  getPosts,
  addPost,
  incrementLike,
  deletePost,
};

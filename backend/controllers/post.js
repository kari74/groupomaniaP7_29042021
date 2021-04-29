//imports
const models = require('../models'); 
//const bodyParser = require('body-parser');


//requêtes

//GET ALL POSTS
exports.getAllPost = (req, res, next) => {
  models.Post.findAll({
    order: [['createdAt', 'DESC']]
  }).then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }));
}

//CREATE A POST
exports.addPost = (req, res, next) => {

  //Params
  const id_users = req.body.id_users
  const title = req.body.title;
  const content = req.body.content;
  const userId = req.body.userId;


  //Verification
  if (title == null || content == null) {
    return res.status(400).json({ 'error': 'missing parameters' })
  }

  //Create the post
  const newPost = models.Post.create({
    id_users: id_users,
    title: title,
    content: content,
    UserId: userId
  })
    .then(function (newPost) {
      return res.status(201).json({
        'postId': newPost.id
      })
    })
    .catch(function (err) {
      return res.status(500).json({ 'error': 'cannot add post' })
    })
};

//DELETE POST (admin)
exports.deletePost = (req, res, next) => {
  let id = req.body.id
  console.log(req.body)
  models.Post.destroy({ where: { id: id } })
    .then(() => res.status(200).json({ message: 'Post deleted !' }))
    .catch(error => res.status(500).json({ error }));
} 

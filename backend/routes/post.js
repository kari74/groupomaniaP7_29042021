//routes post

const express = require('express');
const postRouter = express.Router(); 

const auth = require('../middleware/auth'); 

const postCtrl = require('../controllers/post'); 

//routes
postRouter.get('/',auth, postCtrl.getAllPost);
postRouter.post('/',auth, postCtrl.addPost);
postRouter.delete('/',auth,  postCtrl.deletePost);


module.exports = postRouter;
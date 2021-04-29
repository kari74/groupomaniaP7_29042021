//routes user

const express = require('express');
const userRouter = express.Router(); 

const userCtrl = require('../controllers/user');

const auth = require('../middleware/auth'); 

//Routes
userRouter.delete('/:id',auth, userCtrl.deleteUser);
userRouter.get('/',auth, userCtrl.getUser);
userRouter.post('/signup',  userCtrl.signUpUser);
userRouter.post('/login', userCtrl.loginUser);
userRouter.put('/:id',auth, userCtrl.updateUser);


module.exports = userRouter;

 

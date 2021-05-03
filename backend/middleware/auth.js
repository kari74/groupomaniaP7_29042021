//autentification


//import
const jwt = require('jsonwebtoken'); //token

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(req.headers.authorization);
    //verify token
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    //Compare  idUser
    const userId = decodedToken.userId;
    //If not valid, error
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
      //If valid, request
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};


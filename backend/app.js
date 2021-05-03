
//app

const express = require('express'); 
const helmet = require("helmet"); 
const bodyParser = require('body-parser'); 
const Sequelize = require('sequelize'); //ORM 
const cors = require ('cors')
const app = express();
const path = require('path');

// importation des routes
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

// Data base connexion A SUPPRIMER
const sequelize = new Sequelize("database_development_groupomania", 'root', 'kari74', {
    dialect: 'mysql',
    host: 'localhost'
  })  
     try {
     sequelize.authenticate();
     console.log('Connection with the data base has been established successfully.');
   } catch (error) {
     console.error('Unable to connect to the database:', error);
   }

//const exports = module.exports = {};
app.sequelize = sequelize;

//erreur CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Securité app
app.use(helmet());

//Middleware global : JSON
app.use(express.json());
app.use(cors());

//Routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);


module.exports = app;


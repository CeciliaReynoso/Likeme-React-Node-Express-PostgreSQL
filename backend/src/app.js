const express = require('express')
const morgan = require('morgan')
const path = require('path');
const postRoutes = require('./routes/postRoutes')
const cors = require('cors')


const app = express()

// middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(express.json())
        
// Routes
app.use('/', postRoutes)
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/index.html"));
  });
  
module.exports = app
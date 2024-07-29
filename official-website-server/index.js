//Description: Index file for wp-18062 back end

//Imports
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//Router file
const routes = require('./routes/offcial-website-server.routes')

//App
const app = express();

//Port
const port = 4000;

//App middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes)

//Error Manager
app.use((err, req, res, next) => {

    console.log(err)

    res.status(404).json({
        message: err
    })

})

app.listen(port, () => console.log(`Listening to port: ${port}`));


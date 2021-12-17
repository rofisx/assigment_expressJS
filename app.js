const express = require('express');
const app = express();
const router = require('./routes');
const log = require('./middlewares/logger');

app.use(log);
app.use(router);
app.use((req,res,next) =>{
    res.status(404);
    res.send({
        status:'Failed',
        message:'resource' + req.originalUrl + ' Not Found'
    })
})

// app.listen(3001, () => console.log('Server: http://localhost:3001'))
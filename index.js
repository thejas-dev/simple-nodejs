const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to simple server')
})

app.listen('3333',()=>{
    console.log('Server started on port 3333')  // Log a message when server starts successfully.
})
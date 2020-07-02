'use strict';

// this one to use express LY 
const express = require('express');

// server initilize server
const server = express();

// create port number
const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));

server.get('/test', (request, response) => {
    response.send('marhaba saleh');
});


server.get('/data', (request, response) => {
    let family = [
        { name: 'saleh' },
        { name: 'moh' },
        { name: 'masri' }
    ];
    response.json(family);
    // we can use send and it will give us the same result

});


server.listen(PORT, () => {
    // console.log here to print on the terminal
    console.log('listen to port', PORT);

});
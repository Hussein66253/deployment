
'use strict'
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;
server.use(express.static('./public'));
server.get('/', (request, response) => {
    response.send('You are doing great');
});
server.use('*', (request,response) =>{
    response.send('sorry this page not fond');
})
server.listen(PORT, () => {
    console.log('hello there that is my port ', PORT);
});
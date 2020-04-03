'use strict'


const express = require('express');

const server = express();

const Port = process.env.Port || 3000;

server.use(express.static('./public'))


// // http://localhost:3000/test
// server.get('/test', (request, response) => {
//   response.send('zzzzzzzzzzzzzzzzz');

// });
// // http://localhost:3000/data

// server.get('/data',(request, response) =>{
//  let zzzzzzz = [
//      {name:"zzzzzz"}, 
//      {name:"zzzzzz"},
//      {name:"zzzzzz"}
//     ];
//     response.json(zzzzzzz); 
// });


server.listen(Port, () => {
  console.log('listening on port', Port);

});
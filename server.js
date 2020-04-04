// 'use strict'


// const express = require('express');

// const server = express();

// const Port = process.env.Port || 3000;

// server.use(express.static('./public'));


// http://localhost:3000/test
// server.get('/test', (request, response) => {
//   response.send('zzzzzzzzzzzzzzzzz');

// });
// server.use('*', (request,response) =>{
//   response.send('sorry this page not fond');
// })
// // http://localhost:3000/data

// // server.get('/data',(request, response) =>{
// //  let zzzzzzz = [
// //      {name:"zzzzzz"}, 
// //      {name:"zzzzzz"},
// //      {name:"zzzzzz"}
// //     ];
// //     response.json(zzzzzzz); 
// // });


// server.listen(Port, () => {
//   console.log('listening on port', Port);

// });
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
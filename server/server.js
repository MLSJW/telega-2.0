const http = require("http");
//const io = require("socket.io")
const socketIo = require('socket.io');
const server = http.createServer();
const io = socketIo(server);
http.createServer(function(request,response){
    response.end("134534534463463463463464634");
}).listen(3000,"127.0.0.1",function(){
    console.log("Server proslushivaet");
});

const express = require('express');
// const pool = require('./db/db');

// const app = express();
// io.on('connection',(socket)=> {
//     console.log('CONNECT');
// });
// pool.query('SELECT NOW()', (err, res) => {
//   if(err) {
//     console.error('Error connecting to the database', err.stack);
//   } else {
//     console.log('Connected to the database:', res.rows);
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
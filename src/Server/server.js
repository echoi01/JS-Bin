const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const adminRouter = express.Router();
const binRouter = express.Router();
const path = require('path');
const fs = require('fs');
const bodyparser = require('body-parser');


app.use(bodyparser.json());
app.use('/admin', adminRouter);
app.use('/bin', binRouter);

adminRouter.use(express.static(//adminbuild))

// io.on('connection', function(socket) {
//     socket.on('updatedCode', function(newCode) {
//         socket.broadcast.emit('codeUpdate', newCode);
//     });

//     socket.on('updatedTerminal', function(terminalText) {
//         socket.broadcast.emit('terminalUpdate', terminalText);
//     });
// });


http.listen(3000, function() {
    console.log("Listening on Port 3000");
});
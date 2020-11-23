const express = require('express');
const path = require('path');

const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../trouble_client/build')));

/**
 * Returns the string "hello world"
 * @returns {string} "hello world"
 */
function get_hello(){
    return "hello world";
}

/**
 * Get Hello World Message
 *
 * @name Hello World
 * @path {GET} /api/hello
 * @response {String} "hello world" message
 * @code {200} if the request is successful
 * @code {500} if server dies
 */
app.get('/api/hello', (req, res) => {

  const hello_text = {'text': get_hello()}

  res.json(hello_text);

  console.log(`Sent hello world`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/trouble_client/build/index.html'));
});

const port = process.env.PORT || 5000;
// const server = app.listen(port);

console.log(`Trouble API listening on ${port}`);

io.on('connection', function(socket){
  console.log("connection established");
  socket.on('rollDice', () => {
    console.log("rolling reuslt: 1");
    socket.emit('rollResult', 1);
  })
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

// module.exports = server
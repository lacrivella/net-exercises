// const { createServer } = require('net');

// const server = createServer(sock => {
//   console.log('client connected');
//   sock.write('hello');

//   sock.on('data', data => {
//     console.log('from client', data.toString());
//   });
// });

// server.listen(7891, () => {
//   console.log('server is listening to port 7891')
// });

const { createServer } = require('net');

const server = createServer(sock => {
  sock.write('I will echo');

  sock.on('data', echo => {
    sock.write(echo);
  });
});

server.listen(7891);
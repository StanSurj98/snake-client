const net = require('net');

// Establish connection to game server, in our case locally
const connect = () => {
  const conn = net.createConnection({
    host: 'localhost', // localhost in our case
    port: 50541, // Set up our port num to be same as server's
  });

  conn.on("connect", () => {
    console.log(`Connected to server!`)
  });

  // Now we encode UTF-8 for interpreting characters
  conn.setEncoding("utf8");

  // Now we add a way to listen and handle an event => in this case, a connect event
  conn.on("data", (data) => {
    // "on INCOMING data, do the func WITH that data"
    console.log(`server says: ${data}`);

  });

  return conn;
};

module.exports = {
  connect, // Exporting with ES6 shorthand notation
};
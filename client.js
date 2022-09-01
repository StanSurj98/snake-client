const net = require('net');
// import our constants
const {IP, PORT} = require("./constants");

// Establish connection to game server, in our case locally
const connect = () => {
  const conn = net.createConnection({
    host: IP, // localhost in our case
    port: PORT, // Set up our port num to be same as server's
  });

  conn.on("connect", () => {
    // 1. we want to notify a successful connection
    console.log(`Succesfully connected to game server!`);

    // 2. Now let's send the server our name in 3 initials
    conn.write(`Name: SNK`); // think of this as (connection side, writes: ____ )

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
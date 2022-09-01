// In order to send our data back to server, we need something from the connection function in client
// Stores the active TCP connection object.
let connection;

const { connect } = require("http2");
// Let's import our movement keys
const {MOVE_KEYS, CHAT_KEYS} = require("./constants");

const handleUserInput = () => {
  // When we take in data from keyboard...
  process.stdin.on('data', (key) => {
    // What do we do with that key? this below says, if ctrl+c => exit process.
    if (key === '\u0003') {
      process.exit();
    };
    // Movements
    if (key === "w" || key === "a" || key === "s" || key === "d") {
      connection.write(`Move: ${MOVE_KEYS[key]}`);
    };

    // Chatting
    if (key === "z" || key === "x" || key === "c" || key === "v" || key === "f") {
      connection.write(`Say: ${CHAT_KEYS[key]}`);
    };

  });
};

// setup the interface to handle user inputs from stdin
const setupInput = (conn) => {
  connection = conn;  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Now we need to register an event listener for stdin once we've set it up, we need to add it here BEFORE returning stdin
  stdin.on("data", handleUserInput);

  return stdin;
};

// Let's export setupInput => we don't need to export handleUserInput since it won't be called elsewhere, only by setupInput here in the same module
module.exports = {
  setupInput,
};
// In order to send our data back to server, we need something from the connection function in client
// Stores the active TCP connection object.
let connection;

const handleUserInput = () => {
  // When we take in data from keyboard...
  process.stdin.on('data', (key) => {
    // What do we do with that key? this below says, if ctrl+c => exit process.
    if (key === '\u0003') {
      process.exit();
    };
    
    if (key === "w") {
      connection.write('Move: up');
    }
    if (key === "a") {
      connection.write('Move: left');
    }
    if (key === "s") {
      connection.write('Move: down');
    }
    if (key === "d") {
      connection.write('Move: right');
    }
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
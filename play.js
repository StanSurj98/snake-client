// Update: moved the connect() to its own module page. Imported here, from client.js
const {connect} = require("./client.js");
// note: there are several ways to import the function
// ex. require("./client").connect 
// The important part is to remember that our function connect() is now a METHOD on the exports object

const handleUserInput = () => {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    };
  });
};

// setup the interface to handle user inputs from stdin
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Now we need to register an event listener for stdin once we've set it up, we need to add it here BEFORE returning stdin
  stdin.on("data", handleUserInput);

  return stdin;
};




// should appear at the top, 
console.log(`Connecting...`); 

// then we call the func to actually connect
connect();
setupInput();
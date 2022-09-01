const handleUserInput = () => {
  // When we take in data from keyboard...
  process.stdin.on('data', (key) => {
    // What do we do with that key? this below says, if ctrl+c => exit process.
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

// Let's export setupInput => we don't need to export handleUserInput since it won't be called elsewhere, only by setupInput here in the same module
module.exports = {
  setupInput,
};
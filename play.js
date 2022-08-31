// Update: moved the connect() to its own module page. Imported here, from client.js
const {connect} = require("./client.js");
// note: there are several ways to import the function
// ex. require("./client").connect 
// The important part is to remember that our function connect() is now a METHOD on the exports object

// should appear at the top, 
console.log(`Connecting...`); 

// then we call the func to actually connect
connect();

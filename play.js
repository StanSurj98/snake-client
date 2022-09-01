// Update: moved the connect() to its own module page. Imported here, from client.js
const {connect} = require("./client.js");
// note: there are several ways to import the function
// ex. require("./client").connect 
// The important part is to remember that our function connect() is now a METHOD on the exports object

// Update: moved the setupInput and handleUserData funcs to its own input module, lets export import it.
const {setupInput} = require("./input");



// should appear at the top, 
console.log(`Connecting...`); 


// Next we call the setupInput for the UI
// Passing in the OBJECT RETURNED from connect function, this allows us to connect to the server and have the server take in our data
setupInput(connect());
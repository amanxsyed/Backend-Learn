import express from "express";
const app = express();

// app.get() Defines a route for handling HTTP GET requests.
// Specifies what happens when a client makes a GET request to a particular endpoint.
// Sends back data to the client
app.get("/", (req, res) => {
  res.send("Server is ready!");
});


const port = process.env.PORT || 3000;

// app.listens() Starts the Express server and listens for incoming requests on a specified port.
//Takes a port number and an optional callback function that runs once the server starts.
// Just logs a message, doesn’t send responses

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
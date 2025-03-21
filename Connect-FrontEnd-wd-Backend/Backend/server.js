import express from "express";
const app = express();


// app.get("/", (req, res) => {
//   res.send("Server is ready!");
// });

// app.get() Defines a route for handling HTTP GET requests.
// Specifies what happens when a client makes a GET request to a particular endpoint.
// Sends back data to the client
app.get("/api/jokes", (req,res) =>{
    const jokes = [
        {
            "id": 1,
            "question": "What do you call a very small valentine?",
            "answer": "A valen-tiny!"
        },
        {
            "id": 2,
            "question": "What did the dog say when he rubbed his tail on the sandpaper?",
            "answer": "Ruff, Ruff!"
        },
        {
            "id": 3,
            "question": "Why don't sharks like to eat clowns?",
            "answer": "Because they taste funny!"
        },
        {
            "id": 4,
            "question": "What did"
        },
        {
            id: 5,
            question: "What did the grape do when he got stepped on?",
            answer: "He let out a little wine!"
        }
    ];
    res.send(jokes);
});


const port = process.env.PORT || 3000;

// app.listens() Starts the Express server and listens for incoming requests on a specified port.
//Takes a port number and an optional callback function that runs once the server starts.
// Just logs a message, doesn’t send responses

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
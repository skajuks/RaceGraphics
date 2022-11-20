const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

// Event gets triggered when user joins our server
io.on("connection", (socket) => {
    console.log("User connected : " + socket.id);

    socket.on("toggle_sponsors", (data) => {
        console.log("Data from server : " + data["value"]);
        socket.broadcast.emit("receive_sponsors", data["value"]);
    });
});


// Declaring the port for our socket server
const port = 3001;
server.listen(port, () => {
    console.log("Server running! Listening on port 3001");
});
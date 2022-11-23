
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const axios = require('axios');
const client = axios.create()

const race_api = "http://80.232.239.44:4037/race_feed?type=default&token=secret123";
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
    // Setters and getters
    console.log("User connected : " + socket.id);

    // For button toggle states
    socket.on("toggle_sponsors", (data) => {
        socket.broadcast.emit("receive_sponsors", data["value"]);
    });
    socket.on("toggle_hashtag", (data) => {
        socket.broadcast.emit("receive_hashtag", data["value"]);
    });
    socket.on("toggle_maintimer", (data) => {
        socket.broadcast.emit("receive_toggle_maintimer", data["value"]);
    });
    // For getting/setting values
    socket.on("set_hashtag_value", (data) => {
        socket.broadcast.emit("get_hashtag_value", data["value"]);
    });
});

// Declaring the port for our socket server
const port = 3001;
server.listen(port, () => {
    console.log("Server running! Listening on port 3001");
});

const api_server = http.createServer(app);
const api_io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});
api_io.on("connection", (socket) => {
    const intervalCall = setInterval(() => {
        client.get(race_api)
        .then((json) => socket.broadcast.emit("get_api", {
        success: json.data.success,
        api_data: json.data.api_data
    }));
    }, 500);
    return () => {
        clearInterval(intervalCall);
    };
});
const api_port = 3003;
api_server.listen(api_port, () => {
    console.log("API Server running! Listening on port 3003");
});
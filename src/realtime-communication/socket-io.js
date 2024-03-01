const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });

  socket.emit("yash", {name: "Yash Poonia"});

  socket.on("from client", (msg) => {
    io.emit("from client", msg);
  })
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});

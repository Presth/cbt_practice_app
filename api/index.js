import express from "express";
import dotenv from "dotenv";
import { WebSocketServer } from "ws";

// middleware imports
import { errorHandler } from "./config/error-handling.js";
import setupSwagger from "./swagger/index.js";
import Routes from "./routes/index.js";

// server setup
const server = express();
dotenv.config();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// server middleware
server.use("/api", Routes);
setupSwagger(server);
server.use(errorHandler);

// ACTIVATE SERVER
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

/*

WEBSOCKT SERVER IS SETUP BELOW
USING THE EXPRESS SERVER AS THE HTTP SERVER

*/
const ws = new WebSocketServer({ server });
ws.on("connection", (ws) => {
  console.log("client connected");

  ws.on("message", (message) => {
    console.log("received: %s", message);
    ws.send(`echo: ${message}`);
  });

  ws.on("close", () => {
    console.log("client disconnected");
  });
});

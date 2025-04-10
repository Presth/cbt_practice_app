import express from "express";
import http from "http";
import dotenv from "dotenv";
import { WebSocketServer } from "ws";
import cookieParser from "cookie-parser";
import { v4 as uuid } from "uuid";

// middleware imports
import { errorHandler } from "./middleware/error-handling.js";
import setupSwagger from "./swagger/index.js";
import Routes from "./routes/index.js";
import { handleClientRequest } from "./utils/websocketSetup.js";
import { wsClients } from "./utils/typesDef.js";

// server setup
// const server = http.createServer((req, res) => {});
const app = express();
const server = http.createServer(app);
dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server middleware
app.use("/api", Routes);
setupSwagger(app);
app.use(errorHandler);

// ACTIVATE SERVER
const PORT = process.env.PORT || 8000;

/*

WEBSOCKT SERVER IS SETUP BELOW
USING THE EXPRESS SERVER AS THE HTTP SERVER

*/
const wsServer = new WebSocketServer({ server });

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

wsServer.on("connection", (connection) => {
  const connectionId = uuid();
  wsClients[connectionId] = connection;

  connection.on("message", (message) => {
    handleClientRequest(message, connectionId);
  });

  connection.on("close", () => {
    console.log("client disconnected");
  });
});

import express from "express";
import dotenv from "dotenv";
import { WebSocketServer } from "ws";
import { db } from "./config/db.js";
import { errorHandler } from "./config/error-handling.js";
import AuthRouter from "./shared/routes/auth.js";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const server = express();

dotenv.config();

const PORT = process.env.PORT || 8000;

// swagger ui setup
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CBT Application API",
      version: "1.0.0",
      description: "API documentation for my the cbt app",
    },
    servers: [
      {
        url: "http://localhost:" + PORT, // Change to your actual server URL
      },
    ],
  },
  apis: ["./*/routes/*.js"], // Path to the API routes
};

const swaggerSpec = swaggerJSDoc(options);

// server middleware
server.use("/api", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
server.use("/api/auth/", AuthRouter);

server.use(errorHandler);

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

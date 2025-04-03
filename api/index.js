import express from "express";
import dotenv from "dotenv";
import { WebSocketServer } from "ws";
import { db } from "./config/db.js";
import { errorHandler } from "./config/error-handling.js";
import AuthRouter from "./shared/routes/auth.js";
const server = express();

dotenv.config();

const PORT = process.env.PORT || 8000;
server.get("/", (req, res, next) => {
  console.log("hello world");

  db.query("show tables", (err, result) => {
    if (err) return next(err);

    console.log(result);

    return res.status(200).json({ tables: result });
  });
});

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

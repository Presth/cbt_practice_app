import { configureWsForTest } from "../controllers/student/test.js";
import { wsClients, WSTYPES } from "./typesDef.js";
import jwt from "jsonwebtoken";

export const handleClientRequest = async (message, clientWsId) => {
  //   console.log({ message, clientWsId });
  const clientRequest = JSON.parse(message.toString());
  const client = jwt.verify(message.token, process.env.JWT_SECRET);

  if (clientRequest.action === WSTYPES.STARTEXAM) {
    configureWsForTest(message, clientWsId, (clientInfo = client));
  }
};

export const sendWsMessage = (message, clientWsid) => {
  let connection = wsClients[clientWsid];
  if (!connection) return;
  if (connection.readyState === WebSocket.OPEN)
    connection.send(JSON.stringify(message));
};

setInterval(() => {
  for (test_takers in wsClients) {
  }
}, 1000);

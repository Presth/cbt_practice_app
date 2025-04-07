import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import dotenv from "dotenv";
dotenv.config();

// swagger ui setup
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CBT Application API",
      version: "1.0.0",
      description: "API documentation for the cbt practice app",
    },
    servers: [
      {
        url: "http://localhost:" + process.env.PORT, // Change to your actual server URL
      },
    ],
  },
  apis: ["./swagger/*.js"], // Path to the API routes
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (server) => {
  server.use("/api", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};

export default setupSwagger;

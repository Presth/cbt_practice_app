import { UniqueConstraintError } from "sequelize";

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = "Internal Server Error";

  // Log the error (for debugging purposes)
  //   console.error(err.stack);
  if (err instanceof UniqueConstraintError) {
    return res.status(409).json(err.errors[0].message);
  }

  // Respond with the error message
  res.status(statusCode).json({
    error: {
      message,
      // Optionally, send stack trace only in development
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    },
  });
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  console.log(err);
  const message = "Internal Server Error";

  // Log the error (for debugging purposes)
  //   console.error(err.stack);

  // Respond with the error message
  res.status(statusCode).json({
    error: {
      message,
      // Optionally, send stack trace only in development
      stack: process.env.NODE_ENV === "development" ? err.stack : null,
    },
  });
};

class CustomError extends Error {
  constructor({ message, statusCode }) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, req, res, next) => {
  const { message, statusCode } = err;

  console.error(message);

  if (!statusCode) statusCode = 500;

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

module.exports = { CustomError, handleError };

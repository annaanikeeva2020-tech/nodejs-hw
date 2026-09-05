import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (createHttpError.isHttpError(err)) {
    res.status(err.status).json({
      message: err.message,
    });

    return;
  }

  res.status(500).json({
    message: err.message || 'Something went wrong',
  });
};

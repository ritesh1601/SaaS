const sendError = (err, req, res, next) => {
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message,
    });
};

module.exports = { sendError };

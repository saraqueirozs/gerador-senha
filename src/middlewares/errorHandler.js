"use strict";
exports.__esModule = true;
exports.errorHandler = void 0;
var AppError_1 = require("../errors/AppError");
var errorHandler = function (err, req, res, next) {
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({ error: err.message });
    }
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
};
exports.errorHandler = errorHandler;

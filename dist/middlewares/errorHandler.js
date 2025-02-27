"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const AppError_1 = require("../errors/AppError");
const errorHandler = (err, req, res, next) => {
    if (err instanceof AppError_1.AppError) {
        return res.status(err.statusCode).json({ error: err.message });
    }
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
};
exports.errorHandler = errorHandler;

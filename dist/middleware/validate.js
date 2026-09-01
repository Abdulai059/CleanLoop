"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = exports.validateParams = void 0;
const zod_1 = require("zod");
const validateParams = (schema) => {
    return (req, res, next) => {
        try {
            req.params = schema.parse(req.params);
            next();
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                return res.status(400).json({
                    status: "fail",
                    message: "Invalid request parameters",
                    errors: err.issues,
                });
            }
            next(err);
        }
    };
};
exports.validateParams = validateParams;
const validateBody = (schema) => {
    return (req, res, next) => {
        try {
            req.body = schema.parse(req.body);
            next();
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                return res.status(400).json({
                    status: "fail",
                    message: "Invalid request body",
                    errors: err.issues,
                });
            }
            next(err);
        }
    };
};
exports.validateBody = validateBody;
//# sourceMappingURL=validate.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthenticatedUserId = void 0;
const AppError_1 = __importDefault(require("./AppError"));
const getAuthenticatedUserId = (req) => {
    if (!req.user) {
        throw new AppError_1.default("You are not logged in", 401);
    }
    return req.user.id;
};
exports.getAuthenticatedUserId = getAuthenticatedUserId;
//# sourceMappingURL=getAuthenticatedUser.js.map
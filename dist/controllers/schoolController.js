"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyClasses = exports.addClass = exports.getMySchool = exports.createSchool = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const schoolService = __importStar(require("../services/schoolService"));
const getAuthenticatedUser_1 = require("../utils/getAuthenticatedUser");
exports.createSchool = (0, catchAsync_1.catchAsync)(async (req, res, _next) => {
    const teacherId = (0, getAuthenticatedUser_1.getAuthenticatedUserId)(req);
    const school = await schoolService.createSchool(teacherId, req.body);
    res.status(201).json({
        success: true,
        message: "School created successfully",
        data: school,
    });
});
exports.getMySchool = (0, catchAsync_1.catchAsync)(async (req, res, _next) => {
    const teacherId = (0, getAuthenticatedUser_1.getAuthenticatedUserId)(req);
    const school = await schoolService.getMySchool(teacherId);
    res.status(200).json({
        success: true,
        data: school,
    });
});
exports.addClass = (0, catchAsync_1.catchAsync)(async (req, res, _next) => {
    const teacherId = (0, getAuthenticatedUser_1.getAuthenticatedUserId)(req);
    const { name } = req.body;
    const schoolClass = await schoolService.addClass(teacherId, name);
    res.status(201).json({
        success: true,
        message: "Class added successfully",
        data: schoolClass,
    });
});
exports.getMyClasses = (0, catchAsync_1.catchAsync)(async (req, res, _next) => {
    const teacherId = (0, getAuthenticatedUser_1.getAuthenticatedUserId)(req);
    const classes = await schoolService.getMyClasses(teacherId);
    res.status(200).json({
        success: true,
        data: classes,
    });
});
//# sourceMappingURL=schoolController.js.map
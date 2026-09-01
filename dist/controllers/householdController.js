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
exports.removeMember = exports.addMember = exports.updateMyHousehold = exports.getMyHousehold = exports.createHousehold = void 0;
const householdService = __importStar(require("../services/householdService"));
const catchAsync_1 = require("../utils/catchAsync");
const getAuthenticatedUser_1 = require("../utils/getAuthenticatedUser");
// create household
exports.createHousehold = (0, catchAsync_1.catchAsync)(async (req, res, _next) => {
    const userId = (0, getAuthenticatedUser_1.getAuthenticatedUserId)(req);
    const household = await householdService.createHousehold(userId, req.body);
    res.status(201).json({
        success: true,
        message: "Household created successfully",
        data: household,
    });
});
exports.getMyHousehold = (0, catchAsync_1.catchAsync)(async (req, res, _next) => {
    const userId = (0, getAuthenticatedUser_1.getAuthenticatedUserId)(req);
    const household = await householdService.getMyHousehold(userId);
    res.status(200).json({
        success: true,
        data: household,
    });
});
exports.updateMyHousehold = (0, catchAsync_1.catchAsync)(async (req, res, _next) => {
    const userId = (0, getAuthenticatedUser_1.getAuthenticatedUserId)(req);
    const household = await householdService.updateMyHousehold(userId, req.body);
    res.status(200).json({
        success: true,
        message: "Household updated successfully",
        data: household,
    });
});
exports.addMember = (0, catchAsync_1.catchAsync)(async (req, res, _next) => {
    const userId = (0, getAuthenticatedUser_1.getAuthenticatedUserId)(req);
    const { phone } = req.body;
    const member = await householdService.addMember(userId, phone);
    res.status(201).json({
        success: true,
        message: "Member added successfully",
        data: member,
    });
});
exports.removeMember = (0, catchAsync_1.catchAsync)(async (req, res, _next) => {
    const requesterId = (0, getAuthenticatedUser_1.getAuthenticatedUserId)(req);
    const { userId: targetUserId } = req.params;
    const result = await householdService.removeMember(requesterId, targetUserId);
    res.status(200).json({
        success: true,
        message: "Member removed successfully",
        data: result,
    });
});
//# sourceMappingURL=householdController.js.map
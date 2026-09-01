"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redemptionIdParamSchema = exports.createRedemptionSchema = void 0;
const zod_1 = require("zod");
exports.createRedemptionSchema = zod_1.z.object({
    rewardId: zod_1.z.string().min(1),
});
exports.redemptionIdParamSchema = zod_1.z.object({
    redemptionId: zod_1.z.string().min(1),
});
//# sourceMappingURL=redemptionValidation.js.map
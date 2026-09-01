"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.voidRecoverySchema = exports.recoveryIdParamSchema = exports.createRecoverySchema = void 0;
const zod_1 = require("zod");
exports.createRecoverySchema = zod_1.z.object({
    householdId: zod_1.z.string().min(1),
    items: zod_1.z
        .array(zod_1.z.object({
        materialTypeId: zod_1.z.string().min(1),
        weight: zod_1.z.number().positive(),
    }))
        .min(1, "At least one item is required"),
});
exports.recoveryIdParamSchema = zod_1.z.object({
    recoveryId: zod_1.z.string().min(1),
});
exports.voidRecoverySchema = zod_1.z.object({
    reason: zod_1.z.string().min(1),
});
//# sourceMappingURL=recoveryValidation.js.map
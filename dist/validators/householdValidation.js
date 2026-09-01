"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userIdParamSchema = exports.addMemberSchema = exports.updateHouseholdSchema = exports.createHouseholdSchema = void 0;
const zod_1 = require("zod");
exports.createHouseholdSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    communityId: zod_1.z.string().min(1),
    latitude: zod_1.z.number().optional(),
    longitude: zod_1.z.number().optional(),
});
exports.updateHouseholdSchema = zod_1.z.object({
    name: zod_1.z.string().min(1).optional(),
    latitude: zod_1.z.number().optional(),
    longitude: zod_1.z.number().optional(),
});
exports.addMemberSchema = zod_1.z.object({
    phone: zod_1.z.string().min(1),
});
exports.userIdParamSchema = zod_1.z.object({
    userId: zod_1.z.string().min(1),
});
//# sourceMappingURL=householdValidation.js.map
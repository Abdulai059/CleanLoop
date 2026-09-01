"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.districtParamsSchema = exports.regionParamsSchema = void 0;
const zod_1 = require("zod");
exports.regionParamsSchema = zod_1.z.object({
    regionId: zod_1.z.string().min(1),
});
exports.districtParamsSchema = zod_1.z.object({
    districtId: zod_1.z.string().min(1),
});
//# sourceMappingURL=locationValidators.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClassSchema = exports.schoolIdParamSchema = exports.createSchoolSchema = void 0;
const zod_1 = require("zod");
exports.createSchoolSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    communityId: zod_1.z.string().min(1).optional(),
    districtId: zod_1.z.string().min(1).optional(),
    regionId: zod_1.z.string().min(1).optional(),
});
exports.schoolIdParamSchema = zod_1.z.object({
    schoolId: zod_1.z.string().min(1),
});
exports.createClassSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
});
//# sourceMappingURL=schoolValidation.js.map
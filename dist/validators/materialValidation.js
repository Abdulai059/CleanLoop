"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialIdParamSchema = void 0;
const zod_1 = require("zod");
exports.materialIdParamSchema = zod_1.z.object({
    id: zod_1.z.string().min(1),
});
//# sourceMappingURL=materialValidation.js.map
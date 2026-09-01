"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rewardIdParamSchema = void 0;
const zod_1 = require("zod");
exports.rewardIdParamSchema = zod_1.z.object({
    rewardId: zod_1.z.string().min(1),
});
//# sourceMappingURL=rewardValidation.js.map
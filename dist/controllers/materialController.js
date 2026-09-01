"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaterials = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const materialService_1 = require("../services/materialService");
exports.getMaterials = (0, catchAsync_1.catchAsync)(async (_req, res, _next) => {
    const materials = await (0, materialService_1.getActiveMaterials)();
    res.status(200).json({
        success: true,
        data: materials,
    });
});
//# sourceMappingURL=materialController.js.map
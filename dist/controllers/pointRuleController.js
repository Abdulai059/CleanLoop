"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPointRules = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const pointRuleService_1 = require("../services/pointRuleService");
exports.getPointRules = (0, catchAsync_1.catchAsync)(async (_req, res, _next) => {
    const rules = await (0, pointRuleService_1.getActivePointRules)();
    res.status(200).json({
        success: true,
        data: rules,
    });
});
//# sourceMappingURL=pointRuleController.js.map
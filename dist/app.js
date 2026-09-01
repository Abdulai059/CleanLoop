"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const hpp_1 = __importDefault(require("hpp"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const locationRouters_1 = __importDefault(require("./routes/locationRouters"));
const householdRoutes_1 = __importDefault(require("./routes/householdRoutes"));
const materialRoutes_1 = __importDefault(require("./routes/materialRoutes"));
const recoveryRoutes_1 = __importDefault(require("./routes/recoveryRoutes"));
const pointRuleRoutes_1 = __importDefault(require("./routes/pointRuleRoutes"));
const walletRoutes_1 = __importDefault(require("./routes/walletRoutes"));
const rewardRoutes_1 = __importDefault(require("./routes/rewardRoutes"));
const redemptionRoutes_1 = __importDefault(require("./routes/redemptionRoutes"));
const schoolRoutes_1 = __importDefault(require("./routes/schoolRoutes"));
const AppError_1 = __importDefault(require("./utils/AppError"));
const errorController_1 = __importDefault(require("./controllers/errorController"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
// 1) GLOBAL MIDDLEWARES
// Set security HTTP headers
app.use((0, helmet_1.default)());
app.use((0, cookie_parser_1.default)());
// Development logging
if (process.env.NODE_ENV === "development") {
    app.use((0, morgan_1.default)("dev"));
}
// Limit requests from the same IP
const limiter = (0, express_rate_limit_1.default)({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);
// Body parser, reading data from body into req.body
app.use(express_1.default.json());
// Prevent HTTP parameter pollution
app.use((0, hpp_1.default)());
// 3) ROUTES
app.use("/api/v1/users", userRoutes_1.default);
app.use("/api/v1/locations", locationRouters_1.default);
app.use("/api/v1/households", householdRoutes_1.default);
app.use("/api/v1/materials", materialRoutes_1.default);
app.use("/api/v1/recoveries", recoveryRoutes_1.default);
app.use("/api/v1/point-rules", pointRuleRoutes_1.default);
app.use("/api/v1/wallet", walletRoutes_1.default);
app.use("/api/v1/rewards", rewardRoutes_1.default);
app.use("/api/v1/redemptions", redemptionRoutes_1.default);
app.use("/api/v1/schools", schoolRoutes_1.default);
// Handle undefined routes
app.all("*splat", (req, res, next) => {
    next(new AppError_1.default(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(errorController_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
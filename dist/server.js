"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Catch exceptions before doing anything else
process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...:");
    console.log(err.name, err.message);
    process.exit(1);
});
// 2. Load environment variables
require("./config/env");
// 3. Import app and dependencies
const app_1 = __importDefault(require("./app"));
// 4. Start the server
const PORT = process.env.PORT || 3000;
const server = app_1.default.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// 5. Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! 💥 Shutting down...:");
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
//# sourceMappingURL=server.js.map
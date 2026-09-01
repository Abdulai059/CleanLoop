"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSMS = void 0;
// utils/sendSMS.ts
const africastalking_1 = __importDefault(require("africastalking"));
// Initialize the Africa's Talking Client wrapper
const at = (0, africastalking_1.default)({
    apiKey: process.env.AT_API_KEY || "",
    username: process.env.AT_USERNAME || "sandbox",
});
const sendSMS = async ({ to, message, }) => {
    const sms = at.SMS;
    const senderId = process.env.AT_SENDER_ID;
    try {
        const result = (await sms.send({
            to: [to], // Africa's Talking requires phone numbers inside an array
            message: message,
            // Omit sender ID when testing in sandbox mode
            from: senderId === "SandboxShortCode" ? undefined : senderId,
        }));
        return result;
    }
    catch (error) {
        console.error("Africa's Talking SMS dispatcher failed:", error);
        throw error;
    }
};
exports.sendSMS = sendSMS;
//# sourceMappingURL=sendSMS.js.map
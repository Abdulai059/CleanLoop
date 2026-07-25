// utils/sendSMS.ts
import africastalking from "africastalking";

// Initialize the Africa's Talking Client wrapper
const at = africastalking({
  apiKey: process.env.AT_API_KEY || "",
  username: process.env.AT_USERNAME || "sandbox",
});

interface SendSMSOptions {
  to: string; // Expects international format like "+233509039974"
  message: string; // The actual text message body
}

interface ATSMSRecipient {
  number: string;
  status: string;
  messageId: string;
  cost: string;
}

interface ATSMSResponse {
  SMSMessageData: {
    Message: string;
    Recipients: ATSMSRecipient[];
  };
}

export const sendSMS = async ({
  to,
  message,
}: SendSMSOptions): Promise<ATSMSResponse> => {
  const sms = at.SMS;
  const senderId = process.env.AT_SENDER_ID;

  try {
    const result = (await sms.send({
      to: [to], // Africa's Talking requires phone numbers inside an array
      message: message,
      // Omit sender ID when testing in sandbox mode
      from: senderId === "SandboxShortCode" ? undefined : senderId,
    })) as ATSMSResponse;

    return result;
  } catch (error) {
    console.error("Africa's Talking SMS dispatcher failed:", error);
    throw error;
  }
};

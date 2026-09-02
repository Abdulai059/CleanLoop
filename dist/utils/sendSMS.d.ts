interface SendSMSOptions {
    to: string;
    message: string;
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
export declare const sendSMS: ({ to, message, }: SendSMSOptions) => Promise<ATSMSResponse>;
export {};

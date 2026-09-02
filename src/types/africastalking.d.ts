declare module 'africastalking' {
  interface SMSOptions {
    to: string[];
    message: string;
    from?: string;
  }

  interface SMSResponse {
    SMSMessageData: {
      Message: string;
      Recipients: Array<{
        number: string;
        status: string;
        messageId: string;
        cost: string;
      }>;
    };
  }

  interface SMS {
    send(options: SMSOptions): Promise<SMSResponse>;
  }

  interface AfricaTalkingClient {
    SMS: SMS;
  }

  function africastalking(config: { apiKey: string; username: string }): AfricaTalkingClient;
  
  export = africastalking;
}

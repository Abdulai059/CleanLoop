export declare const getOrCreateWallet: (userId: string) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    balance: import("@prisma/client-runtime-utils").Decimal;
}>;
export declare const getMyWallet: (userId: string) => Promise<{
    balance: import("@prisma/client-runtime-utils").Decimal;
}>;
export declare const getMyTransactions: (userId: string) => Promise<{
    id: string;
    description: string | null;
    createdAt: Date;
    type: import("@prisma/client").$Enums.WalletTransactionType;
    amount: import("@prisma/client-runtime-utils").Decimal;
}[]>;

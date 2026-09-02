export declare const getOrCreateWallet: (userId: string) => Promise<{
    id: string;
    createdAt: Date;
    userId: string;
    updatedAt: Date;
    balance: import("@prisma/client-runtime-utils").Decimal;
}>;
export declare const getMyWallet: (userId: string) => Promise<{
    balance: import("@prisma/client-runtime-utils").Decimal;
}>;
export declare const getMyTransactions: (userId: string) => Promise<{
    id: string;
    createdAt: Date;
    description: string | null;
    type: import("../generated/prisma/enums").WalletTransactionType;
    amount: import("@prisma/client-runtime-utils").Decimal;
}[]>;

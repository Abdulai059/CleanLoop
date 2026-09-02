export declare const UserStatus: {
    readonly PENDING: "PENDING";
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly ARCHIVED: "ARCHIVED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const Gender: {
    readonly MALE: "MALE";
    readonly FEMALE: "FEMALE";
    readonly OTHER: "OTHER";
};
export type Gender = (typeof Gender)[keyof typeof Gender];
export declare const HouseholdRole: {
    readonly HEAD: "HEAD";
    readonly MEMBER: "MEMBER";
};
export type HouseholdRole = (typeof HouseholdRole)[keyof typeof HouseholdRole];
export declare const RecoveryStatus: {
    readonly VERIFIED: "VERIFIED";
    readonly VOIDED: "VOIDED";
};
export type RecoveryStatus = (typeof RecoveryStatus)[keyof typeof RecoveryStatus];
export declare const WalletTransactionType: {
    readonly EARN: "EARN";
    readonly REDEEM: "REDEEM";
    readonly ADJUSTMENT: "ADJUSTMENT";
    readonly REVERSAL: "REVERSAL";
};
export type WalletTransactionType = (typeof WalletTransactionType)[keyof typeof WalletTransactionType];
export declare const RewardStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly OUT_OF_STOCK: "OUT_OF_STOCK";
};
export type RewardStatus = (typeof RewardStatus)[keyof typeof RewardStatus];
export declare const RedemptionStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
    readonly CANCELLED: "CANCELLED";
};
export type RedemptionStatus = (typeof RedemptionStatus)[keyof typeof RedemptionStatus];
export declare const SchoolStaffRole: {
    readonly ADMIN: "ADMIN";
    readonly STAFF: "STAFF";
};
export type SchoolStaffRole = (typeof SchoolStaffRole)[keyof typeof SchoolStaffRole];
export declare const SchoolCollectionScope: {
    readonly SCHOOL: "SCHOOL";
    readonly CLASS: "CLASS";
};
export type SchoolCollectionScope = (typeof SchoolCollectionScope)[keyof typeof SchoolCollectionScope];
export declare const CampaignType: {
    readonly SCHOOL: "SCHOOL";
    readonly CLASS: "CLASS";
};
export type CampaignType = (typeof CampaignType)[keyof typeof CampaignType];
export declare const CampaignStatus: {
    readonly DRAFT: "DRAFT";
    readonly ACTIVE: "ACTIVE";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus];

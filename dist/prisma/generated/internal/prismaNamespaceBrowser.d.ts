import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Permission: "Permission";
    readonly RefreshToken: "RefreshToken";
    readonly Role: "Role";
    readonly RolePermission: "RolePermission";
    readonly User: "User";
    readonly UserRole: "UserRole";
    readonly Region: "Region";
    readonly District: "District";
    readonly Community: "Community";
    readonly Household: "Household";
    readonly HouseholdMember: "HouseholdMember";
    readonly MaterialType: "MaterialType";
    readonly Recovery: "Recovery";
    readonly RecoveryItem: "RecoveryItem";
    readonly PointRule: "PointRule";
    readonly Wallet: "Wallet";
    readonly WalletTransaction: "WalletTransaction";
    readonly Reward: "Reward";
    readonly Redemption: "Redemption";
    readonly School: "School";
    readonly SchoolStaff: "SchoolStaff";
    readonly SchoolClass: "SchoolClass";
    readonly SchoolCollection: "SchoolCollection";
    readonly SchoolCollectionItem: "SchoolCollectionItem";
    readonly Campaign: "Campaign";
    readonly CampaignParticipant: "CampaignParticipant";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const PermissionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const RolePermissionScalarFieldEnum: {
    readonly roleId: "roleId";
    readonly permissionId: "permissionId";
};
export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly phone: "phone";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly gender: "gender";
    readonly status: "status";
    readonly dateOfBirth: "dateOfBirth";
    readonly profilePhotoUrl: "profilePhotoUrl";
    readonly regionId: "regionId";
    readonly districtId: "districtId";
    readonly communityId: "communityId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly passwordResetToken: "passwordResetToken";
    readonly passwordResetExpires: "passwordResetExpires";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const UserRoleScalarFieldEnum: {
    readonly userId: "userId";
    readonly roleId: "roleId";
};
export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum];
export declare const RegionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum];
export declare const DistrictScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly regionId: "regionId";
    readonly createdAt: "createdAt";
};
export type DistrictScalarFieldEnum = (typeof DistrictScalarFieldEnum)[keyof typeof DistrictScalarFieldEnum];
export declare const CommunityScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly districtId: "districtId";
    readonly createdAt: "createdAt";
};
export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum];
export declare const HouseholdScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly communityId: "communityId";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type HouseholdScalarFieldEnum = (typeof HouseholdScalarFieldEnum)[keyof typeof HouseholdScalarFieldEnum];
export declare const HouseholdMemberScalarFieldEnum: {
    readonly householdId: "householdId";
    readonly userId: "userId";
    readonly role: "role";
    readonly joinedAt: "joinedAt";
};
export type HouseholdMemberScalarFieldEnum = (typeof HouseholdMemberScalarFieldEnum)[keyof typeof HouseholdMemberScalarFieldEnum];
export declare const MaterialTypeScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MaterialTypeScalarFieldEnum = (typeof MaterialTypeScalarFieldEnum)[keyof typeof MaterialTypeScalarFieldEnum];
export declare const RecoveryScalarFieldEnum: {
    readonly id: "id";
    readonly householdId: "householdId";
    readonly recordedById: "recordedById";
    readonly status: "status";
    readonly totalWeight: "totalWeight";
    readonly totalPoints: "totalPoints";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RecoveryScalarFieldEnum = (typeof RecoveryScalarFieldEnum)[keyof typeof RecoveryScalarFieldEnum];
export declare const RecoveryItemScalarFieldEnum: {
    readonly id: "id";
    readonly recoveryId: "recoveryId";
    readonly materialTypeId: "materialTypeId";
    readonly weight: "weight";
    readonly createdAt: "createdAt";
};
export type RecoveryItemScalarFieldEnum = (typeof RecoveryItemScalarFieldEnum)[keyof typeof RecoveryItemScalarFieldEnum];
export declare const PointRuleScalarFieldEnum: {
    readonly id: "id";
    readonly materialTypeId: "materialTypeId";
    readonly pointsPerKg: "pointsPerKg";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PointRuleScalarFieldEnum = (typeof PointRuleScalarFieldEnum)[keyof typeof PointRuleScalarFieldEnum];
export declare const WalletScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly balance: "balance";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum];
export declare const WalletTransactionScalarFieldEnum: {
    readonly id: "id";
    readonly walletId: "walletId";
    readonly type: "type";
    readonly amount: "amount";
    readonly balanceAfter: "balanceAfter";
    readonly referenceId: "referenceId";
    readonly description: "description";
    readonly createdAt: "createdAt";
};
export type WalletTransactionScalarFieldEnum = (typeof WalletTransactionScalarFieldEnum)[keyof typeof WalletTransactionScalarFieldEnum];
export declare const RewardScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly pointsCost: "pointsCost";
    readonly imageUrl: "imageUrl";
    readonly status: "status";
    readonly stockQuantity: "stockQuantity";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RewardScalarFieldEnum = (typeof RewardScalarFieldEnum)[keyof typeof RewardScalarFieldEnum];
export declare const RedemptionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly rewardId: "rewardId";
    readonly pointsSpent: "pointsSpent";
    readonly status: "status";
    readonly failureReason: "failureReason";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RedemptionScalarFieldEnum = (typeof RedemptionScalarFieldEnum)[keyof typeof RedemptionScalarFieldEnum];
export declare const SchoolScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly regionId: "regionId";
    readonly districtId: "districtId";
    readonly communityId: "communityId";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum];
export declare const SchoolStaffScalarFieldEnum: {
    readonly schoolId: "schoolId";
    readonly userId: "userId";
    readonly role: "role";
    readonly joinedAt: "joinedAt";
};
export type SchoolStaffScalarFieldEnum = (typeof SchoolStaffScalarFieldEnum)[keyof typeof SchoolStaffScalarFieldEnum];
export declare const SchoolClassScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SchoolClassScalarFieldEnum = (typeof SchoolClassScalarFieldEnum)[keyof typeof SchoolClassScalarFieldEnum];
export declare const SchoolCollectionScalarFieldEnum: {
    readonly id: "id";
    readonly schoolId: "schoolId";
    readonly classId: "classId";
    readonly recordedById: "recordedById";
    readonly scope: "scope";
    readonly totalWeight: "totalWeight";
    readonly totalPoints: "totalPoints";
    readonly campaignId: "campaignId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SchoolCollectionScalarFieldEnum = (typeof SchoolCollectionScalarFieldEnum)[keyof typeof SchoolCollectionScalarFieldEnum];
export declare const SchoolCollectionItemScalarFieldEnum: {
    readonly id: "id";
    readonly collectionId: "collectionId";
    readonly materialTypeId: "materialTypeId";
    readonly weight: "weight";
    readonly points: "points";
    readonly createdAt: "createdAt";
};
export type SchoolCollectionItemScalarFieldEnum = (typeof SchoolCollectionItemScalarFieldEnum)[keyof typeof SchoolCollectionItemScalarFieldEnum];
export declare const CampaignScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly type: "type";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum];
export declare const CampaignParticipantScalarFieldEnum: {
    readonly id: "id";
    readonly campaignId: "campaignId";
    readonly schoolId: "schoolId";
    readonly classId: "classId";
    readonly createdAt: "createdAt";
};
export type CampaignParticipantScalarFieldEnum = (typeof CampaignParticipantScalarFieldEnum)[keyof typeof CampaignParticipantScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map
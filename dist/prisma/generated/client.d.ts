import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Permissions
 * const permissions = await prisma.permission.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Permission
 *
 */
export type Permission = Prisma.PermissionModel;
/**
 * Model RefreshToken
 *
 */
export type RefreshToken = Prisma.RefreshTokenModel;
/**
 * Model Role
 *
 */
export type Role = Prisma.RoleModel;
/**
 * Model RolePermission
 *
 */
export type RolePermission = Prisma.RolePermissionModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model UserRole
 *
 */
export type UserRole = Prisma.UserRoleModel;
/**
 * Model Region
 *
 */
export type Region = Prisma.RegionModel;
/**
 * Model District
 *
 */
export type District = Prisma.DistrictModel;
/**
 * Model Community
 *
 */
export type Community = Prisma.CommunityModel;
/**
 * Model Household
 *
 */
export type Household = Prisma.HouseholdModel;
/**
 * Model HouseholdMember
 *
 */
export type HouseholdMember = Prisma.HouseholdMemberModel;
/**
 * Model MaterialType
 *
 */
export type MaterialType = Prisma.MaterialTypeModel;
/**
 * Model Recovery
 *
 */
export type Recovery = Prisma.RecoveryModel;
/**
 * Model RecoveryItem
 *
 */
export type RecoveryItem = Prisma.RecoveryItemModel;
/**
 * Model PointRule
 *
 */
export type PointRule = Prisma.PointRuleModel;
/**
 * Model Wallet
 *
 */
export type Wallet = Prisma.WalletModel;
/**
 * Model WalletTransaction
 *
 */
export type WalletTransaction = Prisma.WalletTransactionModel;
/**
 * Model Reward
 *
 */
export type Reward = Prisma.RewardModel;
/**
 * Model Redemption
 *
 */
export type Redemption = Prisma.RedemptionModel;
/**
 * Model School
 *
 */
export type School = Prisma.SchoolModel;
/**
 * Model SchoolStaff
 *
 */
export type SchoolStaff = Prisma.SchoolStaffModel;
/**
 * Model SchoolClass
 *
 */
export type SchoolClass = Prisma.SchoolClassModel;
/**
 * Model SchoolCollection
 *
 */
export type SchoolCollection = Prisma.SchoolCollectionModel;
/**
 * Model SchoolCollectionItem
 *
 */
export type SchoolCollectionItem = Prisma.SchoolCollectionItemModel;
/**
 * Model Campaign
 *
 */
export type Campaign = Prisma.CampaignModel;
/**
 * Model CampaignParticipant
 *
 */
export type CampaignParticipant = Prisma.CampaignParticipantModel;
//# sourceMappingURL=client.d.ts.map
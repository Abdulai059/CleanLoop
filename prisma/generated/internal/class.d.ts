import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Permissions
  * const permissions = await prisma.permission.findMany()
  * ```
  */
    get permission(): Prisma.PermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RefreshTokens
      * const refreshTokens = await prisma.refreshToken.findMany()
      * ```
      */
    get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.role`: Exposes CRUD operations for the **Role** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Roles
      * const roles = await prisma.role.findMany()
      * ```
      */
    get role(): Prisma.RoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RolePermissions
      * const rolePermissions = await prisma.rolePermission.findMany()
      * ```
      */
    get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Users
      * const users = await prisma.user.findMany()
      * ```
      */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserRoles
      * const userRoles = await prisma.userRole.findMany()
      * ```
      */
    get userRole(): Prisma.UserRoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.region`: Exposes CRUD operations for the **Region** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Regions
      * const regions = await prisma.region.findMany()
      * ```
      */
    get region(): Prisma.RegionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.district`: Exposes CRUD operations for the **District** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Districts
      * const districts = await prisma.district.findMany()
      * ```
      */
    get district(): Prisma.DistrictDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.community`: Exposes CRUD operations for the **Community** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Communities
      * const communities = await prisma.community.findMany()
      * ```
      */
    get community(): Prisma.CommunityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.household`: Exposes CRUD operations for the **Household** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Households
      * const households = await prisma.household.findMany()
      * ```
      */
    get household(): Prisma.HouseholdDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.householdMember`: Exposes CRUD operations for the **HouseholdMember** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more HouseholdMembers
      * const householdMembers = await prisma.householdMember.findMany()
      * ```
      */
    get householdMember(): Prisma.HouseholdMemberDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.materialType`: Exposes CRUD operations for the **MaterialType** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MaterialTypes
      * const materialTypes = await prisma.materialType.findMany()
      * ```
      */
    get materialType(): Prisma.MaterialTypeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.recovery`: Exposes CRUD operations for the **Recovery** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Recoveries
      * const recoveries = await prisma.recovery.findMany()
      * ```
      */
    get recovery(): Prisma.RecoveryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.recoveryItem`: Exposes CRUD operations for the **RecoveryItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RecoveryItems
      * const recoveryItems = await prisma.recoveryItem.findMany()
      * ```
      */
    get recoveryItem(): Prisma.RecoveryItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pointRule`: Exposes CRUD operations for the **PointRule** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PointRules
      * const pointRules = await prisma.pointRule.findMany()
      * ```
      */
    get pointRule(): Prisma.PointRuleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Wallets
      * const wallets = await prisma.wallet.findMany()
      * ```
      */
    get wallet(): Prisma.WalletDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.walletTransaction`: Exposes CRUD operations for the **WalletTransaction** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more WalletTransactions
      * const walletTransactions = await prisma.walletTransaction.findMany()
      * ```
      */
    get walletTransaction(): Prisma.WalletTransactionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.reward`: Exposes CRUD operations for the **Reward** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Rewards
      * const rewards = await prisma.reward.findMany()
      * ```
      */
    get reward(): Prisma.RewardDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.redemption`: Exposes CRUD operations for the **Redemption** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Redemptions
      * const redemptions = await prisma.redemption.findMany()
      * ```
      */
    get redemption(): Prisma.RedemptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.school`: Exposes CRUD operations for the **School** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Schools
      * const schools = await prisma.school.findMany()
      * ```
      */
    get school(): Prisma.SchoolDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.schoolStaff`: Exposes CRUD operations for the **SchoolStaff** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SchoolStaffs
      * const schoolStaffs = await prisma.schoolStaff.findMany()
      * ```
      */
    get schoolStaff(): Prisma.SchoolStaffDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.schoolClass`: Exposes CRUD operations for the **SchoolClass** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SchoolClasses
      * const schoolClasses = await prisma.schoolClass.findMany()
      * ```
      */
    get schoolClass(): Prisma.SchoolClassDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.schoolCollection`: Exposes CRUD operations for the **SchoolCollection** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SchoolCollections
      * const schoolCollections = await prisma.schoolCollection.findMany()
      * ```
      */
    get schoolCollection(): Prisma.SchoolCollectionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.schoolCollectionItem`: Exposes CRUD operations for the **SchoolCollectionItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SchoolCollectionItems
      * const schoolCollectionItems = await prisma.schoolCollectionItem.findMany()
      * ```
      */
    get schoolCollectionItem(): Prisma.SchoolCollectionItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Campaigns
      * const campaigns = await prisma.campaign.findMany()
      * ```
      */
    get campaign(): Prisma.CampaignDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.campaignParticipant`: Exposes CRUD operations for the **CampaignParticipant** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CampaignParticipants
      * const campaignParticipants = await prisma.campaignParticipant.findMany()
      * ```
      */
    get campaignParticipant(): Prisma.CampaignParticipantDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;

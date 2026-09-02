import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums";
import type * as Prisma from "./internal/prismaNamespace";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null;
};
export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus;
};
export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel>;
};
export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
};
export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type EnumHouseholdRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseholdRole | Prisma.EnumHouseholdRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.HouseholdRole[] | Prisma.ListEnumHouseholdRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.HouseholdRole[] | Prisma.ListEnumHouseholdRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumHouseholdRoleFilter<$PrismaModel> | $Enums.HouseholdRole;
};
export type EnumHouseholdRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseholdRole | Prisma.EnumHouseholdRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.HouseholdRole[] | Prisma.ListEnumHouseholdRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.HouseholdRole[] | Prisma.ListEnumHouseholdRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumHouseholdRoleWithAggregatesFilter<$PrismaModel> | $Enums.HouseholdRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumHouseholdRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumHouseholdRoleFilter<$PrismaModel>;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type EnumRecoveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecoveryStatus | Prisma.EnumRecoveryStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RecoveryStatus[] | Prisma.ListEnumRecoveryStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecoveryStatus[] | Prisma.ListEnumRecoveryStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecoveryStatusFilter<$PrismaModel> | $Enums.RecoveryStatus;
};
export type DecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumRecoveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecoveryStatus | Prisma.EnumRecoveryStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RecoveryStatus[] | Prisma.ListEnumRecoveryStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecoveryStatus[] | Prisma.ListEnumRecoveryStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecoveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecoveryStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRecoveryStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRecoveryStatusFilter<$PrismaModel>;
};
export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumWalletTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WalletTransactionType | Prisma.EnumWalletTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.WalletTransactionType[] | Prisma.ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WalletTransactionType[] | Prisma.ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWalletTransactionTypeFilter<$PrismaModel> | $Enums.WalletTransactionType;
};
export type EnumWalletTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WalletTransactionType | Prisma.EnumWalletTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.WalletTransactionType[] | Prisma.ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WalletTransactionType[] | Prisma.ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWalletTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.WalletTransactionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWalletTransactionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWalletTransactionTypeFilter<$PrismaModel>;
};
export type EnumRewardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | Prisma.EnumRewardStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RewardStatus[] | Prisma.ListEnumRewardStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RewardStatus[] | Prisma.ListEnumRewardStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRewardStatusFilter<$PrismaModel> | $Enums.RewardStatus;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type EnumRewardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | Prisma.EnumRewardStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RewardStatus[] | Prisma.ListEnumRewardStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RewardStatus[] | Prisma.ListEnumRewardStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRewardStatusWithAggregatesFilter<$PrismaModel> | $Enums.RewardStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRewardStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRewardStatusFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type EnumRedemptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RedemptionStatus | Prisma.EnumRedemptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RedemptionStatus[] | Prisma.ListEnumRedemptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RedemptionStatus[] | Prisma.ListEnumRedemptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRedemptionStatusFilter<$PrismaModel> | $Enums.RedemptionStatus;
};
export type EnumRedemptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RedemptionStatus | Prisma.EnumRedemptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RedemptionStatus[] | Prisma.ListEnumRedemptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RedemptionStatus[] | Prisma.ListEnumRedemptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRedemptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.RedemptionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRedemptionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRedemptionStatusFilter<$PrismaModel>;
};
export type EnumSchoolStaffRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolStaffRole | Prisma.EnumSchoolStaffRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.SchoolStaffRole[] | Prisma.ListEnumSchoolStaffRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SchoolStaffRole[] | Prisma.ListEnumSchoolStaffRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSchoolStaffRoleFilter<$PrismaModel> | $Enums.SchoolStaffRole;
};
export type EnumSchoolStaffRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolStaffRole | Prisma.EnumSchoolStaffRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.SchoolStaffRole[] | Prisma.ListEnumSchoolStaffRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SchoolStaffRole[] | Prisma.ListEnumSchoolStaffRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSchoolStaffRoleWithAggregatesFilter<$PrismaModel> | $Enums.SchoolStaffRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSchoolStaffRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSchoolStaffRoleFilter<$PrismaModel>;
};
export type EnumSchoolCollectionScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolCollectionScope | Prisma.EnumSchoolCollectionScopeFieldRefInput<$PrismaModel>;
    in?: $Enums.SchoolCollectionScope[] | Prisma.ListEnumSchoolCollectionScopeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SchoolCollectionScope[] | Prisma.ListEnumSchoolCollectionScopeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSchoolCollectionScopeFilter<$PrismaModel> | $Enums.SchoolCollectionScope;
};
export type EnumSchoolCollectionScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolCollectionScope | Prisma.EnumSchoolCollectionScopeFieldRefInput<$PrismaModel>;
    in?: $Enums.SchoolCollectionScope[] | Prisma.ListEnumSchoolCollectionScopeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SchoolCollectionScope[] | Prisma.ListEnumSchoolCollectionScopeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSchoolCollectionScopeWithAggregatesFilter<$PrismaModel> | $Enums.SchoolCollectionScope;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSchoolCollectionScopeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSchoolCollectionScopeFilter<$PrismaModel>;
};
export type EnumCampaignTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignType | Prisma.EnumCampaignTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignTypeFilter<$PrismaModel> | $Enums.CampaignType;
};
export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | Prisma.EnumCampaignStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus;
};
export type EnumCampaignTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignType | Prisma.EnumCampaignTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignTypeWithAggregatesFilter<$PrismaModel> | $Enums.CampaignType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCampaignTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCampaignTypeFilter<$PrismaModel>;
};
export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | Prisma.EnumCampaignStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCampaignStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCampaignStatusFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null;
};
export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus;
};
export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | Prisma.EnumGenderFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Gender[] | Prisma.ListEnumGenderFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGenderNullableFilter<$PrismaModel>;
};
export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | Prisma.EnumUserStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserStatus[] | Prisma.ListEnumUserStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserStatusFilter<$PrismaModel>;
};
export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type NestedEnumHouseholdRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseholdRole | Prisma.EnumHouseholdRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.HouseholdRole[] | Prisma.ListEnumHouseholdRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.HouseholdRole[] | Prisma.ListEnumHouseholdRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumHouseholdRoleFilter<$PrismaModel> | $Enums.HouseholdRole;
};
export type NestedEnumHouseholdRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HouseholdRole | Prisma.EnumHouseholdRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.HouseholdRole[] | Prisma.ListEnumHouseholdRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.HouseholdRole[] | Prisma.ListEnumHouseholdRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumHouseholdRoleWithAggregatesFilter<$PrismaModel> | $Enums.HouseholdRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumHouseholdRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumHouseholdRoleFilter<$PrismaModel>;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedEnumRecoveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecoveryStatus | Prisma.EnumRecoveryStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RecoveryStatus[] | Prisma.ListEnumRecoveryStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecoveryStatus[] | Prisma.ListEnumRecoveryStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecoveryStatusFilter<$PrismaModel> | $Enums.RecoveryStatus;
};
export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NestedEnumRecoveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecoveryStatus | Prisma.EnumRecoveryStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RecoveryStatus[] | Prisma.ListEnumRecoveryStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecoveryStatus[] | Prisma.ListEnumRecoveryStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecoveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecoveryStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRecoveryStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRecoveryStatusFilter<$PrismaModel>;
};
export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumWalletTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WalletTransactionType | Prisma.EnumWalletTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.WalletTransactionType[] | Prisma.ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WalletTransactionType[] | Prisma.ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWalletTransactionTypeFilter<$PrismaModel> | $Enums.WalletTransactionType;
};
export type NestedEnumWalletTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WalletTransactionType | Prisma.EnumWalletTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.WalletTransactionType[] | Prisma.ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.WalletTransactionType[] | Prisma.ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumWalletTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.WalletTransactionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumWalletTransactionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumWalletTransactionTypeFilter<$PrismaModel>;
};
export type NestedEnumRewardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | Prisma.EnumRewardStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RewardStatus[] | Prisma.ListEnumRewardStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RewardStatus[] | Prisma.ListEnumRewardStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRewardStatusFilter<$PrismaModel> | $Enums.RewardStatus;
};
export type NestedEnumRewardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | Prisma.EnumRewardStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RewardStatus[] | Prisma.ListEnumRewardStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RewardStatus[] | Prisma.ListEnumRewardStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRewardStatusWithAggregatesFilter<$PrismaModel> | $Enums.RewardStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRewardStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRewardStatusFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumRedemptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RedemptionStatus | Prisma.EnumRedemptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RedemptionStatus[] | Prisma.ListEnumRedemptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RedemptionStatus[] | Prisma.ListEnumRedemptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRedemptionStatusFilter<$PrismaModel> | $Enums.RedemptionStatus;
};
export type NestedEnumRedemptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RedemptionStatus | Prisma.EnumRedemptionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RedemptionStatus[] | Prisma.ListEnumRedemptionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RedemptionStatus[] | Prisma.ListEnumRedemptionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRedemptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.RedemptionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRedemptionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRedemptionStatusFilter<$PrismaModel>;
};
export type NestedEnumSchoolStaffRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolStaffRole | Prisma.EnumSchoolStaffRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.SchoolStaffRole[] | Prisma.ListEnumSchoolStaffRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SchoolStaffRole[] | Prisma.ListEnumSchoolStaffRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSchoolStaffRoleFilter<$PrismaModel> | $Enums.SchoolStaffRole;
};
export type NestedEnumSchoolStaffRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolStaffRole | Prisma.EnumSchoolStaffRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.SchoolStaffRole[] | Prisma.ListEnumSchoolStaffRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SchoolStaffRole[] | Prisma.ListEnumSchoolStaffRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSchoolStaffRoleWithAggregatesFilter<$PrismaModel> | $Enums.SchoolStaffRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSchoolStaffRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSchoolStaffRoleFilter<$PrismaModel>;
};
export type NestedEnumSchoolCollectionScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolCollectionScope | Prisma.EnumSchoolCollectionScopeFieldRefInput<$PrismaModel>;
    in?: $Enums.SchoolCollectionScope[] | Prisma.ListEnumSchoolCollectionScopeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SchoolCollectionScope[] | Prisma.ListEnumSchoolCollectionScopeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSchoolCollectionScopeFilter<$PrismaModel> | $Enums.SchoolCollectionScope;
};
export type NestedEnumSchoolCollectionScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SchoolCollectionScope | Prisma.EnumSchoolCollectionScopeFieldRefInput<$PrismaModel>;
    in?: $Enums.SchoolCollectionScope[] | Prisma.ListEnumSchoolCollectionScopeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SchoolCollectionScope[] | Prisma.ListEnumSchoolCollectionScopeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSchoolCollectionScopeWithAggregatesFilter<$PrismaModel> | $Enums.SchoolCollectionScope;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSchoolCollectionScopeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSchoolCollectionScopeFilter<$PrismaModel>;
};
export type NestedEnumCampaignTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignType | Prisma.EnumCampaignTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignTypeFilter<$PrismaModel> | $Enums.CampaignType;
};
export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | Prisma.EnumCampaignStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus;
};
export type NestedEnumCampaignTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignType | Prisma.EnumCampaignTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignTypeWithAggregatesFilter<$PrismaModel> | $Enums.CampaignType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCampaignTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCampaignTypeFilter<$PrismaModel>;
};
export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | Prisma.EnumCampaignStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCampaignStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCampaignStatusFilter<$PrismaModel>;
};

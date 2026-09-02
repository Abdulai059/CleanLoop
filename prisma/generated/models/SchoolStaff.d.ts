import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model SchoolStaff
 *
 */
export type SchoolStaffModel = runtime.Types.Result.DefaultSelection<Prisma.$SchoolStaffPayload>;
export type AggregateSchoolStaff = {
    _count: SchoolStaffCountAggregateOutputType | null;
    _min: SchoolStaffMinAggregateOutputType | null;
    _max: SchoolStaffMaxAggregateOutputType | null;
};
export type SchoolStaffMinAggregateOutputType = {
    schoolId: string | null;
    userId: string | null;
    role: $Enums.SchoolStaffRole | null;
    joinedAt: Date | null;
};
export type SchoolStaffMaxAggregateOutputType = {
    schoolId: string | null;
    userId: string | null;
    role: $Enums.SchoolStaffRole | null;
    joinedAt: Date | null;
};
export type SchoolStaffCountAggregateOutputType = {
    schoolId: number;
    userId: number;
    role: number;
    joinedAt: number;
    _all: number;
};
export type SchoolStaffMinAggregateInputType = {
    schoolId?: true;
    userId?: true;
    role?: true;
    joinedAt?: true;
};
export type SchoolStaffMaxAggregateInputType = {
    schoolId?: true;
    userId?: true;
    role?: true;
    joinedAt?: true;
};
export type SchoolStaffCountAggregateInputType = {
    schoolId?: true;
    userId?: true;
    role?: true;
    joinedAt?: true;
    _all?: true;
};
export type SchoolStaffAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolStaff to aggregate.
     */
    where?: Prisma.SchoolStaffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SchoolStaffs to fetch.
     */
    orderBy?: Prisma.SchoolStaffOrderByWithRelationInput | Prisma.SchoolStaffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SchoolStaffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SchoolStaffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SchoolStaffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SchoolStaffs
    **/
    _count?: true | SchoolStaffCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SchoolStaffMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SchoolStaffMaxAggregateInputType;
};
export type GetSchoolStaffAggregateType<T extends SchoolStaffAggregateArgs> = {
    [P in keyof T & keyof AggregateSchoolStaff]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSchoolStaff[P]> : Prisma.GetScalarType<T[P], AggregateSchoolStaff[P]>;
};
export type SchoolStaffGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolStaffWhereInput;
    orderBy?: Prisma.SchoolStaffOrderByWithAggregationInput | Prisma.SchoolStaffOrderByWithAggregationInput[];
    by: Prisma.SchoolStaffScalarFieldEnum[] | Prisma.SchoolStaffScalarFieldEnum;
    having?: Prisma.SchoolStaffScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SchoolStaffCountAggregateInputType | true;
    _min?: SchoolStaffMinAggregateInputType;
    _max?: SchoolStaffMaxAggregateInputType;
};
export type SchoolStaffGroupByOutputType = {
    schoolId: string;
    userId: string;
    role: $Enums.SchoolStaffRole;
    joinedAt: Date;
    _count: SchoolStaffCountAggregateOutputType | null;
    _min: SchoolStaffMinAggregateOutputType | null;
    _max: SchoolStaffMaxAggregateOutputType | null;
};
export type GetSchoolStaffGroupByPayload<T extends SchoolStaffGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SchoolStaffGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SchoolStaffGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SchoolStaffGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SchoolStaffGroupByOutputType[P]>;
}>>;
export type SchoolStaffWhereInput = {
    AND?: Prisma.SchoolStaffWhereInput | Prisma.SchoolStaffWhereInput[];
    OR?: Prisma.SchoolStaffWhereInput[];
    NOT?: Prisma.SchoolStaffWhereInput | Prisma.SchoolStaffWhereInput[];
    schoolId?: Prisma.StringFilter<"SchoolStaff"> | string;
    userId?: Prisma.StringFilter<"SchoolStaff"> | string;
    role?: Prisma.EnumSchoolStaffRoleFilter<"SchoolStaff"> | $Enums.SchoolStaffRole;
    joinedAt?: Prisma.DateTimeFilter<"SchoolStaff"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type SchoolStaffOrderByWithRelationInput = {
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type SchoolStaffWhereUniqueInput = Prisma.AtLeast<{
    schoolId_userId?: Prisma.SchoolStaffSchoolIdUserIdCompoundUniqueInput;
    AND?: Prisma.SchoolStaffWhereInput | Prisma.SchoolStaffWhereInput[];
    OR?: Prisma.SchoolStaffWhereInput[];
    NOT?: Prisma.SchoolStaffWhereInput | Prisma.SchoolStaffWhereInput[];
    schoolId?: Prisma.StringFilter<"SchoolStaff"> | string;
    userId?: Prisma.StringFilter<"SchoolStaff"> | string;
    role?: Prisma.EnumSchoolStaffRoleFilter<"SchoolStaff"> | $Enums.SchoolStaffRole;
    joinedAt?: Prisma.DateTimeFilter<"SchoolStaff"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "schoolId_userId">;
export type SchoolStaffOrderByWithAggregationInput = {
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    _count?: Prisma.SchoolStaffCountOrderByAggregateInput;
    _max?: Prisma.SchoolStaffMaxOrderByAggregateInput;
    _min?: Prisma.SchoolStaffMinOrderByAggregateInput;
};
export type SchoolStaffScalarWhereWithAggregatesInput = {
    AND?: Prisma.SchoolStaffScalarWhereWithAggregatesInput | Prisma.SchoolStaffScalarWhereWithAggregatesInput[];
    OR?: Prisma.SchoolStaffScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SchoolStaffScalarWhereWithAggregatesInput | Prisma.SchoolStaffScalarWhereWithAggregatesInput[];
    schoolId?: Prisma.StringWithAggregatesFilter<"SchoolStaff"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"SchoolStaff"> | string;
    role?: Prisma.EnumSchoolStaffRoleWithAggregatesFilter<"SchoolStaff"> | $Enums.SchoolStaffRole;
    joinedAt?: Prisma.DateTimeWithAggregatesFilter<"SchoolStaff"> | Date | string;
};
export type SchoolStaffCreateInput = {
    role?: $Enums.SchoolStaffRole;
    joinedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutStaffInput;
    user: Prisma.UserCreateNestedOneWithoutSchoolStaffMembershipsInput;
};
export type SchoolStaffUncheckedCreateInput = {
    schoolId: string;
    userId: string;
    role?: $Enums.SchoolStaffRole;
    joinedAt?: Date | string;
};
export type SchoolStaffUpdateInput = {
    role?: Prisma.EnumSchoolStaffRoleFieldUpdateOperationsInput | $Enums.SchoolStaffRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStaffNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutSchoolStaffMembershipsNestedInput;
};
export type SchoolStaffUncheckedUpdateInput = {
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumSchoolStaffRoleFieldUpdateOperationsInput | $Enums.SchoolStaffRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolStaffCreateManyInput = {
    schoolId: string;
    userId: string;
    role?: $Enums.SchoolStaffRole;
    joinedAt?: Date | string;
};
export type SchoolStaffUpdateManyMutationInput = {
    role?: Prisma.EnumSchoolStaffRoleFieldUpdateOperationsInput | $Enums.SchoolStaffRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolStaffUncheckedUpdateManyInput = {
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumSchoolStaffRoleFieldUpdateOperationsInput | $Enums.SchoolStaffRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolStaffListRelationFilter = {
    every?: Prisma.SchoolStaffWhereInput;
    some?: Prisma.SchoolStaffWhereInput;
    none?: Prisma.SchoolStaffWhereInput;
};
export type SchoolStaffOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SchoolStaffSchoolIdUserIdCompoundUniqueInput = {
    schoolId: string;
    userId: string;
};
export type SchoolStaffCountOrderByAggregateInput = {
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
};
export type SchoolStaffMaxOrderByAggregateInput = {
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
};
export type SchoolStaffMinOrderByAggregateInput = {
    schoolId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
};
export type SchoolStaffCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SchoolStaffCreateWithoutUserInput, Prisma.SchoolStaffUncheckedCreateWithoutUserInput> | Prisma.SchoolStaffCreateWithoutUserInput[] | Prisma.SchoolStaffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SchoolStaffCreateOrConnectWithoutUserInput | Prisma.SchoolStaffCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SchoolStaffCreateManyUserInputEnvelope;
    connect?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
};
export type SchoolStaffUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SchoolStaffCreateWithoutUserInput, Prisma.SchoolStaffUncheckedCreateWithoutUserInput> | Prisma.SchoolStaffCreateWithoutUserInput[] | Prisma.SchoolStaffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SchoolStaffCreateOrConnectWithoutUserInput | Prisma.SchoolStaffCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SchoolStaffCreateManyUserInputEnvelope;
    connect?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
};
export type SchoolStaffUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolStaffCreateWithoutUserInput, Prisma.SchoolStaffUncheckedCreateWithoutUserInput> | Prisma.SchoolStaffCreateWithoutUserInput[] | Prisma.SchoolStaffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SchoolStaffCreateOrConnectWithoutUserInput | Prisma.SchoolStaffCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SchoolStaffUpsertWithWhereUniqueWithoutUserInput | Prisma.SchoolStaffUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SchoolStaffCreateManyUserInputEnvelope;
    set?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    disconnect?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    delete?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    connect?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    update?: Prisma.SchoolStaffUpdateWithWhereUniqueWithoutUserInput | Prisma.SchoolStaffUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SchoolStaffUpdateManyWithWhereWithoutUserInput | Prisma.SchoolStaffUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SchoolStaffScalarWhereInput | Prisma.SchoolStaffScalarWhereInput[];
};
export type SchoolStaffUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolStaffCreateWithoutUserInput, Prisma.SchoolStaffUncheckedCreateWithoutUserInput> | Prisma.SchoolStaffCreateWithoutUserInput[] | Prisma.SchoolStaffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SchoolStaffCreateOrConnectWithoutUserInput | Prisma.SchoolStaffCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SchoolStaffUpsertWithWhereUniqueWithoutUserInput | Prisma.SchoolStaffUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SchoolStaffCreateManyUserInputEnvelope;
    set?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    disconnect?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    delete?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    connect?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    update?: Prisma.SchoolStaffUpdateWithWhereUniqueWithoutUserInput | Prisma.SchoolStaffUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SchoolStaffUpdateManyWithWhereWithoutUserInput | Prisma.SchoolStaffUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SchoolStaffScalarWhereInput | Prisma.SchoolStaffScalarWhereInput[];
};
export type SchoolStaffCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.SchoolStaffCreateWithoutSchoolInput, Prisma.SchoolStaffUncheckedCreateWithoutSchoolInput> | Prisma.SchoolStaffCreateWithoutSchoolInput[] | Prisma.SchoolStaffUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SchoolStaffCreateOrConnectWithoutSchoolInput | Prisma.SchoolStaffCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.SchoolStaffCreateManySchoolInputEnvelope;
    connect?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
};
export type SchoolStaffUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.SchoolStaffCreateWithoutSchoolInput, Prisma.SchoolStaffUncheckedCreateWithoutSchoolInput> | Prisma.SchoolStaffCreateWithoutSchoolInput[] | Prisma.SchoolStaffUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SchoolStaffCreateOrConnectWithoutSchoolInput | Prisma.SchoolStaffCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.SchoolStaffCreateManySchoolInputEnvelope;
    connect?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
};
export type SchoolStaffUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolStaffCreateWithoutSchoolInput, Prisma.SchoolStaffUncheckedCreateWithoutSchoolInput> | Prisma.SchoolStaffCreateWithoutSchoolInput[] | Prisma.SchoolStaffUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SchoolStaffCreateOrConnectWithoutSchoolInput | Prisma.SchoolStaffCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.SchoolStaffUpsertWithWhereUniqueWithoutSchoolInput | Prisma.SchoolStaffUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.SchoolStaffCreateManySchoolInputEnvelope;
    set?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    disconnect?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    delete?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    connect?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    update?: Prisma.SchoolStaffUpdateWithWhereUniqueWithoutSchoolInput | Prisma.SchoolStaffUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.SchoolStaffUpdateManyWithWhereWithoutSchoolInput | Prisma.SchoolStaffUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.SchoolStaffScalarWhereInput | Prisma.SchoolStaffScalarWhereInput[];
};
export type SchoolStaffUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolStaffCreateWithoutSchoolInput, Prisma.SchoolStaffUncheckedCreateWithoutSchoolInput> | Prisma.SchoolStaffCreateWithoutSchoolInput[] | Prisma.SchoolStaffUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SchoolStaffCreateOrConnectWithoutSchoolInput | Prisma.SchoolStaffCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.SchoolStaffUpsertWithWhereUniqueWithoutSchoolInput | Prisma.SchoolStaffUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.SchoolStaffCreateManySchoolInputEnvelope;
    set?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    disconnect?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    delete?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    connect?: Prisma.SchoolStaffWhereUniqueInput | Prisma.SchoolStaffWhereUniqueInput[];
    update?: Prisma.SchoolStaffUpdateWithWhereUniqueWithoutSchoolInput | Prisma.SchoolStaffUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.SchoolStaffUpdateManyWithWhereWithoutSchoolInput | Prisma.SchoolStaffUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.SchoolStaffScalarWhereInput | Prisma.SchoolStaffScalarWhereInput[];
};
export type EnumSchoolStaffRoleFieldUpdateOperationsInput = {
    set?: $Enums.SchoolStaffRole;
};
export type SchoolStaffCreateWithoutUserInput = {
    role?: $Enums.SchoolStaffRole;
    joinedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutStaffInput;
};
export type SchoolStaffUncheckedCreateWithoutUserInput = {
    schoolId: string;
    role?: $Enums.SchoolStaffRole;
    joinedAt?: Date | string;
};
export type SchoolStaffCreateOrConnectWithoutUserInput = {
    where: Prisma.SchoolStaffWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolStaffCreateWithoutUserInput, Prisma.SchoolStaffUncheckedCreateWithoutUserInput>;
};
export type SchoolStaffCreateManyUserInputEnvelope = {
    data: Prisma.SchoolStaffCreateManyUserInput | Prisma.SchoolStaffCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SchoolStaffUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SchoolStaffWhereUniqueInput;
    update: Prisma.XOR<Prisma.SchoolStaffUpdateWithoutUserInput, Prisma.SchoolStaffUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SchoolStaffCreateWithoutUserInput, Prisma.SchoolStaffUncheckedCreateWithoutUserInput>;
};
export type SchoolStaffUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SchoolStaffWhereUniqueInput;
    data: Prisma.XOR<Prisma.SchoolStaffUpdateWithoutUserInput, Prisma.SchoolStaffUncheckedUpdateWithoutUserInput>;
};
export type SchoolStaffUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SchoolStaffScalarWhereInput;
    data: Prisma.XOR<Prisma.SchoolStaffUpdateManyMutationInput, Prisma.SchoolStaffUncheckedUpdateManyWithoutUserInput>;
};
export type SchoolStaffScalarWhereInput = {
    AND?: Prisma.SchoolStaffScalarWhereInput | Prisma.SchoolStaffScalarWhereInput[];
    OR?: Prisma.SchoolStaffScalarWhereInput[];
    NOT?: Prisma.SchoolStaffScalarWhereInput | Prisma.SchoolStaffScalarWhereInput[];
    schoolId?: Prisma.StringFilter<"SchoolStaff"> | string;
    userId?: Prisma.StringFilter<"SchoolStaff"> | string;
    role?: Prisma.EnumSchoolStaffRoleFilter<"SchoolStaff"> | $Enums.SchoolStaffRole;
    joinedAt?: Prisma.DateTimeFilter<"SchoolStaff"> | Date | string;
};
export type SchoolStaffCreateWithoutSchoolInput = {
    role?: $Enums.SchoolStaffRole;
    joinedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSchoolStaffMembershipsInput;
};
export type SchoolStaffUncheckedCreateWithoutSchoolInput = {
    userId: string;
    role?: $Enums.SchoolStaffRole;
    joinedAt?: Date | string;
};
export type SchoolStaffCreateOrConnectWithoutSchoolInput = {
    where: Prisma.SchoolStaffWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolStaffCreateWithoutSchoolInput, Prisma.SchoolStaffUncheckedCreateWithoutSchoolInput>;
};
export type SchoolStaffCreateManySchoolInputEnvelope = {
    data: Prisma.SchoolStaffCreateManySchoolInput | Prisma.SchoolStaffCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type SchoolStaffUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.SchoolStaffWhereUniqueInput;
    update: Prisma.XOR<Prisma.SchoolStaffUpdateWithoutSchoolInput, Prisma.SchoolStaffUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.SchoolStaffCreateWithoutSchoolInput, Prisma.SchoolStaffUncheckedCreateWithoutSchoolInput>;
};
export type SchoolStaffUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.SchoolStaffWhereUniqueInput;
    data: Prisma.XOR<Prisma.SchoolStaffUpdateWithoutSchoolInput, Prisma.SchoolStaffUncheckedUpdateWithoutSchoolInput>;
};
export type SchoolStaffUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.SchoolStaffScalarWhereInput;
    data: Prisma.XOR<Prisma.SchoolStaffUpdateManyMutationInput, Prisma.SchoolStaffUncheckedUpdateManyWithoutSchoolInput>;
};
export type SchoolStaffCreateManyUserInput = {
    schoolId: string;
    role?: $Enums.SchoolStaffRole;
    joinedAt?: Date | string;
};
export type SchoolStaffUpdateWithoutUserInput = {
    role?: Prisma.EnumSchoolStaffRoleFieldUpdateOperationsInput | $Enums.SchoolStaffRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStaffNestedInput;
};
export type SchoolStaffUncheckedUpdateWithoutUserInput = {
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumSchoolStaffRoleFieldUpdateOperationsInput | $Enums.SchoolStaffRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolStaffUncheckedUpdateManyWithoutUserInput = {
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumSchoolStaffRoleFieldUpdateOperationsInput | $Enums.SchoolStaffRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolStaffCreateManySchoolInput = {
    userId: string;
    role?: $Enums.SchoolStaffRole;
    joinedAt?: Date | string;
};
export type SchoolStaffUpdateWithoutSchoolInput = {
    role?: Prisma.EnumSchoolStaffRoleFieldUpdateOperationsInput | $Enums.SchoolStaffRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSchoolStaffMembershipsNestedInput;
};
export type SchoolStaffUncheckedUpdateWithoutSchoolInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumSchoolStaffRoleFieldUpdateOperationsInput | $Enums.SchoolStaffRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolStaffUncheckedUpdateManyWithoutSchoolInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumSchoolStaffRoleFieldUpdateOperationsInput | $Enums.SchoolStaffRole;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolStaffSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    schoolId?: boolean;
    userId?: boolean;
    role?: boolean;
    joinedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schoolStaff"]>;
export type SchoolStaffSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    schoolId?: boolean;
    userId?: boolean;
    role?: boolean;
    joinedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schoolStaff"]>;
export type SchoolStaffSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    schoolId?: boolean;
    userId?: boolean;
    role?: boolean;
    joinedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schoolStaff"]>;
export type SchoolStaffSelectScalar = {
    schoolId?: boolean;
    userId?: boolean;
    role?: boolean;
    joinedAt?: boolean;
};
export type SchoolStaffOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"schoolId" | "userId" | "role" | "joinedAt", ExtArgs["result"]["schoolStaff"]>;
export type SchoolStaffInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SchoolStaffIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SchoolStaffIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SchoolStaffPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SchoolStaff";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        schoolId: string;
        userId: string;
        role: $Enums.SchoolStaffRole;
        joinedAt: Date;
    }, ExtArgs["result"]["schoolStaff"]>;
    composites: {};
};
export type SchoolStaffGetPayload<S extends boolean | null | undefined | SchoolStaffDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SchoolStaffPayload, S>;
export type SchoolStaffCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SchoolStaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SchoolStaffCountAggregateInputType | true;
};
export interface SchoolStaffDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SchoolStaff'];
        meta: {
            name: 'SchoolStaff';
        };
    };
    /**
     * Find zero or one SchoolStaff that matches the filter.
     * @param {SchoolStaffFindUniqueArgs} args - Arguments to find a SchoolStaff
     * @example
     * // Get one SchoolStaff
     * const schoolStaff = await prisma.schoolStaff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolStaffFindUniqueArgs>(args: Prisma.SelectSubset<T, SchoolStaffFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SchoolStaffClient<runtime.Types.Result.GetResult<Prisma.$SchoolStaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SchoolStaff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolStaffFindUniqueOrThrowArgs} args - Arguments to find a SchoolStaff
     * @example
     * // Get one SchoolStaff
     * const schoolStaff = await prisma.schoolStaff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolStaffFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SchoolStaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SchoolStaffClient<runtime.Types.Result.GetResult<Prisma.$SchoolStaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SchoolStaff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolStaffFindFirstArgs} args - Arguments to find a SchoolStaff
     * @example
     * // Get one SchoolStaff
     * const schoolStaff = await prisma.schoolStaff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolStaffFindFirstArgs>(args?: Prisma.SelectSubset<T, SchoolStaffFindFirstArgs<ExtArgs>>): Prisma.Prisma__SchoolStaffClient<runtime.Types.Result.GetResult<Prisma.$SchoolStaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SchoolStaff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolStaffFindFirstOrThrowArgs} args - Arguments to find a SchoolStaff
     * @example
     * // Get one SchoolStaff
     * const schoolStaff = await prisma.schoolStaff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolStaffFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SchoolStaffFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SchoolStaffClient<runtime.Types.Result.GetResult<Prisma.$SchoolStaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SchoolStaffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolStaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolStaffs
     * const schoolStaffs = await prisma.schoolStaff.findMany()
     *
     * // Get first 10 SchoolStaffs
     * const schoolStaffs = await prisma.schoolStaff.findMany({ take: 10 })
     *
     * // Only select the `schoolId`
     * const schoolStaffWithSchoolIdOnly = await prisma.schoolStaff.findMany({ select: { schoolId: true } })
     *
     */
    findMany<T extends SchoolStaffFindManyArgs>(args?: Prisma.SelectSubset<T, SchoolStaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SchoolStaff.
     * @param {SchoolStaffCreateArgs} args - Arguments to create a SchoolStaff.
     * @example
     * // Create one SchoolStaff
     * const SchoolStaff = await prisma.schoolStaff.create({
     *   data: {
     *     // ... data to create a SchoolStaff
     *   }
     * })
     *
     */
    create<T extends SchoolStaffCreateArgs>(args: Prisma.SelectSubset<T, SchoolStaffCreateArgs<ExtArgs>>): Prisma.Prisma__SchoolStaffClient<runtime.Types.Result.GetResult<Prisma.$SchoolStaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SchoolStaffs.
     * @param {SchoolStaffCreateManyArgs} args - Arguments to create many SchoolStaffs.
     * @example
     * // Create many SchoolStaffs
     * const schoolStaff = await prisma.schoolStaff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SchoolStaffCreateManyArgs>(args?: Prisma.SelectSubset<T, SchoolStaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SchoolStaffs and returns the data saved in the database.
     * @param {SchoolStaffCreateManyAndReturnArgs} args - Arguments to create many SchoolStaffs.
     * @example
     * // Create many SchoolStaffs
     * const schoolStaff = await prisma.schoolStaff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SchoolStaffs and only return the `schoolId`
     * const schoolStaffWithSchoolIdOnly = await prisma.schoolStaff.createManyAndReturn({
     *   select: { schoolId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SchoolStaffCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SchoolStaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolStaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SchoolStaff.
     * @param {SchoolStaffDeleteArgs} args - Arguments to delete one SchoolStaff.
     * @example
     * // Delete one SchoolStaff
     * const SchoolStaff = await prisma.schoolStaff.delete({
     *   where: {
     *     // ... filter to delete one SchoolStaff
     *   }
     * })
     *
     */
    delete<T extends SchoolStaffDeleteArgs>(args: Prisma.SelectSubset<T, SchoolStaffDeleteArgs<ExtArgs>>): Prisma.Prisma__SchoolStaffClient<runtime.Types.Result.GetResult<Prisma.$SchoolStaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SchoolStaff.
     * @param {SchoolStaffUpdateArgs} args - Arguments to update one SchoolStaff.
     * @example
     * // Update one SchoolStaff
     * const schoolStaff = await prisma.schoolStaff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SchoolStaffUpdateArgs>(args: Prisma.SelectSubset<T, SchoolStaffUpdateArgs<ExtArgs>>): Prisma.Prisma__SchoolStaffClient<runtime.Types.Result.GetResult<Prisma.$SchoolStaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SchoolStaffs.
     * @param {SchoolStaffDeleteManyArgs} args - Arguments to filter SchoolStaffs to delete.
     * @example
     * // Delete a few SchoolStaffs
     * const { count } = await prisma.schoolStaff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SchoolStaffDeleteManyArgs>(args?: Prisma.SelectSubset<T, SchoolStaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SchoolStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolStaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolStaffs
     * const schoolStaff = await prisma.schoolStaff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SchoolStaffUpdateManyArgs>(args: Prisma.SelectSubset<T, SchoolStaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SchoolStaffs and returns the data updated in the database.
     * @param {SchoolStaffUpdateManyAndReturnArgs} args - Arguments to update many SchoolStaffs.
     * @example
     * // Update many SchoolStaffs
     * const schoolStaff = await prisma.schoolStaff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SchoolStaffs and only return the `schoolId`
     * const schoolStaffWithSchoolIdOnly = await prisma.schoolStaff.updateManyAndReturn({
     *   select: { schoolId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SchoolStaffUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SchoolStaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolStaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SchoolStaff.
     * @param {SchoolStaffUpsertArgs} args - Arguments to update or create a SchoolStaff.
     * @example
     * // Update or create a SchoolStaff
     * const schoolStaff = await prisma.schoolStaff.upsert({
     *   create: {
     *     // ... data to create a SchoolStaff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolStaff we want to update
     *   }
     * })
     */
    upsert<T extends SchoolStaffUpsertArgs>(args: Prisma.SelectSubset<T, SchoolStaffUpsertArgs<ExtArgs>>): Prisma.Prisma__SchoolStaffClient<runtime.Types.Result.GetResult<Prisma.$SchoolStaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SchoolStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolStaffCountArgs} args - Arguments to filter SchoolStaffs to count.
     * @example
     * // Count the number of SchoolStaffs
     * const count = await prisma.schoolStaff.count({
     *   where: {
     *     // ... the filter for the SchoolStaffs we want to count
     *   }
     * })
    **/
    count<T extends SchoolStaffCountArgs>(args?: Prisma.Subset<T, SchoolStaffCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SchoolStaffCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SchoolStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolStaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolStaffAggregateArgs>(args: Prisma.Subset<T, SchoolStaffAggregateArgs>): Prisma.PrismaPromise<GetSchoolStaffAggregateType<T>>;
    /**
     * Group by SchoolStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolStaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends SchoolStaffGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SchoolStaffGroupByArgs['orderBy'];
    } : {
        orderBy?: SchoolStaffGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SchoolStaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SchoolStaff model
     */
    readonly fields: SchoolStaffFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SchoolStaff.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SchoolStaffClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the SchoolStaff model
 */
export interface SchoolStaffFieldRefs {
    readonly schoolId: Prisma.FieldRef<"SchoolStaff", 'String'>;
    readonly userId: Prisma.FieldRef<"SchoolStaff", 'String'>;
    readonly role: Prisma.FieldRef<"SchoolStaff", 'SchoolStaffRole'>;
    readonly joinedAt: Prisma.FieldRef<"SchoolStaff", 'DateTime'>;
}
/**
 * SchoolStaff findUnique
 */
export type SchoolStaffFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolStaff
     */
    select?: Prisma.SchoolStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolStaff
     */
    omit?: Prisma.SchoolStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolStaffInclude<ExtArgs> | null;
    /**
     * Filter, which SchoolStaff to fetch.
     */
    where: Prisma.SchoolStaffWhereUniqueInput;
};
/**
 * SchoolStaff findUniqueOrThrow
 */
export type SchoolStaffFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolStaff
     */
    select?: Prisma.SchoolStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolStaff
     */
    omit?: Prisma.SchoolStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolStaffInclude<ExtArgs> | null;
    /**
     * Filter, which SchoolStaff to fetch.
     */
    where: Prisma.SchoolStaffWhereUniqueInput;
};
/**
 * SchoolStaff findFirst
 */
export type SchoolStaffFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolStaff
     */
    select?: Prisma.SchoolStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolStaff
     */
    omit?: Prisma.SchoolStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolStaffInclude<ExtArgs> | null;
    /**
     * Filter, which SchoolStaff to fetch.
     */
    where?: Prisma.SchoolStaffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SchoolStaffs to fetch.
     */
    orderBy?: Prisma.SchoolStaffOrderByWithRelationInput | Prisma.SchoolStaffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SchoolStaffs.
     */
    cursor?: Prisma.SchoolStaffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SchoolStaffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SchoolStaffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SchoolStaffs.
     */
    distinct?: Prisma.SchoolStaffScalarFieldEnum | Prisma.SchoolStaffScalarFieldEnum[];
};
/**
 * SchoolStaff findFirstOrThrow
 */
export type SchoolStaffFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolStaff
     */
    select?: Prisma.SchoolStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolStaff
     */
    omit?: Prisma.SchoolStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolStaffInclude<ExtArgs> | null;
    /**
     * Filter, which SchoolStaff to fetch.
     */
    where?: Prisma.SchoolStaffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SchoolStaffs to fetch.
     */
    orderBy?: Prisma.SchoolStaffOrderByWithRelationInput | Prisma.SchoolStaffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SchoolStaffs.
     */
    cursor?: Prisma.SchoolStaffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SchoolStaffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SchoolStaffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SchoolStaffs.
     */
    distinct?: Prisma.SchoolStaffScalarFieldEnum | Prisma.SchoolStaffScalarFieldEnum[];
};
/**
 * SchoolStaff findMany
 */
export type SchoolStaffFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolStaff
     */
    select?: Prisma.SchoolStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolStaff
     */
    omit?: Prisma.SchoolStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolStaffInclude<ExtArgs> | null;
    /**
     * Filter, which SchoolStaffs to fetch.
     */
    where?: Prisma.SchoolStaffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SchoolStaffs to fetch.
     */
    orderBy?: Prisma.SchoolStaffOrderByWithRelationInput | Prisma.SchoolStaffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SchoolStaffs.
     */
    cursor?: Prisma.SchoolStaffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SchoolStaffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SchoolStaffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SchoolStaffs.
     */
    distinct?: Prisma.SchoolStaffScalarFieldEnum | Prisma.SchoolStaffScalarFieldEnum[];
};
/**
 * SchoolStaff create
 */
export type SchoolStaffCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolStaff
     */
    select?: Prisma.SchoolStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolStaff
     */
    omit?: Prisma.SchoolStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolStaffInclude<ExtArgs> | null;
    /**
     * The data needed to create a SchoolStaff.
     */
    data: Prisma.XOR<Prisma.SchoolStaffCreateInput, Prisma.SchoolStaffUncheckedCreateInput>;
};
/**
 * SchoolStaff createMany
 */
export type SchoolStaffCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolStaffs.
     */
    data: Prisma.SchoolStaffCreateManyInput | Prisma.SchoolStaffCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SchoolStaff createManyAndReturn
 */
export type SchoolStaffCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolStaff
     */
    select?: Prisma.SchoolStaffSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolStaff
     */
    omit?: Prisma.SchoolStaffOmit<ExtArgs> | null;
    /**
     * The data used to create many SchoolStaffs.
     */
    data: Prisma.SchoolStaffCreateManyInput | Prisma.SchoolStaffCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolStaffIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SchoolStaff update
 */
export type SchoolStaffUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolStaff
     */
    select?: Prisma.SchoolStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolStaff
     */
    omit?: Prisma.SchoolStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolStaffInclude<ExtArgs> | null;
    /**
     * The data needed to update a SchoolStaff.
     */
    data: Prisma.XOR<Prisma.SchoolStaffUpdateInput, Prisma.SchoolStaffUncheckedUpdateInput>;
    /**
     * Choose, which SchoolStaff to update.
     */
    where: Prisma.SchoolStaffWhereUniqueInput;
};
/**
 * SchoolStaff updateMany
 */
export type SchoolStaffUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolStaffs.
     */
    data: Prisma.XOR<Prisma.SchoolStaffUpdateManyMutationInput, Prisma.SchoolStaffUncheckedUpdateManyInput>;
    /**
     * Filter which SchoolStaffs to update
     */
    where?: Prisma.SchoolStaffWhereInput;
    /**
     * Limit how many SchoolStaffs to update.
     */
    limit?: number;
};
/**
 * SchoolStaff updateManyAndReturn
 */
export type SchoolStaffUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolStaff
     */
    select?: Prisma.SchoolStaffSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolStaff
     */
    omit?: Prisma.SchoolStaffOmit<ExtArgs> | null;
    /**
     * The data used to update SchoolStaffs.
     */
    data: Prisma.XOR<Prisma.SchoolStaffUpdateManyMutationInput, Prisma.SchoolStaffUncheckedUpdateManyInput>;
    /**
     * Filter which SchoolStaffs to update
     */
    where?: Prisma.SchoolStaffWhereInput;
    /**
     * Limit how many SchoolStaffs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolStaffIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SchoolStaff upsert
 */
export type SchoolStaffUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolStaff
     */
    select?: Prisma.SchoolStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolStaff
     */
    omit?: Prisma.SchoolStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolStaffInclude<ExtArgs> | null;
    /**
     * The filter to search for the SchoolStaff to update in case it exists.
     */
    where: Prisma.SchoolStaffWhereUniqueInput;
    /**
     * In case the SchoolStaff found by the `where` argument doesn't exist, create a new SchoolStaff with this data.
     */
    create: Prisma.XOR<Prisma.SchoolStaffCreateInput, Prisma.SchoolStaffUncheckedCreateInput>;
    /**
     * In case the SchoolStaff was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SchoolStaffUpdateInput, Prisma.SchoolStaffUncheckedUpdateInput>;
};
/**
 * SchoolStaff delete
 */
export type SchoolStaffDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolStaff
     */
    select?: Prisma.SchoolStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolStaff
     */
    omit?: Prisma.SchoolStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolStaffInclude<ExtArgs> | null;
    /**
     * Filter which SchoolStaff to delete.
     */
    where: Prisma.SchoolStaffWhereUniqueInput;
};
/**
 * SchoolStaff deleteMany
 */
export type SchoolStaffDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolStaffs to delete
     */
    where?: Prisma.SchoolStaffWhereInput;
    /**
     * Limit how many SchoolStaffs to delete.
     */
    limit?: number;
};
/**
 * SchoolStaff without action
 */
export type SchoolStaffDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolStaff
     */
    select?: Prisma.SchoolStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolStaff
     */
    omit?: Prisma.SchoolStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolStaffInclude<ExtArgs> | null;
};

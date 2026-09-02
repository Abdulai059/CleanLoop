import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model School
 *
 */
export type SchoolModel = runtime.Types.Result.DefaultSelection<Prisma.$SchoolPayload>;
export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
};
export type SchoolMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    regionId: string | null;
    districtId: string | null;
    communityId: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SchoolMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    regionId: string | null;
    districtId: string | null;
    communityId: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SchoolCountAggregateOutputType = {
    id: number;
    name: number;
    regionId: number;
    districtId: number;
    communityId: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SchoolMinAggregateInputType = {
    id?: true;
    name?: true;
    regionId?: true;
    districtId?: true;
    communityId?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SchoolMaxAggregateInputType = {
    id?: true;
    name?: true;
    regionId?: true;
    districtId?: true;
    communityId?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SchoolCountAggregateInputType = {
    id?: true;
    name?: true;
    regionId?: true;
    districtId?: true;
    communityId?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SchoolAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: Prisma.SchoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Schools to fetch.
     */
    orderBy?: Prisma.SchoolOrderByWithRelationInput | Prisma.SchoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SchoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType;
};
export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
    [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSchool[P]> : Prisma.GetScalarType<T[P], AggregateSchool[P]>;
};
export type SchoolGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithAggregationInput | Prisma.SchoolOrderByWithAggregationInput[];
    by: Prisma.SchoolScalarFieldEnum[] | Prisma.SchoolScalarFieldEnum;
    having?: Prisma.SchoolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SchoolCountAggregateInputType | true;
    _min?: SchoolMinAggregateInputType;
    _max?: SchoolMaxAggregateInputType;
};
export type SchoolGroupByOutputType = {
    id: string;
    name: string;
    regionId: string | null;
    districtId: string | null;
    communityId: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: SchoolCountAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
};
export type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SchoolGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SchoolGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SchoolGroupByOutputType[P]>;
}>>;
export type SchoolWhereInput = {
    AND?: Prisma.SchoolWhereInput | Prisma.SchoolWhereInput[];
    OR?: Prisma.SchoolWhereInput[];
    NOT?: Prisma.SchoolWhereInput | Prisma.SchoolWhereInput[];
    id?: Prisma.StringFilter<"School"> | string;
    name?: Prisma.StringFilter<"School"> | string;
    regionId?: Prisma.StringNullableFilter<"School"> | string | null;
    districtId?: Prisma.StringNullableFilter<"School"> | string | null;
    communityId?: Prisma.StringNullableFilter<"School"> | string | null;
    isActive?: Prisma.BoolFilter<"School"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"School"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"School"> | Date | string;
    region?: Prisma.XOR<Prisma.RegionNullableScalarRelationFilter, Prisma.RegionWhereInput> | null;
    district?: Prisma.XOR<Prisma.DistrictNullableScalarRelationFilter, Prisma.DistrictWhereInput> | null;
    community?: Prisma.XOR<Prisma.CommunityNullableScalarRelationFilter, Prisma.CommunityWhereInput> | null;
    staff?: Prisma.SchoolStaffListRelationFilter;
    classes?: Prisma.SchoolClassListRelationFilter;
    collections?: Prisma.SchoolCollectionListRelationFilter;
    participants?: Prisma.CampaignParticipantListRelationFilter;
};
export type SchoolOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    regionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    districtId?: Prisma.SortOrderInput | Prisma.SortOrder;
    communityId?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    region?: Prisma.RegionOrderByWithRelationInput;
    district?: Prisma.DistrictOrderByWithRelationInput;
    community?: Prisma.CommunityOrderByWithRelationInput;
    staff?: Prisma.SchoolStaffOrderByRelationAggregateInput;
    classes?: Prisma.SchoolClassOrderByRelationAggregateInput;
    collections?: Prisma.SchoolCollectionOrderByRelationAggregateInput;
    participants?: Prisma.CampaignParticipantOrderByRelationAggregateInput;
};
export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SchoolWhereInput | Prisma.SchoolWhereInput[];
    OR?: Prisma.SchoolWhereInput[];
    NOT?: Prisma.SchoolWhereInput | Prisma.SchoolWhereInput[];
    name?: Prisma.StringFilter<"School"> | string;
    regionId?: Prisma.StringNullableFilter<"School"> | string | null;
    districtId?: Prisma.StringNullableFilter<"School"> | string | null;
    communityId?: Prisma.StringNullableFilter<"School"> | string | null;
    isActive?: Prisma.BoolFilter<"School"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"School"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"School"> | Date | string;
    region?: Prisma.XOR<Prisma.RegionNullableScalarRelationFilter, Prisma.RegionWhereInput> | null;
    district?: Prisma.XOR<Prisma.DistrictNullableScalarRelationFilter, Prisma.DistrictWhereInput> | null;
    community?: Prisma.XOR<Prisma.CommunityNullableScalarRelationFilter, Prisma.CommunityWhereInput> | null;
    staff?: Prisma.SchoolStaffListRelationFilter;
    classes?: Prisma.SchoolClassListRelationFilter;
    collections?: Prisma.SchoolCollectionListRelationFilter;
    participants?: Prisma.CampaignParticipantListRelationFilter;
}, "id">;
export type SchoolOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    regionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    districtId?: Prisma.SortOrderInput | Prisma.SortOrder;
    communityId?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SchoolCountOrderByAggregateInput;
    _max?: Prisma.SchoolMaxOrderByAggregateInput;
    _min?: Prisma.SchoolMinOrderByAggregateInput;
};
export type SchoolScalarWhereWithAggregatesInput = {
    AND?: Prisma.SchoolScalarWhereWithAggregatesInput | Prisma.SchoolScalarWhereWithAggregatesInput[];
    OR?: Prisma.SchoolScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SchoolScalarWhereWithAggregatesInput | Prisma.SchoolScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"School"> | string;
    name?: Prisma.StringWithAggregatesFilter<"School"> | string;
    regionId?: Prisma.StringNullableWithAggregatesFilter<"School"> | string | null;
    districtId?: Prisma.StringNullableWithAggregatesFilter<"School"> | string | null;
    communityId?: Prisma.StringNullableWithAggregatesFilter<"School"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"School"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"School"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"School"> | Date | string;
};
export type SchoolCreateInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    region?: Prisma.RegionCreateNestedOneWithoutSchoolsInput;
    district?: Prisma.DistrictCreateNestedOneWithoutSchoolsInput;
    community?: Prisma.CommunityCreateNestedOneWithoutSchoolsInput;
    staff?: Prisma.SchoolStaffCreateNestedManyWithoutSchoolInput;
    classes?: Prisma.SchoolClassCreateNestedManyWithoutSchoolInput;
    collections?: Prisma.SchoolCollectionCreateNestedManyWithoutSchoolInput;
    participants?: Prisma.CampaignParticipantCreateNestedManyWithoutSchoolInput;
};
export type SchoolUncheckedCreateInput = {
    id?: string;
    name: string;
    regionId?: string | null;
    districtId?: string | null;
    communityId?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff?: Prisma.SchoolStaffUncheckedCreateNestedManyWithoutSchoolInput;
    classes?: Prisma.SchoolClassUncheckedCreateNestedManyWithoutSchoolInput;
    collections?: Prisma.SchoolCollectionUncheckedCreateNestedManyWithoutSchoolInput;
    participants?: Prisma.CampaignParticipantUncheckedCreateNestedManyWithoutSchoolInput;
};
export type SchoolUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    region?: Prisma.RegionUpdateOneWithoutSchoolsNestedInput;
    district?: Prisma.DistrictUpdateOneWithoutSchoolsNestedInput;
    community?: Prisma.CommunityUpdateOneWithoutSchoolsNestedInput;
    staff?: Prisma.SchoolStaffUpdateManyWithoutSchoolNestedInput;
    classes?: Prisma.SchoolClassUpdateManyWithoutSchoolNestedInput;
    collections?: Prisma.SchoolCollectionUpdateManyWithoutSchoolNestedInput;
    participants?: Prisma.CampaignParticipantUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    regionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    communityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.SchoolStaffUncheckedUpdateManyWithoutSchoolNestedInput;
    classes?: Prisma.SchoolClassUncheckedUpdateManyWithoutSchoolNestedInput;
    collections?: Prisma.SchoolCollectionUncheckedUpdateManyWithoutSchoolNestedInput;
    participants?: Prisma.CampaignParticipantUncheckedUpdateManyWithoutSchoolNestedInput;
};
export type SchoolCreateManyInput = {
    id?: string;
    name: string;
    regionId?: string | null;
    districtId?: string | null;
    communityId?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    regionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    communityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolListRelationFilter = {
    every?: Prisma.SchoolWhereInput;
    some?: Prisma.SchoolWhereInput;
    none?: Prisma.SchoolWhereInput;
};
export type SchoolOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SchoolCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    regionId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    communityId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SchoolMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    regionId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    communityId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SchoolMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    regionId?: Prisma.SortOrder;
    districtId?: Prisma.SortOrder;
    communityId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SchoolScalarRelationFilter = {
    is?: Prisma.SchoolWhereInput;
    isNot?: Prisma.SchoolWhereInput;
};
export type SchoolCreateNestedManyWithoutRegionInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutRegionInput, Prisma.SchoolUncheckedCreateWithoutRegionInput> | Prisma.SchoolCreateWithoutRegionInput[] | Prisma.SchoolUncheckedCreateWithoutRegionInput[];
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutRegionInput | Prisma.SchoolCreateOrConnectWithoutRegionInput[];
    createMany?: Prisma.SchoolCreateManyRegionInputEnvelope;
    connect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
};
export type SchoolUncheckedCreateNestedManyWithoutRegionInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutRegionInput, Prisma.SchoolUncheckedCreateWithoutRegionInput> | Prisma.SchoolCreateWithoutRegionInput[] | Prisma.SchoolUncheckedCreateWithoutRegionInput[];
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutRegionInput | Prisma.SchoolCreateOrConnectWithoutRegionInput[];
    createMany?: Prisma.SchoolCreateManyRegionInputEnvelope;
    connect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
};
export type SchoolUpdateManyWithoutRegionNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutRegionInput, Prisma.SchoolUncheckedCreateWithoutRegionInput> | Prisma.SchoolCreateWithoutRegionInput[] | Prisma.SchoolUncheckedCreateWithoutRegionInput[];
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutRegionInput | Prisma.SchoolCreateOrConnectWithoutRegionInput[];
    upsert?: Prisma.SchoolUpsertWithWhereUniqueWithoutRegionInput | Prisma.SchoolUpsertWithWhereUniqueWithoutRegionInput[];
    createMany?: Prisma.SchoolCreateManyRegionInputEnvelope;
    set?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    disconnect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    delete?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    connect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    update?: Prisma.SchoolUpdateWithWhereUniqueWithoutRegionInput | Prisma.SchoolUpdateWithWhereUniqueWithoutRegionInput[];
    updateMany?: Prisma.SchoolUpdateManyWithWhereWithoutRegionInput | Prisma.SchoolUpdateManyWithWhereWithoutRegionInput[];
    deleteMany?: Prisma.SchoolScalarWhereInput | Prisma.SchoolScalarWhereInput[];
};
export type SchoolUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutRegionInput, Prisma.SchoolUncheckedCreateWithoutRegionInput> | Prisma.SchoolCreateWithoutRegionInput[] | Prisma.SchoolUncheckedCreateWithoutRegionInput[];
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutRegionInput | Prisma.SchoolCreateOrConnectWithoutRegionInput[];
    upsert?: Prisma.SchoolUpsertWithWhereUniqueWithoutRegionInput | Prisma.SchoolUpsertWithWhereUniqueWithoutRegionInput[];
    createMany?: Prisma.SchoolCreateManyRegionInputEnvelope;
    set?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    disconnect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    delete?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    connect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    update?: Prisma.SchoolUpdateWithWhereUniqueWithoutRegionInput | Prisma.SchoolUpdateWithWhereUniqueWithoutRegionInput[];
    updateMany?: Prisma.SchoolUpdateManyWithWhereWithoutRegionInput | Prisma.SchoolUpdateManyWithWhereWithoutRegionInput[];
    deleteMany?: Prisma.SchoolScalarWhereInput | Prisma.SchoolScalarWhereInput[];
};
export type SchoolCreateNestedManyWithoutDistrictInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutDistrictInput, Prisma.SchoolUncheckedCreateWithoutDistrictInput> | Prisma.SchoolCreateWithoutDistrictInput[] | Prisma.SchoolUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutDistrictInput | Prisma.SchoolCreateOrConnectWithoutDistrictInput[];
    createMany?: Prisma.SchoolCreateManyDistrictInputEnvelope;
    connect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
};
export type SchoolUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutDistrictInput, Prisma.SchoolUncheckedCreateWithoutDistrictInput> | Prisma.SchoolCreateWithoutDistrictInput[] | Prisma.SchoolUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutDistrictInput | Prisma.SchoolCreateOrConnectWithoutDistrictInput[];
    createMany?: Prisma.SchoolCreateManyDistrictInputEnvelope;
    connect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
};
export type SchoolUpdateManyWithoutDistrictNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutDistrictInput, Prisma.SchoolUncheckedCreateWithoutDistrictInput> | Prisma.SchoolCreateWithoutDistrictInput[] | Prisma.SchoolUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutDistrictInput | Prisma.SchoolCreateOrConnectWithoutDistrictInput[];
    upsert?: Prisma.SchoolUpsertWithWhereUniqueWithoutDistrictInput | Prisma.SchoolUpsertWithWhereUniqueWithoutDistrictInput[];
    createMany?: Prisma.SchoolCreateManyDistrictInputEnvelope;
    set?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    disconnect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    delete?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    connect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    update?: Prisma.SchoolUpdateWithWhereUniqueWithoutDistrictInput | Prisma.SchoolUpdateWithWhereUniqueWithoutDistrictInput[];
    updateMany?: Prisma.SchoolUpdateManyWithWhereWithoutDistrictInput | Prisma.SchoolUpdateManyWithWhereWithoutDistrictInput[];
    deleteMany?: Prisma.SchoolScalarWhereInput | Prisma.SchoolScalarWhereInput[];
};
export type SchoolUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutDistrictInput, Prisma.SchoolUncheckedCreateWithoutDistrictInput> | Prisma.SchoolCreateWithoutDistrictInput[] | Prisma.SchoolUncheckedCreateWithoutDistrictInput[];
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutDistrictInput | Prisma.SchoolCreateOrConnectWithoutDistrictInput[];
    upsert?: Prisma.SchoolUpsertWithWhereUniqueWithoutDistrictInput | Prisma.SchoolUpsertWithWhereUniqueWithoutDistrictInput[];
    createMany?: Prisma.SchoolCreateManyDistrictInputEnvelope;
    set?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    disconnect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    delete?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    connect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    update?: Prisma.SchoolUpdateWithWhereUniqueWithoutDistrictInput | Prisma.SchoolUpdateWithWhereUniqueWithoutDistrictInput[];
    updateMany?: Prisma.SchoolUpdateManyWithWhereWithoutDistrictInput | Prisma.SchoolUpdateManyWithWhereWithoutDistrictInput[];
    deleteMany?: Prisma.SchoolScalarWhereInput | Prisma.SchoolScalarWhereInput[];
};
export type SchoolCreateNestedManyWithoutCommunityInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutCommunityInput, Prisma.SchoolUncheckedCreateWithoutCommunityInput> | Prisma.SchoolCreateWithoutCommunityInput[] | Prisma.SchoolUncheckedCreateWithoutCommunityInput[];
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutCommunityInput | Prisma.SchoolCreateOrConnectWithoutCommunityInput[];
    createMany?: Prisma.SchoolCreateManyCommunityInputEnvelope;
    connect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
};
export type SchoolUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutCommunityInput, Prisma.SchoolUncheckedCreateWithoutCommunityInput> | Prisma.SchoolCreateWithoutCommunityInput[] | Prisma.SchoolUncheckedCreateWithoutCommunityInput[];
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutCommunityInput | Prisma.SchoolCreateOrConnectWithoutCommunityInput[];
    createMany?: Prisma.SchoolCreateManyCommunityInputEnvelope;
    connect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
};
export type SchoolUpdateManyWithoutCommunityNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutCommunityInput, Prisma.SchoolUncheckedCreateWithoutCommunityInput> | Prisma.SchoolCreateWithoutCommunityInput[] | Prisma.SchoolUncheckedCreateWithoutCommunityInput[];
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutCommunityInput | Prisma.SchoolCreateOrConnectWithoutCommunityInput[];
    upsert?: Prisma.SchoolUpsertWithWhereUniqueWithoutCommunityInput | Prisma.SchoolUpsertWithWhereUniqueWithoutCommunityInput[];
    createMany?: Prisma.SchoolCreateManyCommunityInputEnvelope;
    set?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    disconnect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    delete?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    connect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    update?: Prisma.SchoolUpdateWithWhereUniqueWithoutCommunityInput | Prisma.SchoolUpdateWithWhereUniqueWithoutCommunityInput[];
    updateMany?: Prisma.SchoolUpdateManyWithWhereWithoutCommunityInput | Prisma.SchoolUpdateManyWithWhereWithoutCommunityInput[];
    deleteMany?: Prisma.SchoolScalarWhereInput | Prisma.SchoolScalarWhereInput[];
};
export type SchoolUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutCommunityInput, Prisma.SchoolUncheckedCreateWithoutCommunityInput> | Prisma.SchoolCreateWithoutCommunityInput[] | Prisma.SchoolUncheckedCreateWithoutCommunityInput[];
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutCommunityInput | Prisma.SchoolCreateOrConnectWithoutCommunityInput[];
    upsert?: Prisma.SchoolUpsertWithWhereUniqueWithoutCommunityInput | Prisma.SchoolUpsertWithWhereUniqueWithoutCommunityInput[];
    createMany?: Prisma.SchoolCreateManyCommunityInputEnvelope;
    set?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    disconnect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    delete?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    connect?: Prisma.SchoolWhereUniqueInput | Prisma.SchoolWhereUniqueInput[];
    update?: Prisma.SchoolUpdateWithWhereUniqueWithoutCommunityInput | Prisma.SchoolUpdateWithWhereUniqueWithoutCommunityInput[];
    updateMany?: Prisma.SchoolUpdateManyWithWhereWithoutCommunityInput | Prisma.SchoolUpdateManyWithWhereWithoutCommunityInput[];
    deleteMany?: Prisma.SchoolScalarWhereInput | Prisma.SchoolScalarWhereInput[];
};
export type SchoolCreateNestedOneWithoutStaffInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutStaffInput, Prisma.SchoolUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutStaffInput;
    connect?: Prisma.SchoolWhereUniqueInput;
};
export type SchoolUpdateOneRequiredWithoutStaffNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutStaffInput, Prisma.SchoolUncheckedCreateWithoutStaffInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutStaffInput;
    upsert?: Prisma.SchoolUpsertWithoutStaffInput;
    connect?: Prisma.SchoolWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SchoolUpdateToOneWithWhereWithoutStaffInput, Prisma.SchoolUpdateWithoutStaffInput>, Prisma.SchoolUncheckedUpdateWithoutStaffInput>;
};
export type SchoolCreateNestedOneWithoutClassesInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutClassesInput, Prisma.SchoolUncheckedCreateWithoutClassesInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutClassesInput;
    connect?: Prisma.SchoolWhereUniqueInput;
};
export type SchoolUpdateOneRequiredWithoutClassesNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutClassesInput, Prisma.SchoolUncheckedCreateWithoutClassesInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutClassesInput;
    upsert?: Prisma.SchoolUpsertWithoutClassesInput;
    connect?: Prisma.SchoolWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SchoolUpdateToOneWithWhereWithoutClassesInput, Prisma.SchoolUpdateWithoutClassesInput>, Prisma.SchoolUncheckedUpdateWithoutClassesInput>;
};
export type SchoolCreateNestedOneWithoutCollectionsInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutCollectionsInput, Prisma.SchoolUncheckedCreateWithoutCollectionsInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutCollectionsInput;
    connect?: Prisma.SchoolWhereUniqueInput;
};
export type SchoolUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutCollectionsInput, Prisma.SchoolUncheckedCreateWithoutCollectionsInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutCollectionsInput;
    upsert?: Prisma.SchoolUpsertWithoutCollectionsInput;
    connect?: Prisma.SchoolWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SchoolUpdateToOneWithWhereWithoutCollectionsInput, Prisma.SchoolUpdateWithoutCollectionsInput>, Prisma.SchoolUncheckedUpdateWithoutCollectionsInput>;
};
export type SchoolCreateNestedOneWithoutParticipantsInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutParticipantsInput, Prisma.SchoolUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutParticipantsInput;
    connect?: Prisma.SchoolWhereUniqueInput;
};
export type SchoolUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutParticipantsInput, Prisma.SchoolUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutParticipantsInput;
    upsert?: Prisma.SchoolUpsertWithoutParticipantsInput;
    connect?: Prisma.SchoolWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SchoolUpdateToOneWithWhereWithoutParticipantsInput, Prisma.SchoolUpdateWithoutParticipantsInput>, Prisma.SchoolUncheckedUpdateWithoutParticipantsInput>;
};
export type SchoolCreateWithoutRegionInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    district?: Prisma.DistrictCreateNestedOneWithoutSchoolsInput;
    community?: Prisma.CommunityCreateNestedOneWithoutSchoolsInput;
    staff?: Prisma.SchoolStaffCreateNestedManyWithoutSchoolInput;
    classes?: Prisma.SchoolClassCreateNestedManyWithoutSchoolInput;
    collections?: Prisma.SchoolCollectionCreateNestedManyWithoutSchoolInput;
    participants?: Prisma.CampaignParticipantCreateNestedManyWithoutSchoolInput;
};
export type SchoolUncheckedCreateWithoutRegionInput = {
    id?: string;
    name: string;
    districtId?: string | null;
    communityId?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff?: Prisma.SchoolStaffUncheckedCreateNestedManyWithoutSchoolInput;
    classes?: Prisma.SchoolClassUncheckedCreateNestedManyWithoutSchoolInput;
    collections?: Prisma.SchoolCollectionUncheckedCreateNestedManyWithoutSchoolInput;
    participants?: Prisma.CampaignParticipantUncheckedCreateNestedManyWithoutSchoolInput;
};
export type SchoolCreateOrConnectWithoutRegionInput = {
    where: Prisma.SchoolWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutRegionInput, Prisma.SchoolUncheckedCreateWithoutRegionInput>;
};
export type SchoolCreateManyRegionInputEnvelope = {
    data: Prisma.SchoolCreateManyRegionInput | Prisma.SchoolCreateManyRegionInput[];
    skipDuplicates?: boolean;
};
export type SchoolUpsertWithWhereUniqueWithoutRegionInput = {
    where: Prisma.SchoolWhereUniqueInput;
    update: Prisma.XOR<Prisma.SchoolUpdateWithoutRegionInput, Prisma.SchoolUncheckedUpdateWithoutRegionInput>;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutRegionInput, Prisma.SchoolUncheckedCreateWithoutRegionInput>;
};
export type SchoolUpdateWithWhereUniqueWithoutRegionInput = {
    where: Prisma.SchoolWhereUniqueInput;
    data: Prisma.XOR<Prisma.SchoolUpdateWithoutRegionInput, Prisma.SchoolUncheckedUpdateWithoutRegionInput>;
};
export type SchoolUpdateManyWithWhereWithoutRegionInput = {
    where: Prisma.SchoolScalarWhereInput;
    data: Prisma.XOR<Prisma.SchoolUpdateManyMutationInput, Prisma.SchoolUncheckedUpdateManyWithoutRegionInput>;
};
export type SchoolScalarWhereInput = {
    AND?: Prisma.SchoolScalarWhereInput | Prisma.SchoolScalarWhereInput[];
    OR?: Prisma.SchoolScalarWhereInput[];
    NOT?: Prisma.SchoolScalarWhereInput | Prisma.SchoolScalarWhereInput[];
    id?: Prisma.StringFilter<"School"> | string;
    name?: Prisma.StringFilter<"School"> | string;
    regionId?: Prisma.StringNullableFilter<"School"> | string | null;
    districtId?: Prisma.StringNullableFilter<"School"> | string | null;
    communityId?: Prisma.StringNullableFilter<"School"> | string | null;
    isActive?: Prisma.BoolFilter<"School"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"School"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"School"> | Date | string;
};
export type SchoolCreateWithoutDistrictInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    region?: Prisma.RegionCreateNestedOneWithoutSchoolsInput;
    community?: Prisma.CommunityCreateNestedOneWithoutSchoolsInput;
    staff?: Prisma.SchoolStaffCreateNestedManyWithoutSchoolInput;
    classes?: Prisma.SchoolClassCreateNestedManyWithoutSchoolInput;
    collections?: Prisma.SchoolCollectionCreateNestedManyWithoutSchoolInput;
    participants?: Prisma.CampaignParticipantCreateNestedManyWithoutSchoolInput;
};
export type SchoolUncheckedCreateWithoutDistrictInput = {
    id?: string;
    name: string;
    regionId?: string | null;
    communityId?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff?: Prisma.SchoolStaffUncheckedCreateNestedManyWithoutSchoolInput;
    classes?: Prisma.SchoolClassUncheckedCreateNestedManyWithoutSchoolInput;
    collections?: Prisma.SchoolCollectionUncheckedCreateNestedManyWithoutSchoolInput;
    participants?: Prisma.CampaignParticipantUncheckedCreateNestedManyWithoutSchoolInput;
};
export type SchoolCreateOrConnectWithoutDistrictInput = {
    where: Prisma.SchoolWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutDistrictInput, Prisma.SchoolUncheckedCreateWithoutDistrictInput>;
};
export type SchoolCreateManyDistrictInputEnvelope = {
    data: Prisma.SchoolCreateManyDistrictInput | Prisma.SchoolCreateManyDistrictInput[];
    skipDuplicates?: boolean;
};
export type SchoolUpsertWithWhereUniqueWithoutDistrictInput = {
    where: Prisma.SchoolWhereUniqueInput;
    update: Prisma.XOR<Prisma.SchoolUpdateWithoutDistrictInput, Prisma.SchoolUncheckedUpdateWithoutDistrictInput>;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutDistrictInput, Prisma.SchoolUncheckedCreateWithoutDistrictInput>;
};
export type SchoolUpdateWithWhereUniqueWithoutDistrictInput = {
    where: Prisma.SchoolWhereUniqueInput;
    data: Prisma.XOR<Prisma.SchoolUpdateWithoutDistrictInput, Prisma.SchoolUncheckedUpdateWithoutDistrictInput>;
};
export type SchoolUpdateManyWithWhereWithoutDistrictInput = {
    where: Prisma.SchoolScalarWhereInput;
    data: Prisma.XOR<Prisma.SchoolUpdateManyMutationInput, Prisma.SchoolUncheckedUpdateManyWithoutDistrictInput>;
};
export type SchoolCreateWithoutCommunityInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    region?: Prisma.RegionCreateNestedOneWithoutSchoolsInput;
    district?: Prisma.DistrictCreateNestedOneWithoutSchoolsInput;
    staff?: Prisma.SchoolStaffCreateNestedManyWithoutSchoolInput;
    classes?: Prisma.SchoolClassCreateNestedManyWithoutSchoolInput;
    collections?: Prisma.SchoolCollectionCreateNestedManyWithoutSchoolInput;
    participants?: Prisma.CampaignParticipantCreateNestedManyWithoutSchoolInput;
};
export type SchoolUncheckedCreateWithoutCommunityInput = {
    id?: string;
    name: string;
    regionId?: string | null;
    districtId?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff?: Prisma.SchoolStaffUncheckedCreateNestedManyWithoutSchoolInput;
    classes?: Prisma.SchoolClassUncheckedCreateNestedManyWithoutSchoolInput;
    collections?: Prisma.SchoolCollectionUncheckedCreateNestedManyWithoutSchoolInput;
    participants?: Prisma.CampaignParticipantUncheckedCreateNestedManyWithoutSchoolInput;
};
export type SchoolCreateOrConnectWithoutCommunityInput = {
    where: Prisma.SchoolWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutCommunityInput, Prisma.SchoolUncheckedCreateWithoutCommunityInput>;
};
export type SchoolCreateManyCommunityInputEnvelope = {
    data: Prisma.SchoolCreateManyCommunityInput | Prisma.SchoolCreateManyCommunityInput[];
    skipDuplicates?: boolean;
};
export type SchoolUpsertWithWhereUniqueWithoutCommunityInput = {
    where: Prisma.SchoolWhereUniqueInput;
    update: Prisma.XOR<Prisma.SchoolUpdateWithoutCommunityInput, Prisma.SchoolUncheckedUpdateWithoutCommunityInput>;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutCommunityInput, Prisma.SchoolUncheckedCreateWithoutCommunityInput>;
};
export type SchoolUpdateWithWhereUniqueWithoutCommunityInput = {
    where: Prisma.SchoolWhereUniqueInput;
    data: Prisma.XOR<Prisma.SchoolUpdateWithoutCommunityInput, Prisma.SchoolUncheckedUpdateWithoutCommunityInput>;
};
export type SchoolUpdateManyWithWhereWithoutCommunityInput = {
    where: Prisma.SchoolScalarWhereInput;
    data: Prisma.XOR<Prisma.SchoolUpdateManyMutationInput, Prisma.SchoolUncheckedUpdateManyWithoutCommunityInput>;
};
export type SchoolCreateWithoutStaffInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    region?: Prisma.RegionCreateNestedOneWithoutSchoolsInput;
    district?: Prisma.DistrictCreateNestedOneWithoutSchoolsInput;
    community?: Prisma.CommunityCreateNestedOneWithoutSchoolsInput;
    classes?: Prisma.SchoolClassCreateNestedManyWithoutSchoolInput;
    collections?: Prisma.SchoolCollectionCreateNestedManyWithoutSchoolInput;
    participants?: Prisma.CampaignParticipantCreateNestedManyWithoutSchoolInput;
};
export type SchoolUncheckedCreateWithoutStaffInput = {
    id?: string;
    name: string;
    regionId?: string | null;
    districtId?: string | null;
    communityId?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    classes?: Prisma.SchoolClassUncheckedCreateNestedManyWithoutSchoolInput;
    collections?: Prisma.SchoolCollectionUncheckedCreateNestedManyWithoutSchoolInput;
    participants?: Prisma.CampaignParticipantUncheckedCreateNestedManyWithoutSchoolInput;
};
export type SchoolCreateOrConnectWithoutStaffInput = {
    where: Prisma.SchoolWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutStaffInput, Prisma.SchoolUncheckedCreateWithoutStaffInput>;
};
export type SchoolUpsertWithoutStaffInput = {
    update: Prisma.XOR<Prisma.SchoolUpdateWithoutStaffInput, Prisma.SchoolUncheckedUpdateWithoutStaffInput>;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutStaffInput, Prisma.SchoolUncheckedCreateWithoutStaffInput>;
    where?: Prisma.SchoolWhereInput;
};
export type SchoolUpdateToOneWithWhereWithoutStaffInput = {
    where?: Prisma.SchoolWhereInput;
    data: Prisma.XOR<Prisma.SchoolUpdateWithoutStaffInput, Prisma.SchoolUncheckedUpdateWithoutStaffInput>;
};
export type SchoolUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    region?: Prisma.RegionUpdateOneWithoutSchoolsNestedInput;
    district?: Prisma.DistrictUpdateOneWithoutSchoolsNestedInput;
    community?: Prisma.CommunityUpdateOneWithoutSchoolsNestedInput;
    classes?: Prisma.SchoolClassUpdateManyWithoutSchoolNestedInput;
    collections?: Prisma.SchoolCollectionUpdateManyWithoutSchoolNestedInput;
    participants?: Prisma.CampaignParticipantUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateWithoutStaffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    regionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    communityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    classes?: Prisma.SchoolClassUncheckedUpdateManyWithoutSchoolNestedInput;
    collections?: Prisma.SchoolCollectionUncheckedUpdateManyWithoutSchoolNestedInput;
    participants?: Prisma.CampaignParticipantUncheckedUpdateManyWithoutSchoolNestedInput;
};
export type SchoolCreateWithoutClassesInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    region?: Prisma.RegionCreateNestedOneWithoutSchoolsInput;
    district?: Prisma.DistrictCreateNestedOneWithoutSchoolsInput;
    community?: Prisma.CommunityCreateNestedOneWithoutSchoolsInput;
    staff?: Prisma.SchoolStaffCreateNestedManyWithoutSchoolInput;
    collections?: Prisma.SchoolCollectionCreateNestedManyWithoutSchoolInput;
    participants?: Prisma.CampaignParticipantCreateNestedManyWithoutSchoolInput;
};
export type SchoolUncheckedCreateWithoutClassesInput = {
    id?: string;
    name: string;
    regionId?: string | null;
    districtId?: string | null;
    communityId?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff?: Prisma.SchoolStaffUncheckedCreateNestedManyWithoutSchoolInput;
    collections?: Prisma.SchoolCollectionUncheckedCreateNestedManyWithoutSchoolInput;
    participants?: Prisma.CampaignParticipantUncheckedCreateNestedManyWithoutSchoolInput;
};
export type SchoolCreateOrConnectWithoutClassesInput = {
    where: Prisma.SchoolWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutClassesInput, Prisma.SchoolUncheckedCreateWithoutClassesInput>;
};
export type SchoolUpsertWithoutClassesInput = {
    update: Prisma.XOR<Prisma.SchoolUpdateWithoutClassesInput, Prisma.SchoolUncheckedUpdateWithoutClassesInput>;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutClassesInput, Prisma.SchoolUncheckedCreateWithoutClassesInput>;
    where?: Prisma.SchoolWhereInput;
};
export type SchoolUpdateToOneWithWhereWithoutClassesInput = {
    where?: Prisma.SchoolWhereInput;
    data: Prisma.XOR<Prisma.SchoolUpdateWithoutClassesInput, Prisma.SchoolUncheckedUpdateWithoutClassesInput>;
};
export type SchoolUpdateWithoutClassesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    region?: Prisma.RegionUpdateOneWithoutSchoolsNestedInput;
    district?: Prisma.DistrictUpdateOneWithoutSchoolsNestedInput;
    community?: Prisma.CommunityUpdateOneWithoutSchoolsNestedInput;
    staff?: Prisma.SchoolStaffUpdateManyWithoutSchoolNestedInput;
    collections?: Prisma.SchoolCollectionUpdateManyWithoutSchoolNestedInput;
    participants?: Prisma.CampaignParticipantUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateWithoutClassesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    regionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    communityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.SchoolStaffUncheckedUpdateManyWithoutSchoolNestedInput;
    collections?: Prisma.SchoolCollectionUncheckedUpdateManyWithoutSchoolNestedInput;
    participants?: Prisma.CampaignParticipantUncheckedUpdateManyWithoutSchoolNestedInput;
};
export type SchoolCreateWithoutCollectionsInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    region?: Prisma.RegionCreateNestedOneWithoutSchoolsInput;
    district?: Prisma.DistrictCreateNestedOneWithoutSchoolsInput;
    community?: Prisma.CommunityCreateNestedOneWithoutSchoolsInput;
    staff?: Prisma.SchoolStaffCreateNestedManyWithoutSchoolInput;
    classes?: Prisma.SchoolClassCreateNestedManyWithoutSchoolInput;
    participants?: Prisma.CampaignParticipantCreateNestedManyWithoutSchoolInput;
};
export type SchoolUncheckedCreateWithoutCollectionsInput = {
    id?: string;
    name: string;
    regionId?: string | null;
    districtId?: string | null;
    communityId?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff?: Prisma.SchoolStaffUncheckedCreateNestedManyWithoutSchoolInput;
    classes?: Prisma.SchoolClassUncheckedCreateNestedManyWithoutSchoolInput;
    participants?: Prisma.CampaignParticipantUncheckedCreateNestedManyWithoutSchoolInput;
};
export type SchoolCreateOrConnectWithoutCollectionsInput = {
    where: Prisma.SchoolWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutCollectionsInput, Prisma.SchoolUncheckedCreateWithoutCollectionsInput>;
};
export type SchoolUpsertWithoutCollectionsInput = {
    update: Prisma.XOR<Prisma.SchoolUpdateWithoutCollectionsInput, Prisma.SchoolUncheckedUpdateWithoutCollectionsInput>;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutCollectionsInput, Prisma.SchoolUncheckedCreateWithoutCollectionsInput>;
    where?: Prisma.SchoolWhereInput;
};
export type SchoolUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: Prisma.SchoolWhereInput;
    data: Prisma.XOR<Prisma.SchoolUpdateWithoutCollectionsInput, Prisma.SchoolUncheckedUpdateWithoutCollectionsInput>;
};
export type SchoolUpdateWithoutCollectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    region?: Prisma.RegionUpdateOneWithoutSchoolsNestedInput;
    district?: Prisma.DistrictUpdateOneWithoutSchoolsNestedInput;
    community?: Prisma.CommunityUpdateOneWithoutSchoolsNestedInput;
    staff?: Prisma.SchoolStaffUpdateManyWithoutSchoolNestedInput;
    classes?: Prisma.SchoolClassUpdateManyWithoutSchoolNestedInput;
    participants?: Prisma.CampaignParticipantUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateWithoutCollectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    regionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    communityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.SchoolStaffUncheckedUpdateManyWithoutSchoolNestedInput;
    classes?: Prisma.SchoolClassUncheckedUpdateManyWithoutSchoolNestedInput;
    participants?: Prisma.CampaignParticipantUncheckedUpdateManyWithoutSchoolNestedInput;
};
export type SchoolCreateWithoutParticipantsInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    region?: Prisma.RegionCreateNestedOneWithoutSchoolsInput;
    district?: Prisma.DistrictCreateNestedOneWithoutSchoolsInput;
    community?: Prisma.CommunityCreateNestedOneWithoutSchoolsInput;
    staff?: Prisma.SchoolStaffCreateNestedManyWithoutSchoolInput;
    classes?: Prisma.SchoolClassCreateNestedManyWithoutSchoolInput;
    collections?: Prisma.SchoolCollectionCreateNestedManyWithoutSchoolInput;
};
export type SchoolUncheckedCreateWithoutParticipantsInput = {
    id?: string;
    name: string;
    regionId?: string | null;
    districtId?: string | null;
    communityId?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    staff?: Prisma.SchoolStaffUncheckedCreateNestedManyWithoutSchoolInput;
    classes?: Prisma.SchoolClassUncheckedCreateNestedManyWithoutSchoolInput;
    collections?: Prisma.SchoolCollectionUncheckedCreateNestedManyWithoutSchoolInput;
};
export type SchoolCreateOrConnectWithoutParticipantsInput = {
    where: Prisma.SchoolWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutParticipantsInput, Prisma.SchoolUncheckedCreateWithoutParticipantsInput>;
};
export type SchoolUpsertWithoutParticipantsInput = {
    update: Prisma.XOR<Prisma.SchoolUpdateWithoutParticipantsInput, Prisma.SchoolUncheckedUpdateWithoutParticipantsInput>;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutParticipantsInput, Prisma.SchoolUncheckedCreateWithoutParticipantsInput>;
    where?: Prisma.SchoolWhereInput;
};
export type SchoolUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: Prisma.SchoolWhereInput;
    data: Prisma.XOR<Prisma.SchoolUpdateWithoutParticipantsInput, Prisma.SchoolUncheckedUpdateWithoutParticipantsInput>;
};
export type SchoolUpdateWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    region?: Prisma.RegionUpdateOneWithoutSchoolsNestedInput;
    district?: Prisma.DistrictUpdateOneWithoutSchoolsNestedInput;
    community?: Prisma.CommunityUpdateOneWithoutSchoolsNestedInput;
    staff?: Prisma.SchoolStaffUpdateManyWithoutSchoolNestedInput;
    classes?: Prisma.SchoolClassUpdateManyWithoutSchoolNestedInput;
    collections?: Prisma.SchoolCollectionUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    regionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    communityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.SchoolStaffUncheckedUpdateManyWithoutSchoolNestedInput;
    classes?: Prisma.SchoolClassUncheckedUpdateManyWithoutSchoolNestedInput;
    collections?: Prisma.SchoolCollectionUncheckedUpdateManyWithoutSchoolNestedInput;
};
export type SchoolCreateManyRegionInput = {
    id?: string;
    name: string;
    districtId?: string | null;
    communityId?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolUpdateWithoutRegionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    district?: Prisma.DistrictUpdateOneWithoutSchoolsNestedInput;
    community?: Prisma.CommunityUpdateOneWithoutSchoolsNestedInput;
    staff?: Prisma.SchoolStaffUpdateManyWithoutSchoolNestedInput;
    classes?: Prisma.SchoolClassUpdateManyWithoutSchoolNestedInput;
    collections?: Prisma.SchoolCollectionUpdateManyWithoutSchoolNestedInput;
    participants?: Prisma.CampaignParticipantUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateWithoutRegionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    communityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.SchoolStaffUncheckedUpdateManyWithoutSchoolNestedInput;
    classes?: Prisma.SchoolClassUncheckedUpdateManyWithoutSchoolNestedInput;
    collections?: Prisma.SchoolCollectionUncheckedUpdateManyWithoutSchoolNestedInput;
    participants?: Prisma.CampaignParticipantUncheckedUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateManyWithoutRegionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    communityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolCreateManyDistrictInput = {
    id?: string;
    name: string;
    regionId?: string | null;
    communityId?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolUpdateWithoutDistrictInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    region?: Prisma.RegionUpdateOneWithoutSchoolsNestedInput;
    community?: Prisma.CommunityUpdateOneWithoutSchoolsNestedInput;
    staff?: Prisma.SchoolStaffUpdateManyWithoutSchoolNestedInput;
    classes?: Prisma.SchoolClassUpdateManyWithoutSchoolNestedInput;
    collections?: Prisma.SchoolCollectionUpdateManyWithoutSchoolNestedInput;
    participants?: Prisma.CampaignParticipantUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateWithoutDistrictInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    regionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    communityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.SchoolStaffUncheckedUpdateManyWithoutSchoolNestedInput;
    classes?: Prisma.SchoolClassUncheckedUpdateManyWithoutSchoolNestedInput;
    collections?: Prisma.SchoolCollectionUncheckedUpdateManyWithoutSchoolNestedInput;
    participants?: Prisma.CampaignParticipantUncheckedUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateManyWithoutDistrictInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    regionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    communityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolCreateManyCommunityInput = {
    id?: string;
    name: string;
    regionId?: string | null;
    districtId?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolUpdateWithoutCommunityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    region?: Prisma.RegionUpdateOneWithoutSchoolsNestedInput;
    district?: Prisma.DistrictUpdateOneWithoutSchoolsNestedInput;
    staff?: Prisma.SchoolStaffUpdateManyWithoutSchoolNestedInput;
    classes?: Prisma.SchoolClassUpdateManyWithoutSchoolNestedInput;
    collections?: Prisma.SchoolCollectionUpdateManyWithoutSchoolNestedInput;
    participants?: Prisma.CampaignParticipantUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateWithoutCommunityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    regionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    staff?: Prisma.SchoolStaffUncheckedUpdateManyWithoutSchoolNestedInput;
    classes?: Prisma.SchoolClassUncheckedUpdateManyWithoutSchoolNestedInput;
    collections?: Prisma.SchoolCollectionUncheckedUpdateManyWithoutSchoolNestedInput;
    participants?: Prisma.CampaignParticipantUncheckedUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateManyWithoutCommunityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    regionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    districtId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type SchoolCountOutputType
 */
export type SchoolCountOutputType = {
    staff: number;
    classes: number;
    collections: number;
    participants: number;
};
export type SchoolCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    staff?: boolean | SchoolCountOutputTypeCountStaffArgs;
    classes?: boolean | SchoolCountOutputTypeCountClassesArgs;
    collections?: boolean | SchoolCountOutputTypeCountCollectionsArgs;
    participants?: boolean | SchoolCountOutputTypeCountParticipantsArgs;
};
/**
 * SchoolCountOutputType without action
 */
export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: Prisma.SchoolCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SchoolCountOutputType without action
 */
export type SchoolCountOutputTypeCountStaffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolStaffWhereInput;
};
/**
 * SchoolCountOutputType without action
 */
export type SchoolCountOutputTypeCountClassesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolClassWhereInput;
};
/**
 * SchoolCountOutputType without action
 */
export type SchoolCountOutputTypeCountCollectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolCollectionWhereInput;
};
/**
 * SchoolCountOutputType without action
 */
export type SchoolCountOutputTypeCountParticipantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignParticipantWhereInput;
};
export type SchoolSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    regionId?: boolean;
    districtId?: boolean;
    communityId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    region?: boolean | Prisma.School$regionArgs<ExtArgs>;
    district?: boolean | Prisma.School$districtArgs<ExtArgs>;
    community?: boolean | Prisma.School$communityArgs<ExtArgs>;
    staff?: boolean | Prisma.School$staffArgs<ExtArgs>;
    classes?: boolean | Prisma.School$classesArgs<ExtArgs>;
    collections?: boolean | Prisma.School$collectionsArgs<ExtArgs>;
    participants?: boolean | Prisma.School$participantsArgs<ExtArgs>;
    _count?: boolean | Prisma.SchoolCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["school"]>;
export type SchoolSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    regionId?: boolean;
    districtId?: boolean;
    communityId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    region?: boolean | Prisma.School$regionArgs<ExtArgs>;
    district?: boolean | Prisma.School$districtArgs<ExtArgs>;
    community?: boolean | Prisma.School$communityArgs<ExtArgs>;
}, ExtArgs["result"]["school"]>;
export type SchoolSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    regionId?: boolean;
    districtId?: boolean;
    communityId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    region?: boolean | Prisma.School$regionArgs<ExtArgs>;
    district?: boolean | Prisma.School$districtArgs<ExtArgs>;
    community?: boolean | Prisma.School$communityArgs<ExtArgs>;
}, ExtArgs["result"]["school"]>;
export type SchoolSelectScalar = {
    id?: boolean;
    name?: boolean;
    regionId?: boolean;
    districtId?: boolean;
    communityId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SchoolOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "regionId" | "districtId" | "communityId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["school"]>;
export type SchoolInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    region?: boolean | Prisma.School$regionArgs<ExtArgs>;
    district?: boolean | Prisma.School$districtArgs<ExtArgs>;
    community?: boolean | Prisma.School$communityArgs<ExtArgs>;
    staff?: boolean | Prisma.School$staffArgs<ExtArgs>;
    classes?: boolean | Prisma.School$classesArgs<ExtArgs>;
    collections?: boolean | Prisma.School$collectionsArgs<ExtArgs>;
    participants?: boolean | Prisma.School$participantsArgs<ExtArgs>;
    _count?: boolean | Prisma.SchoolCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SchoolIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    region?: boolean | Prisma.School$regionArgs<ExtArgs>;
    district?: boolean | Prisma.School$districtArgs<ExtArgs>;
    community?: boolean | Prisma.School$communityArgs<ExtArgs>;
};
export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    region?: boolean | Prisma.School$regionArgs<ExtArgs>;
    district?: boolean | Prisma.School$districtArgs<ExtArgs>;
    community?: boolean | Prisma.School$communityArgs<ExtArgs>;
};
export type $SchoolPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "School";
    objects: {
        region: Prisma.$RegionPayload<ExtArgs> | null;
        district: Prisma.$DistrictPayload<ExtArgs> | null;
        community: Prisma.$CommunityPayload<ExtArgs> | null;
        staff: Prisma.$SchoolStaffPayload<ExtArgs>[];
        classes: Prisma.$SchoolClassPayload<ExtArgs>[];
        collections: Prisma.$SchoolCollectionPayload<ExtArgs>[];
        participants: Prisma.$CampaignParticipantPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        regionId: string | null;
        districtId: string | null;
        communityId: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["school"]>;
    composites: {};
};
export type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SchoolPayload, S>;
export type SchoolCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SchoolCountAggregateInputType | true;
};
export interface SchoolDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['School'];
        meta: {
            name: 'School';
        };
    };
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: Prisma.SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: Prisma.SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     *
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SchoolFindManyArgs>(args?: Prisma.SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     *
     */
    create<T extends SchoolCreateArgs>(args: Prisma.SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SchoolCreateManyArgs>(args?: Prisma.SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     *
     */
    delete<T extends SchoolDeleteArgs>(args: Prisma.SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SchoolUpdateArgs>(args: Prisma.SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: Prisma.SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: Prisma.SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: Prisma.SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(args?: Prisma.Subset<T, SchoolCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SchoolCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Prisma.Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>;
    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SchoolGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SchoolGroupByArgs['orderBy'];
    } : {
        orderBy?: SchoolGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the School model
     */
    readonly fields: SchoolFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for School.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    region<T extends Prisma.School$regionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.School$regionArgs<ExtArgs>>): Prisma.Prisma__RegionClient<runtime.Types.Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    district<T extends Prisma.School$districtArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.School$districtArgs<ExtArgs>>): Prisma.Prisma__DistrictClient<runtime.Types.Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    community<T extends Prisma.School$communityArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.School$communityArgs<ExtArgs>>): Prisma.Prisma__CommunityClient<runtime.Types.Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    staff<T extends Prisma.School$staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.School$staffArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    classes<T extends Prisma.School$classesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.School$classesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    collections<T extends Prisma.School$collectionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.School$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolCollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    participants<T extends Prisma.School$participantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.School$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the School model
 */
export interface SchoolFieldRefs {
    readonly id: Prisma.FieldRef<"School", 'String'>;
    readonly name: Prisma.FieldRef<"School", 'String'>;
    readonly regionId: Prisma.FieldRef<"School", 'String'>;
    readonly districtId: Prisma.FieldRef<"School", 'String'>;
    readonly communityId: Prisma.FieldRef<"School", 'String'>;
    readonly isActive: Prisma.FieldRef<"School", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"School", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"School", 'DateTime'>;
}
/**
 * School findUnique
 */
export type SchoolFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the School
     */
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    /**
     * Filter, which School to fetch.
     */
    where: Prisma.SchoolWhereUniqueInput;
};
/**
 * School findUniqueOrThrow
 */
export type SchoolFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the School
     */
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    /**
     * Filter, which School to fetch.
     */
    where: Prisma.SchoolWhereUniqueInput;
};
/**
 * School findFirst
 */
export type SchoolFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the School
     */
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    /**
     * Filter, which School to fetch.
     */
    where?: Prisma.SchoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Schools to fetch.
     */
    orderBy?: Prisma.SchoolOrderByWithRelationInput | Prisma.SchoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Schools.
     */
    cursor?: Prisma.SchoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Schools.
     */
    distinct?: Prisma.SchoolScalarFieldEnum | Prisma.SchoolScalarFieldEnum[];
};
/**
 * School findFirstOrThrow
 */
export type SchoolFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the School
     */
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    /**
     * Filter, which School to fetch.
     */
    where?: Prisma.SchoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Schools to fetch.
     */
    orderBy?: Prisma.SchoolOrderByWithRelationInput | Prisma.SchoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Schools.
     */
    cursor?: Prisma.SchoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Schools.
     */
    distinct?: Prisma.SchoolScalarFieldEnum | Prisma.SchoolScalarFieldEnum[];
};
/**
 * School findMany
 */
export type SchoolFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the School
     */
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    /**
     * Filter, which Schools to fetch.
     */
    where?: Prisma.SchoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Schools to fetch.
     */
    orderBy?: Prisma.SchoolOrderByWithRelationInput | Prisma.SchoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Schools.
     */
    cursor?: Prisma.SchoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Schools.
     */
    distinct?: Prisma.SchoolScalarFieldEnum | Prisma.SchoolScalarFieldEnum[];
};
/**
 * School create
 */
export type SchoolCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the School
     */
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    /**
     * The data needed to create a School.
     */
    data: Prisma.XOR<Prisma.SchoolCreateInput, Prisma.SchoolUncheckedCreateInput>;
};
/**
 * School createMany
 */
export type SchoolCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: Prisma.SchoolCreateManyInput | Prisma.SchoolCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * School createManyAndReturn
 */
export type SchoolCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: Prisma.SchoolSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the School
     */
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    /**
     * The data used to create many Schools.
     */
    data: Prisma.SchoolCreateManyInput | Prisma.SchoolCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * School update
 */
export type SchoolUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the School
     */
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    /**
     * The data needed to update a School.
     */
    data: Prisma.XOR<Prisma.SchoolUpdateInput, Prisma.SchoolUncheckedUpdateInput>;
    /**
     * Choose, which School to update.
     */
    where: Prisma.SchoolWhereUniqueInput;
};
/**
 * School updateMany
 */
export type SchoolUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: Prisma.XOR<Prisma.SchoolUpdateManyMutationInput, Prisma.SchoolUncheckedUpdateManyInput>;
    /**
     * Filter which Schools to update
     */
    where?: Prisma.SchoolWhereInput;
    /**
     * Limit how many Schools to update.
     */
    limit?: number;
};
/**
 * School updateManyAndReturn
 */
export type SchoolUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: Prisma.SchoolSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the School
     */
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    /**
     * The data used to update Schools.
     */
    data: Prisma.XOR<Prisma.SchoolUpdateManyMutationInput, Prisma.SchoolUncheckedUpdateManyInput>;
    /**
     * Filter which Schools to update
     */
    where?: Prisma.SchoolWhereInput;
    /**
     * Limit how many Schools to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * School upsert
 */
export type SchoolUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the School
     */
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: Prisma.SchoolWhereUniqueInput;
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: Prisma.XOR<Prisma.SchoolCreateInput, Prisma.SchoolUncheckedCreateInput>;
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SchoolUpdateInput, Prisma.SchoolUncheckedUpdateInput>;
};
/**
 * School delete
 */
export type SchoolDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the School
     */
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    /**
     * Filter which School to delete.
     */
    where: Prisma.SchoolWhereUniqueInput;
};
/**
 * School deleteMany
 */
export type SchoolDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: Prisma.SchoolWhereInput;
    /**
     * Limit how many Schools to delete.
     */
    limit?: number;
};
/**
 * School.region
 */
export type School$regionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: Prisma.RegionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Region
     */
    omit?: Prisma.RegionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegionInclude<ExtArgs> | null;
    where?: Prisma.RegionWhereInput;
};
/**
 * School.district
 */
export type School$districtArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: Prisma.DistrictSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the District
     */
    omit?: Prisma.DistrictOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DistrictInclude<ExtArgs> | null;
    where?: Prisma.DistrictWhereInput;
};
/**
 * School.community
 */
export type School$communityArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: Prisma.CommunitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Community
     */
    omit?: Prisma.CommunityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommunityInclude<ExtArgs> | null;
    where?: Prisma.CommunityWhereInput;
};
/**
 * School.staff
 */
export type School$staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SchoolStaffWhereInput;
    orderBy?: Prisma.SchoolStaffOrderByWithRelationInput | Prisma.SchoolStaffOrderByWithRelationInput[];
    cursor?: Prisma.SchoolStaffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchoolStaffScalarFieldEnum | Prisma.SchoolStaffScalarFieldEnum[];
};
/**
 * School.classes
 */
export type School$classesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolClass
     */
    select?: Prisma.SchoolClassSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolClass
     */
    omit?: Prisma.SchoolClassOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolClassInclude<ExtArgs> | null;
    where?: Prisma.SchoolClassWhereInput;
    orderBy?: Prisma.SchoolClassOrderByWithRelationInput | Prisma.SchoolClassOrderByWithRelationInput[];
    cursor?: Prisma.SchoolClassWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchoolClassScalarFieldEnum | Prisma.SchoolClassScalarFieldEnum[];
};
/**
 * School.collections
 */
export type School$collectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCollection
     */
    select?: Prisma.SchoolCollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolCollection
     */
    omit?: Prisma.SchoolCollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolCollectionInclude<ExtArgs> | null;
    where?: Prisma.SchoolCollectionWhereInput;
    orderBy?: Prisma.SchoolCollectionOrderByWithRelationInput | Prisma.SchoolCollectionOrderByWithRelationInput[];
    cursor?: Prisma.SchoolCollectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchoolCollectionScalarFieldEnum | Prisma.SchoolCollectionScalarFieldEnum[];
};
/**
 * School.participants
 */
export type School$participantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignParticipant
     */
    select?: Prisma.CampaignParticipantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CampaignParticipant
     */
    omit?: Prisma.CampaignParticipantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampaignParticipantInclude<ExtArgs> | null;
    where?: Prisma.CampaignParticipantWhereInput;
    orderBy?: Prisma.CampaignParticipantOrderByWithRelationInput | Prisma.CampaignParticipantOrderByWithRelationInput[];
    cursor?: Prisma.CampaignParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignParticipantScalarFieldEnum | Prisma.CampaignParticipantScalarFieldEnum[];
};
/**
 * School without action
 */
export type SchoolDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the School
     */
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolInclude<ExtArgs> | null;
};

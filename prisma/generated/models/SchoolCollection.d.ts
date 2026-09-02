import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model SchoolCollection
 *
 */
export type SchoolCollectionModel = runtime.Types.Result.DefaultSelection<Prisma.$SchoolCollectionPayload>;
export type AggregateSchoolCollection = {
    _count: SchoolCollectionCountAggregateOutputType | null;
    _avg: SchoolCollectionAvgAggregateOutputType | null;
    _sum: SchoolCollectionSumAggregateOutputType | null;
    _min: SchoolCollectionMinAggregateOutputType | null;
    _max: SchoolCollectionMaxAggregateOutputType | null;
};
export type SchoolCollectionAvgAggregateOutputType = {
    totalWeight: runtime.Decimal | null;
    totalPoints: number | null;
};
export type SchoolCollectionSumAggregateOutputType = {
    totalWeight: runtime.Decimal | null;
    totalPoints: number | null;
};
export type SchoolCollectionMinAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    classId: string | null;
    recordedById: string | null;
    scope: $Enums.SchoolCollectionScope | null;
    totalWeight: runtime.Decimal | null;
    totalPoints: number | null;
    campaignId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SchoolCollectionMaxAggregateOutputType = {
    id: string | null;
    schoolId: string | null;
    classId: string | null;
    recordedById: string | null;
    scope: $Enums.SchoolCollectionScope | null;
    totalWeight: runtime.Decimal | null;
    totalPoints: number | null;
    campaignId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SchoolCollectionCountAggregateOutputType = {
    id: number;
    schoolId: number;
    classId: number;
    recordedById: number;
    scope: number;
    totalWeight: number;
    totalPoints: number;
    campaignId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SchoolCollectionAvgAggregateInputType = {
    totalWeight?: true;
    totalPoints?: true;
};
export type SchoolCollectionSumAggregateInputType = {
    totalWeight?: true;
    totalPoints?: true;
};
export type SchoolCollectionMinAggregateInputType = {
    id?: true;
    schoolId?: true;
    classId?: true;
    recordedById?: true;
    scope?: true;
    totalWeight?: true;
    totalPoints?: true;
    campaignId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SchoolCollectionMaxAggregateInputType = {
    id?: true;
    schoolId?: true;
    classId?: true;
    recordedById?: true;
    scope?: true;
    totalWeight?: true;
    totalPoints?: true;
    campaignId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SchoolCollectionCountAggregateInputType = {
    id?: true;
    schoolId?: true;
    classId?: true;
    recordedById?: true;
    scope?: true;
    totalWeight?: true;
    totalPoints?: true;
    campaignId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SchoolCollectionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolCollection to aggregate.
     */
    where?: Prisma.SchoolCollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SchoolCollections to fetch.
     */
    orderBy?: Prisma.SchoolCollectionOrderByWithRelationInput | Prisma.SchoolCollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SchoolCollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SchoolCollections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SchoolCollections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SchoolCollections
    **/
    _count?: true | SchoolCollectionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SchoolCollectionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SchoolCollectionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SchoolCollectionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SchoolCollectionMaxAggregateInputType;
};
export type GetSchoolCollectionAggregateType<T extends SchoolCollectionAggregateArgs> = {
    [P in keyof T & keyof AggregateSchoolCollection]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSchoolCollection[P]> : Prisma.GetScalarType<T[P], AggregateSchoolCollection[P]>;
};
export type SchoolCollectionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolCollectionWhereInput;
    orderBy?: Prisma.SchoolCollectionOrderByWithAggregationInput | Prisma.SchoolCollectionOrderByWithAggregationInput[];
    by: Prisma.SchoolCollectionScalarFieldEnum[] | Prisma.SchoolCollectionScalarFieldEnum;
    having?: Prisma.SchoolCollectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SchoolCollectionCountAggregateInputType | true;
    _avg?: SchoolCollectionAvgAggregateInputType;
    _sum?: SchoolCollectionSumAggregateInputType;
    _min?: SchoolCollectionMinAggregateInputType;
    _max?: SchoolCollectionMaxAggregateInputType;
};
export type SchoolCollectionGroupByOutputType = {
    id: string;
    schoolId: string;
    classId: string | null;
    recordedById: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal;
    totalPoints: number;
    campaignId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SchoolCollectionCountAggregateOutputType | null;
    _avg: SchoolCollectionAvgAggregateOutputType | null;
    _sum: SchoolCollectionSumAggregateOutputType | null;
    _min: SchoolCollectionMinAggregateOutputType | null;
    _max: SchoolCollectionMaxAggregateOutputType | null;
};
export type GetSchoolCollectionGroupByPayload<T extends SchoolCollectionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SchoolCollectionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SchoolCollectionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SchoolCollectionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SchoolCollectionGroupByOutputType[P]>;
}>>;
export type SchoolCollectionWhereInput = {
    AND?: Prisma.SchoolCollectionWhereInput | Prisma.SchoolCollectionWhereInput[];
    OR?: Prisma.SchoolCollectionWhereInput[];
    NOT?: Prisma.SchoolCollectionWhereInput | Prisma.SchoolCollectionWhereInput[];
    id?: Prisma.StringFilter<"SchoolCollection"> | string;
    schoolId?: Prisma.StringFilter<"SchoolCollection"> | string;
    classId?: Prisma.StringNullableFilter<"SchoolCollection"> | string | null;
    recordedById?: Prisma.StringFilter<"SchoolCollection"> | string;
    scope?: Prisma.EnumSchoolCollectionScopeFilter<"SchoolCollection"> | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFilter<"SchoolCollection"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFilter<"SchoolCollection"> | number;
    campaignId?: Prisma.StringNullableFilter<"SchoolCollection"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SchoolCollection"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SchoolCollection"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    class?: Prisma.XOR<Prisma.SchoolClassNullableScalarRelationFilter, Prisma.SchoolClassWhereInput> | null;
    campaign?: Prisma.XOR<Prisma.CampaignNullableScalarRelationFilter, Prisma.CampaignWhereInput> | null;
    recordedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    items?: Prisma.SchoolCollectionItemListRelationFilter;
};
export type SchoolCollectionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    classId?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    totalWeight?: Prisma.SortOrder;
    totalPoints?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    class?: Prisma.SchoolClassOrderByWithRelationInput;
    campaign?: Prisma.CampaignOrderByWithRelationInput;
    recordedBy?: Prisma.UserOrderByWithRelationInput;
    items?: Prisma.SchoolCollectionItemOrderByRelationAggregateInput;
};
export type SchoolCollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SchoolCollectionWhereInput | Prisma.SchoolCollectionWhereInput[];
    OR?: Prisma.SchoolCollectionWhereInput[];
    NOT?: Prisma.SchoolCollectionWhereInput | Prisma.SchoolCollectionWhereInput[];
    schoolId?: Prisma.StringFilter<"SchoolCollection"> | string;
    classId?: Prisma.StringNullableFilter<"SchoolCollection"> | string | null;
    recordedById?: Prisma.StringFilter<"SchoolCollection"> | string;
    scope?: Prisma.EnumSchoolCollectionScopeFilter<"SchoolCollection"> | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFilter<"SchoolCollection"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFilter<"SchoolCollection"> | number;
    campaignId?: Prisma.StringNullableFilter<"SchoolCollection"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SchoolCollection"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SchoolCollection"> | Date | string;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    class?: Prisma.XOR<Prisma.SchoolClassNullableScalarRelationFilter, Prisma.SchoolClassWhereInput> | null;
    campaign?: Prisma.XOR<Prisma.CampaignNullableScalarRelationFilter, Prisma.CampaignWhereInput> | null;
    recordedBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    items?: Prisma.SchoolCollectionItemListRelationFilter;
}, "id">;
export type SchoolCollectionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    classId?: Prisma.SortOrderInput | Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    totalWeight?: Prisma.SortOrder;
    totalPoints?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SchoolCollectionCountOrderByAggregateInput;
    _avg?: Prisma.SchoolCollectionAvgOrderByAggregateInput;
    _max?: Prisma.SchoolCollectionMaxOrderByAggregateInput;
    _min?: Prisma.SchoolCollectionMinOrderByAggregateInput;
    _sum?: Prisma.SchoolCollectionSumOrderByAggregateInput;
};
export type SchoolCollectionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SchoolCollectionScalarWhereWithAggregatesInput | Prisma.SchoolCollectionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SchoolCollectionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SchoolCollectionScalarWhereWithAggregatesInput | Prisma.SchoolCollectionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SchoolCollection"> | string;
    schoolId?: Prisma.StringWithAggregatesFilter<"SchoolCollection"> | string;
    classId?: Prisma.StringNullableWithAggregatesFilter<"SchoolCollection"> | string | null;
    recordedById?: Prisma.StringWithAggregatesFilter<"SchoolCollection"> | string;
    scope?: Prisma.EnumSchoolCollectionScopeWithAggregatesFilter<"SchoolCollection"> | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalWithAggregatesFilter<"SchoolCollection"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntWithAggregatesFilter<"SchoolCollection"> | number;
    campaignId?: Prisma.StringNullableWithAggregatesFilter<"SchoolCollection"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SchoolCollection"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SchoolCollection"> | Date | string;
};
export type SchoolCollectionCreateInput = {
    id?: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCollectionsInput;
    class?: Prisma.SchoolClassCreateNestedOneWithoutCollectionsInput;
    campaign?: Prisma.CampaignCreateNestedOneWithoutCollectionsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutRecordedSchoolCollectionsInput;
    items?: Prisma.SchoolCollectionItemCreateNestedManyWithoutCollectionInput;
};
export type SchoolCollectionUncheckedCreateInput = {
    id?: string;
    schoolId: string;
    classId?: string | null;
    recordedById: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    campaignId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.SchoolCollectionItemUncheckedCreateNestedManyWithoutCollectionInput;
};
export type SchoolCollectionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCollectionsNestedInput;
    class?: Prisma.SchoolClassUpdateOneWithoutCollectionsNestedInput;
    campaign?: Prisma.CampaignUpdateOneWithoutCollectionsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutRecordedSchoolCollectionsNestedInput;
    items?: Prisma.SchoolCollectionItemUpdateManyWithoutCollectionNestedInput;
};
export type SchoolCollectionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SchoolCollectionItemUncheckedUpdateManyWithoutCollectionNestedInput;
};
export type SchoolCollectionCreateManyInput = {
    id?: string;
    schoolId: string;
    classId?: string | null;
    recordedById: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    campaignId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolCollectionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolCollectionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolCollectionListRelationFilter = {
    every?: Prisma.SchoolCollectionWhereInput;
    some?: Prisma.SchoolCollectionWhereInput;
    none?: Prisma.SchoolCollectionWhereInput;
};
export type SchoolCollectionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SchoolCollectionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    totalWeight?: Prisma.SortOrder;
    totalPoints?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SchoolCollectionAvgOrderByAggregateInput = {
    totalWeight?: Prisma.SortOrder;
    totalPoints?: Prisma.SortOrder;
};
export type SchoolCollectionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    totalWeight?: Prisma.SortOrder;
    totalPoints?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SchoolCollectionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    classId?: Prisma.SortOrder;
    recordedById?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    totalWeight?: Prisma.SortOrder;
    totalPoints?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SchoolCollectionSumOrderByAggregateInput = {
    totalWeight?: Prisma.SortOrder;
    totalPoints?: Prisma.SortOrder;
};
export type SchoolCollectionScalarRelationFilter = {
    is?: Prisma.SchoolCollectionWhereInput;
    isNot?: Prisma.SchoolCollectionWhereInput;
};
export type SchoolCollectionCreateNestedManyWithoutRecordedByInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutRecordedByInput, Prisma.SchoolCollectionUncheckedCreateWithoutRecordedByInput> | Prisma.SchoolCollectionCreateWithoutRecordedByInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutRecordedByInput | Prisma.SchoolCollectionCreateOrConnectWithoutRecordedByInput[];
    createMany?: Prisma.SchoolCollectionCreateManyRecordedByInputEnvelope;
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
};
export type SchoolCollectionUncheckedCreateNestedManyWithoutRecordedByInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutRecordedByInput, Prisma.SchoolCollectionUncheckedCreateWithoutRecordedByInput> | Prisma.SchoolCollectionCreateWithoutRecordedByInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutRecordedByInput | Prisma.SchoolCollectionCreateOrConnectWithoutRecordedByInput[];
    createMany?: Prisma.SchoolCollectionCreateManyRecordedByInputEnvelope;
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
};
export type SchoolCollectionUpdateManyWithoutRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutRecordedByInput, Prisma.SchoolCollectionUncheckedCreateWithoutRecordedByInput> | Prisma.SchoolCollectionCreateWithoutRecordedByInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutRecordedByInput | Prisma.SchoolCollectionCreateOrConnectWithoutRecordedByInput[];
    upsert?: Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutRecordedByInput | Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutRecordedByInput[];
    createMany?: Prisma.SchoolCollectionCreateManyRecordedByInputEnvelope;
    set?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    disconnect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    delete?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    update?: Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutRecordedByInput | Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutRecordedByInput[];
    updateMany?: Prisma.SchoolCollectionUpdateManyWithWhereWithoutRecordedByInput | Prisma.SchoolCollectionUpdateManyWithWhereWithoutRecordedByInput[];
    deleteMany?: Prisma.SchoolCollectionScalarWhereInput | Prisma.SchoolCollectionScalarWhereInput[];
};
export type SchoolCollectionUncheckedUpdateManyWithoutRecordedByNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutRecordedByInput, Prisma.SchoolCollectionUncheckedCreateWithoutRecordedByInput> | Prisma.SchoolCollectionCreateWithoutRecordedByInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutRecordedByInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutRecordedByInput | Prisma.SchoolCollectionCreateOrConnectWithoutRecordedByInput[];
    upsert?: Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutRecordedByInput | Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutRecordedByInput[];
    createMany?: Prisma.SchoolCollectionCreateManyRecordedByInputEnvelope;
    set?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    disconnect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    delete?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    update?: Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutRecordedByInput | Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutRecordedByInput[];
    updateMany?: Prisma.SchoolCollectionUpdateManyWithWhereWithoutRecordedByInput | Prisma.SchoolCollectionUpdateManyWithWhereWithoutRecordedByInput[];
    deleteMany?: Prisma.SchoolCollectionScalarWhereInput | Prisma.SchoolCollectionScalarWhereInput[];
};
export type SchoolCollectionCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutSchoolInput, Prisma.SchoolCollectionUncheckedCreateWithoutSchoolInput> | Prisma.SchoolCollectionCreateWithoutSchoolInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutSchoolInput | Prisma.SchoolCollectionCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.SchoolCollectionCreateManySchoolInputEnvelope;
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
};
export type SchoolCollectionUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutSchoolInput, Prisma.SchoolCollectionUncheckedCreateWithoutSchoolInput> | Prisma.SchoolCollectionCreateWithoutSchoolInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutSchoolInput | Prisma.SchoolCollectionCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.SchoolCollectionCreateManySchoolInputEnvelope;
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
};
export type SchoolCollectionUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutSchoolInput, Prisma.SchoolCollectionUncheckedCreateWithoutSchoolInput> | Prisma.SchoolCollectionCreateWithoutSchoolInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutSchoolInput | Prisma.SchoolCollectionCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutSchoolInput | Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.SchoolCollectionCreateManySchoolInputEnvelope;
    set?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    disconnect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    delete?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    update?: Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutSchoolInput | Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.SchoolCollectionUpdateManyWithWhereWithoutSchoolInput | Prisma.SchoolCollectionUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.SchoolCollectionScalarWhereInput | Prisma.SchoolCollectionScalarWhereInput[];
};
export type SchoolCollectionUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutSchoolInput, Prisma.SchoolCollectionUncheckedCreateWithoutSchoolInput> | Prisma.SchoolCollectionCreateWithoutSchoolInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutSchoolInput | Prisma.SchoolCollectionCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutSchoolInput | Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.SchoolCollectionCreateManySchoolInputEnvelope;
    set?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    disconnect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    delete?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    update?: Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutSchoolInput | Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.SchoolCollectionUpdateManyWithWhereWithoutSchoolInput | Prisma.SchoolCollectionUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.SchoolCollectionScalarWhereInput | Prisma.SchoolCollectionScalarWhereInput[];
};
export type SchoolCollectionCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutClassInput, Prisma.SchoolCollectionUncheckedCreateWithoutClassInput> | Prisma.SchoolCollectionCreateWithoutClassInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutClassInput | Prisma.SchoolCollectionCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.SchoolCollectionCreateManyClassInputEnvelope;
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
};
export type SchoolCollectionUncheckedCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutClassInput, Prisma.SchoolCollectionUncheckedCreateWithoutClassInput> | Prisma.SchoolCollectionCreateWithoutClassInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutClassInput | Prisma.SchoolCollectionCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.SchoolCollectionCreateManyClassInputEnvelope;
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
};
export type SchoolCollectionUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutClassInput, Prisma.SchoolCollectionUncheckedCreateWithoutClassInput> | Prisma.SchoolCollectionCreateWithoutClassInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutClassInput | Prisma.SchoolCollectionCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutClassInput | Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.SchoolCollectionCreateManyClassInputEnvelope;
    set?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    disconnect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    delete?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    update?: Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutClassInput | Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.SchoolCollectionUpdateManyWithWhereWithoutClassInput | Prisma.SchoolCollectionUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.SchoolCollectionScalarWhereInput | Prisma.SchoolCollectionScalarWhereInput[];
};
export type SchoolCollectionUncheckedUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutClassInput, Prisma.SchoolCollectionUncheckedCreateWithoutClassInput> | Prisma.SchoolCollectionCreateWithoutClassInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutClassInput | Prisma.SchoolCollectionCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutClassInput | Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.SchoolCollectionCreateManyClassInputEnvelope;
    set?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    disconnect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    delete?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    update?: Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutClassInput | Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.SchoolCollectionUpdateManyWithWhereWithoutClassInput | Prisma.SchoolCollectionUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.SchoolCollectionScalarWhereInput | Prisma.SchoolCollectionScalarWhereInput[];
};
export type EnumSchoolCollectionScopeFieldUpdateOperationsInput = {
    set?: $Enums.SchoolCollectionScope;
};
export type SchoolCollectionCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutItemsInput, Prisma.SchoolCollectionUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutItemsInput;
    connect?: Prisma.SchoolCollectionWhereUniqueInput;
};
export type SchoolCollectionUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutItemsInput, Prisma.SchoolCollectionUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.SchoolCollectionUpsertWithoutItemsInput;
    connect?: Prisma.SchoolCollectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SchoolCollectionUpdateToOneWithWhereWithoutItemsInput, Prisma.SchoolCollectionUpdateWithoutItemsInput>, Prisma.SchoolCollectionUncheckedUpdateWithoutItemsInput>;
};
export type SchoolCollectionCreateNestedManyWithoutCampaignInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutCampaignInput, Prisma.SchoolCollectionUncheckedCreateWithoutCampaignInput> | Prisma.SchoolCollectionCreateWithoutCampaignInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutCampaignInput | Prisma.SchoolCollectionCreateOrConnectWithoutCampaignInput[];
    createMany?: Prisma.SchoolCollectionCreateManyCampaignInputEnvelope;
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
};
export type SchoolCollectionUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutCampaignInput, Prisma.SchoolCollectionUncheckedCreateWithoutCampaignInput> | Prisma.SchoolCollectionCreateWithoutCampaignInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutCampaignInput | Prisma.SchoolCollectionCreateOrConnectWithoutCampaignInput[];
    createMany?: Prisma.SchoolCollectionCreateManyCampaignInputEnvelope;
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
};
export type SchoolCollectionUpdateManyWithoutCampaignNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutCampaignInput, Prisma.SchoolCollectionUncheckedCreateWithoutCampaignInput> | Prisma.SchoolCollectionCreateWithoutCampaignInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutCampaignInput | Prisma.SchoolCollectionCreateOrConnectWithoutCampaignInput[];
    upsert?: Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutCampaignInput | Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutCampaignInput[];
    createMany?: Prisma.SchoolCollectionCreateManyCampaignInputEnvelope;
    set?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    disconnect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    delete?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    update?: Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutCampaignInput | Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutCampaignInput[];
    updateMany?: Prisma.SchoolCollectionUpdateManyWithWhereWithoutCampaignInput | Prisma.SchoolCollectionUpdateManyWithWhereWithoutCampaignInput[];
    deleteMany?: Prisma.SchoolCollectionScalarWhereInput | Prisma.SchoolCollectionScalarWhereInput[];
};
export type SchoolCollectionUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutCampaignInput, Prisma.SchoolCollectionUncheckedCreateWithoutCampaignInput> | Prisma.SchoolCollectionCreateWithoutCampaignInput[] | Prisma.SchoolCollectionUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.SchoolCollectionCreateOrConnectWithoutCampaignInput | Prisma.SchoolCollectionCreateOrConnectWithoutCampaignInput[];
    upsert?: Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutCampaignInput | Prisma.SchoolCollectionUpsertWithWhereUniqueWithoutCampaignInput[];
    createMany?: Prisma.SchoolCollectionCreateManyCampaignInputEnvelope;
    set?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    disconnect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    delete?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    connect?: Prisma.SchoolCollectionWhereUniqueInput | Prisma.SchoolCollectionWhereUniqueInput[];
    update?: Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutCampaignInput | Prisma.SchoolCollectionUpdateWithWhereUniqueWithoutCampaignInput[];
    updateMany?: Prisma.SchoolCollectionUpdateManyWithWhereWithoutCampaignInput | Prisma.SchoolCollectionUpdateManyWithWhereWithoutCampaignInput[];
    deleteMany?: Prisma.SchoolCollectionScalarWhereInput | Prisma.SchoolCollectionScalarWhereInput[];
};
export type SchoolCollectionCreateWithoutRecordedByInput = {
    id?: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCollectionsInput;
    class?: Prisma.SchoolClassCreateNestedOneWithoutCollectionsInput;
    campaign?: Prisma.CampaignCreateNestedOneWithoutCollectionsInput;
    items?: Prisma.SchoolCollectionItemCreateNestedManyWithoutCollectionInput;
};
export type SchoolCollectionUncheckedCreateWithoutRecordedByInput = {
    id?: string;
    schoolId: string;
    classId?: string | null;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    campaignId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.SchoolCollectionItemUncheckedCreateNestedManyWithoutCollectionInput;
};
export type SchoolCollectionCreateOrConnectWithoutRecordedByInput = {
    where: Prisma.SchoolCollectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutRecordedByInput, Prisma.SchoolCollectionUncheckedCreateWithoutRecordedByInput>;
};
export type SchoolCollectionCreateManyRecordedByInputEnvelope = {
    data: Prisma.SchoolCollectionCreateManyRecordedByInput | Prisma.SchoolCollectionCreateManyRecordedByInput[];
    skipDuplicates?: boolean;
};
export type SchoolCollectionUpsertWithWhereUniqueWithoutRecordedByInput = {
    where: Prisma.SchoolCollectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SchoolCollectionUpdateWithoutRecordedByInput, Prisma.SchoolCollectionUncheckedUpdateWithoutRecordedByInput>;
    create: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutRecordedByInput, Prisma.SchoolCollectionUncheckedCreateWithoutRecordedByInput>;
};
export type SchoolCollectionUpdateWithWhereUniqueWithoutRecordedByInput = {
    where: Prisma.SchoolCollectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SchoolCollectionUpdateWithoutRecordedByInput, Prisma.SchoolCollectionUncheckedUpdateWithoutRecordedByInput>;
};
export type SchoolCollectionUpdateManyWithWhereWithoutRecordedByInput = {
    where: Prisma.SchoolCollectionScalarWhereInput;
    data: Prisma.XOR<Prisma.SchoolCollectionUpdateManyMutationInput, Prisma.SchoolCollectionUncheckedUpdateManyWithoutRecordedByInput>;
};
export type SchoolCollectionScalarWhereInput = {
    AND?: Prisma.SchoolCollectionScalarWhereInput | Prisma.SchoolCollectionScalarWhereInput[];
    OR?: Prisma.SchoolCollectionScalarWhereInput[];
    NOT?: Prisma.SchoolCollectionScalarWhereInput | Prisma.SchoolCollectionScalarWhereInput[];
    id?: Prisma.StringFilter<"SchoolCollection"> | string;
    schoolId?: Prisma.StringFilter<"SchoolCollection"> | string;
    classId?: Prisma.StringNullableFilter<"SchoolCollection"> | string | null;
    recordedById?: Prisma.StringFilter<"SchoolCollection"> | string;
    scope?: Prisma.EnumSchoolCollectionScopeFilter<"SchoolCollection"> | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFilter<"SchoolCollection"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFilter<"SchoolCollection"> | number;
    campaignId?: Prisma.StringNullableFilter<"SchoolCollection"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SchoolCollection"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SchoolCollection"> | Date | string;
};
export type SchoolCollectionCreateWithoutSchoolInput = {
    id?: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    class?: Prisma.SchoolClassCreateNestedOneWithoutCollectionsInput;
    campaign?: Prisma.CampaignCreateNestedOneWithoutCollectionsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutRecordedSchoolCollectionsInput;
    items?: Prisma.SchoolCollectionItemCreateNestedManyWithoutCollectionInput;
};
export type SchoolCollectionUncheckedCreateWithoutSchoolInput = {
    id?: string;
    classId?: string | null;
    recordedById: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    campaignId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.SchoolCollectionItemUncheckedCreateNestedManyWithoutCollectionInput;
};
export type SchoolCollectionCreateOrConnectWithoutSchoolInput = {
    where: Prisma.SchoolCollectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutSchoolInput, Prisma.SchoolCollectionUncheckedCreateWithoutSchoolInput>;
};
export type SchoolCollectionCreateManySchoolInputEnvelope = {
    data: Prisma.SchoolCollectionCreateManySchoolInput | Prisma.SchoolCollectionCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type SchoolCollectionUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.SchoolCollectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SchoolCollectionUpdateWithoutSchoolInput, Prisma.SchoolCollectionUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutSchoolInput, Prisma.SchoolCollectionUncheckedCreateWithoutSchoolInput>;
};
export type SchoolCollectionUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.SchoolCollectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SchoolCollectionUpdateWithoutSchoolInput, Prisma.SchoolCollectionUncheckedUpdateWithoutSchoolInput>;
};
export type SchoolCollectionUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.SchoolCollectionScalarWhereInput;
    data: Prisma.XOR<Prisma.SchoolCollectionUpdateManyMutationInput, Prisma.SchoolCollectionUncheckedUpdateManyWithoutSchoolInput>;
};
export type SchoolCollectionCreateWithoutClassInput = {
    id?: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCollectionsInput;
    campaign?: Prisma.CampaignCreateNestedOneWithoutCollectionsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutRecordedSchoolCollectionsInput;
    items?: Prisma.SchoolCollectionItemCreateNestedManyWithoutCollectionInput;
};
export type SchoolCollectionUncheckedCreateWithoutClassInput = {
    id?: string;
    schoolId: string;
    recordedById: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    campaignId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.SchoolCollectionItemUncheckedCreateNestedManyWithoutCollectionInput;
};
export type SchoolCollectionCreateOrConnectWithoutClassInput = {
    where: Prisma.SchoolCollectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutClassInput, Prisma.SchoolCollectionUncheckedCreateWithoutClassInput>;
};
export type SchoolCollectionCreateManyClassInputEnvelope = {
    data: Prisma.SchoolCollectionCreateManyClassInput | Prisma.SchoolCollectionCreateManyClassInput[];
    skipDuplicates?: boolean;
};
export type SchoolCollectionUpsertWithWhereUniqueWithoutClassInput = {
    where: Prisma.SchoolCollectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SchoolCollectionUpdateWithoutClassInput, Prisma.SchoolCollectionUncheckedUpdateWithoutClassInput>;
    create: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutClassInput, Prisma.SchoolCollectionUncheckedCreateWithoutClassInput>;
};
export type SchoolCollectionUpdateWithWhereUniqueWithoutClassInput = {
    where: Prisma.SchoolCollectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SchoolCollectionUpdateWithoutClassInput, Prisma.SchoolCollectionUncheckedUpdateWithoutClassInput>;
};
export type SchoolCollectionUpdateManyWithWhereWithoutClassInput = {
    where: Prisma.SchoolCollectionScalarWhereInput;
    data: Prisma.XOR<Prisma.SchoolCollectionUpdateManyMutationInput, Prisma.SchoolCollectionUncheckedUpdateManyWithoutClassInput>;
};
export type SchoolCollectionCreateWithoutItemsInput = {
    id?: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCollectionsInput;
    class?: Prisma.SchoolClassCreateNestedOneWithoutCollectionsInput;
    campaign?: Prisma.CampaignCreateNestedOneWithoutCollectionsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutRecordedSchoolCollectionsInput;
};
export type SchoolCollectionUncheckedCreateWithoutItemsInput = {
    id?: string;
    schoolId: string;
    classId?: string | null;
    recordedById: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    campaignId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolCollectionCreateOrConnectWithoutItemsInput = {
    where: Prisma.SchoolCollectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutItemsInput, Prisma.SchoolCollectionUncheckedCreateWithoutItemsInput>;
};
export type SchoolCollectionUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.SchoolCollectionUpdateWithoutItemsInput, Prisma.SchoolCollectionUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutItemsInput, Prisma.SchoolCollectionUncheckedCreateWithoutItemsInput>;
    where?: Prisma.SchoolCollectionWhereInput;
};
export type SchoolCollectionUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.SchoolCollectionWhereInput;
    data: Prisma.XOR<Prisma.SchoolCollectionUpdateWithoutItemsInput, Prisma.SchoolCollectionUncheckedUpdateWithoutItemsInput>;
};
export type SchoolCollectionUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCollectionsNestedInput;
    class?: Prisma.SchoolClassUpdateOneWithoutCollectionsNestedInput;
    campaign?: Prisma.CampaignUpdateOneWithoutCollectionsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutRecordedSchoolCollectionsNestedInput;
};
export type SchoolCollectionUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolCollectionCreateWithoutCampaignInput = {
    id?: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    school: Prisma.SchoolCreateNestedOneWithoutCollectionsInput;
    class?: Prisma.SchoolClassCreateNestedOneWithoutCollectionsInput;
    recordedBy: Prisma.UserCreateNestedOneWithoutRecordedSchoolCollectionsInput;
    items?: Prisma.SchoolCollectionItemCreateNestedManyWithoutCollectionInput;
};
export type SchoolCollectionUncheckedCreateWithoutCampaignInput = {
    id?: string;
    schoolId: string;
    classId?: string | null;
    recordedById: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.SchoolCollectionItemUncheckedCreateNestedManyWithoutCollectionInput;
};
export type SchoolCollectionCreateOrConnectWithoutCampaignInput = {
    where: Prisma.SchoolCollectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutCampaignInput, Prisma.SchoolCollectionUncheckedCreateWithoutCampaignInput>;
};
export type SchoolCollectionCreateManyCampaignInputEnvelope = {
    data: Prisma.SchoolCollectionCreateManyCampaignInput | Prisma.SchoolCollectionCreateManyCampaignInput[];
    skipDuplicates?: boolean;
};
export type SchoolCollectionUpsertWithWhereUniqueWithoutCampaignInput = {
    where: Prisma.SchoolCollectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SchoolCollectionUpdateWithoutCampaignInput, Prisma.SchoolCollectionUncheckedUpdateWithoutCampaignInput>;
    create: Prisma.XOR<Prisma.SchoolCollectionCreateWithoutCampaignInput, Prisma.SchoolCollectionUncheckedCreateWithoutCampaignInput>;
};
export type SchoolCollectionUpdateWithWhereUniqueWithoutCampaignInput = {
    where: Prisma.SchoolCollectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SchoolCollectionUpdateWithoutCampaignInput, Prisma.SchoolCollectionUncheckedUpdateWithoutCampaignInput>;
};
export type SchoolCollectionUpdateManyWithWhereWithoutCampaignInput = {
    where: Prisma.SchoolCollectionScalarWhereInput;
    data: Prisma.XOR<Prisma.SchoolCollectionUpdateManyMutationInput, Prisma.SchoolCollectionUncheckedUpdateManyWithoutCampaignInput>;
};
export type SchoolCollectionCreateManyRecordedByInput = {
    id?: string;
    schoolId: string;
    classId?: string | null;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    campaignId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolCollectionUpdateWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCollectionsNestedInput;
    class?: Prisma.SchoolClassUpdateOneWithoutCollectionsNestedInput;
    campaign?: Prisma.CampaignUpdateOneWithoutCollectionsNestedInput;
    items?: Prisma.SchoolCollectionItemUpdateManyWithoutCollectionNestedInput;
};
export type SchoolCollectionUncheckedUpdateWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SchoolCollectionItemUncheckedUpdateManyWithoutCollectionNestedInput;
};
export type SchoolCollectionUncheckedUpdateManyWithoutRecordedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolCollectionCreateManySchoolInput = {
    id?: string;
    classId?: string | null;
    recordedById: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    campaignId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolCollectionUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.SchoolClassUpdateOneWithoutCollectionsNestedInput;
    campaign?: Prisma.CampaignUpdateOneWithoutCollectionsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutRecordedSchoolCollectionsNestedInput;
    items?: Prisma.SchoolCollectionItemUpdateManyWithoutCollectionNestedInput;
};
export type SchoolCollectionUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SchoolCollectionItemUncheckedUpdateManyWithoutCollectionNestedInput;
};
export type SchoolCollectionUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolCollectionCreateManyClassInput = {
    id?: string;
    schoolId: string;
    recordedById: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    campaignId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolCollectionUpdateWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCollectionsNestedInput;
    campaign?: Prisma.CampaignUpdateOneWithoutCollectionsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutRecordedSchoolCollectionsNestedInput;
    items?: Prisma.SchoolCollectionItemUpdateManyWithoutCollectionNestedInput;
};
export type SchoolCollectionUncheckedUpdateWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SchoolCollectionItemUncheckedUpdateManyWithoutCollectionNestedInput;
};
export type SchoolCollectionUncheckedUpdateManyWithoutClassInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SchoolCollectionCreateManyCampaignInput = {
    id?: string;
    schoolId: string;
    classId?: string | null;
    recordedById: string;
    scope: $Enums.SchoolCollectionScope;
    totalWeight: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SchoolCollectionUpdateWithoutCampaignInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    school?: Prisma.SchoolUpdateOneRequiredWithoutCollectionsNestedInput;
    class?: Prisma.SchoolClassUpdateOneWithoutCollectionsNestedInput;
    recordedBy?: Prisma.UserUpdateOneRequiredWithoutRecordedSchoolCollectionsNestedInput;
    items?: Prisma.SchoolCollectionItemUpdateManyWithoutCollectionNestedInput;
};
export type SchoolCollectionUncheckedUpdateWithoutCampaignInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.SchoolCollectionItemUncheckedUpdateManyWithoutCollectionNestedInput;
};
export type SchoolCollectionUncheckedUpdateManyWithoutCampaignInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    schoolId?: Prisma.StringFieldUpdateOperationsInput | string;
    classId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    recordedById?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.EnumSchoolCollectionScopeFieldUpdateOperationsInput | $Enums.SchoolCollectionScope;
    totalWeight?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type SchoolCollectionCountOutputType
 */
export type SchoolCollectionCountOutputType = {
    items: number;
};
export type SchoolCollectionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | SchoolCollectionCountOutputTypeCountItemsArgs;
};
/**
 * SchoolCollectionCountOutputType without action
 */
export type SchoolCollectionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCollectionCountOutputType
     */
    select?: Prisma.SchoolCollectionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SchoolCollectionCountOutputType without action
 */
export type SchoolCollectionCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolCollectionItemWhereInput;
};
export type SchoolCollectionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    classId?: boolean;
    recordedById?: boolean;
    scope?: boolean;
    totalWeight?: boolean;
    totalPoints?: boolean;
    campaignId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.SchoolCollection$classArgs<ExtArgs>;
    campaign?: boolean | Prisma.SchoolCollection$campaignArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.SchoolCollection$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.SchoolCollectionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schoolCollection"]>;
export type SchoolCollectionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    classId?: boolean;
    recordedById?: boolean;
    scope?: boolean;
    totalWeight?: boolean;
    totalPoints?: boolean;
    campaignId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.SchoolCollection$classArgs<ExtArgs>;
    campaign?: boolean | Prisma.SchoolCollection$campaignArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schoolCollection"]>;
export type SchoolCollectionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    schoolId?: boolean;
    classId?: boolean;
    recordedById?: boolean;
    scope?: boolean;
    totalWeight?: boolean;
    totalPoints?: boolean;
    campaignId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.SchoolCollection$classArgs<ExtArgs>;
    campaign?: boolean | Prisma.SchoolCollection$campaignArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schoolCollection"]>;
export type SchoolCollectionSelectScalar = {
    id?: boolean;
    schoolId?: boolean;
    classId?: boolean;
    recordedById?: boolean;
    scope?: boolean;
    totalWeight?: boolean;
    totalPoints?: boolean;
    campaignId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SchoolCollectionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "schoolId" | "classId" | "recordedById" | "scope" | "totalWeight" | "totalPoints" | "campaignId" | "createdAt" | "updatedAt", ExtArgs["result"]["schoolCollection"]>;
export type SchoolCollectionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.SchoolCollection$classArgs<ExtArgs>;
    campaign?: boolean | Prisma.SchoolCollection$campaignArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.SchoolCollection$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.SchoolCollectionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SchoolCollectionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.SchoolCollection$classArgs<ExtArgs>;
    campaign?: boolean | Prisma.SchoolCollection$campaignArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SchoolCollectionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    class?: boolean | Prisma.SchoolCollection$classArgs<ExtArgs>;
    campaign?: boolean | Prisma.SchoolCollection$campaignArgs<ExtArgs>;
    recordedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SchoolCollectionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SchoolCollection";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        class: Prisma.$SchoolClassPayload<ExtArgs> | null;
        campaign: Prisma.$CampaignPayload<ExtArgs> | null;
        recordedBy: Prisma.$UserPayload<ExtArgs>;
        items: Prisma.$SchoolCollectionItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        schoolId: string;
        classId: string | null;
        recordedById: string;
        scope: $Enums.SchoolCollectionScope;
        totalWeight: runtime.Decimal;
        totalPoints: number;
        campaignId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["schoolCollection"]>;
    composites: {};
};
export type SchoolCollectionGetPayload<S extends boolean | null | undefined | SchoolCollectionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SchoolCollectionPayload, S>;
export type SchoolCollectionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SchoolCollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SchoolCollectionCountAggregateInputType | true;
};
export interface SchoolCollectionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SchoolCollection'];
        meta: {
            name: 'SchoolCollection';
        };
    };
    /**
     * Find zero or one SchoolCollection that matches the filter.
     * @param {SchoolCollectionFindUniqueArgs} args - Arguments to find a SchoolCollection
     * @example
     * // Get one SchoolCollection
     * const schoolCollection = await prisma.schoolCollection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolCollectionFindUniqueArgs>(args: Prisma.SelectSubset<T, SchoolCollectionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SchoolCollectionClient<runtime.Types.Result.GetResult<Prisma.$SchoolCollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SchoolCollection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolCollectionFindUniqueOrThrowArgs} args - Arguments to find a SchoolCollection
     * @example
     * // Get one SchoolCollection
     * const schoolCollection = await prisma.schoolCollection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolCollectionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SchoolCollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SchoolCollectionClient<runtime.Types.Result.GetResult<Prisma.$SchoolCollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SchoolCollection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCollectionFindFirstArgs} args - Arguments to find a SchoolCollection
     * @example
     * // Get one SchoolCollection
     * const schoolCollection = await prisma.schoolCollection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolCollectionFindFirstArgs>(args?: Prisma.SelectSubset<T, SchoolCollectionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SchoolCollectionClient<runtime.Types.Result.GetResult<Prisma.$SchoolCollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SchoolCollection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCollectionFindFirstOrThrowArgs} args - Arguments to find a SchoolCollection
     * @example
     * // Get one SchoolCollection
     * const schoolCollection = await prisma.schoolCollection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolCollectionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SchoolCollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SchoolCollectionClient<runtime.Types.Result.GetResult<Prisma.$SchoolCollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SchoolCollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolCollections
     * const schoolCollections = await prisma.schoolCollection.findMany()
     *
     * // Get first 10 SchoolCollections
     * const schoolCollections = await prisma.schoolCollection.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const schoolCollectionWithIdOnly = await prisma.schoolCollection.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SchoolCollectionFindManyArgs>(args?: Prisma.SelectSubset<T, SchoolCollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolCollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SchoolCollection.
     * @param {SchoolCollectionCreateArgs} args - Arguments to create a SchoolCollection.
     * @example
     * // Create one SchoolCollection
     * const SchoolCollection = await prisma.schoolCollection.create({
     *   data: {
     *     // ... data to create a SchoolCollection
     *   }
     * })
     *
     */
    create<T extends SchoolCollectionCreateArgs>(args: Prisma.SelectSubset<T, SchoolCollectionCreateArgs<ExtArgs>>): Prisma.Prisma__SchoolCollectionClient<runtime.Types.Result.GetResult<Prisma.$SchoolCollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SchoolCollections.
     * @param {SchoolCollectionCreateManyArgs} args - Arguments to create many SchoolCollections.
     * @example
     * // Create many SchoolCollections
     * const schoolCollection = await prisma.schoolCollection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SchoolCollectionCreateManyArgs>(args?: Prisma.SelectSubset<T, SchoolCollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SchoolCollections and returns the data saved in the database.
     * @param {SchoolCollectionCreateManyAndReturnArgs} args - Arguments to create many SchoolCollections.
     * @example
     * // Create many SchoolCollections
     * const schoolCollection = await prisma.schoolCollection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SchoolCollections and only return the `id`
     * const schoolCollectionWithIdOnly = await prisma.schoolCollection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SchoolCollectionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SchoolCollectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolCollectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SchoolCollection.
     * @param {SchoolCollectionDeleteArgs} args - Arguments to delete one SchoolCollection.
     * @example
     * // Delete one SchoolCollection
     * const SchoolCollection = await prisma.schoolCollection.delete({
     *   where: {
     *     // ... filter to delete one SchoolCollection
     *   }
     * })
     *
     */
    delete<T extends SchoolCollectionDeleteArgs>(args: Prisma.SelectSubset<T, SchoolCollectionDeleteArgs<ExtArgs>>): Prisma.Prisma__SchoolCollectionClient<runtime.Types.Result.GetResult<Prisma.$SchoolCollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SchoolCollection.
     * @param {SchoolCollectionUpdateArgs} args - Arguments to update one SchoolCollection.
     * @example
     * // Update one SchoolCollection
     * const schoolCollection = await prisma.schoolCollection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SchoolCollectionUpdateArgs>(args: Prisma.SelectSubset<T, SchoolCollectionUpdateArgs<ExtArgs>>): Prisma.Prisma__SchoolCollectionClient<runtime.Types.Result.GetResult<Prisma.$SchoolCollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SchoolCollections.
     * @param {SchoolCollectionDeleteManyArgs} args - Arguments to filter SchoolCollections to delete.
     * @example
     * // Delete a few SchoolCollections
     * const { count } = await prisma.schoolCollection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SchoolCollectionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SchoolCollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SchoolCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolCollections
     * const schoolCollection = await prisma.schoolCollection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SchoolCollectionUpdateManyArgs>(args: Prisma.SelectSubset<T, SchoolCollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SchoolCollections and returns the data updated in the database.
     * @param {SchoolCollectionUpdateManyAndReturnArgs} args - Arguments to update many SchoolCollections.
     * @example
     * // Update many SchoolCollections
     * const schoolCollection = await prisma.schoolCollection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SchoolCollections and only return the `id`
     * const schoolCollectionWithIdOnly = await prisma.schoolCollection.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchoolCollectionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SchoolCollectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolCollectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SchoolCollection.
     * @param {SchoolCollectionUpsertArgs} args - Arguments to update or create a SchoolCollection.
     * @example
     * // Update or create a SchoolCollection
     * const schoolCollection = await prisma.schoolCollection.upsert({
     *   create: {
     *     // ... data to create a SchoolCollection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolCollection we want to update
     *   }
     * })
     */
    upsert<T extends SchoolCollectionUpsertArgs>(args: Prisma.SelectSubset<T, SchoolCollectionUpsertArgs<ExtArgs>>): Prisma.Prisma__SchoolCollectionClient<runtime.Types.Result.GetResult<Prisma.$SchoolCollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SchoolCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCollectionCountArgs} args - Arguments to filter SchoolCollections to count.
     * @example
     * // Count the number of SchoolCollections
     * const count = await prisma.schoolCollection.count({
     *   where: {
     *     // ... the filter for the SchoolCollections we want to count
     *   }
     * })
    **/
    count<T extends SchoolCollectionCountArgs>(args?: Prisma.Subset<T, SchoolCollectionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SchoolCollectionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SchoolCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolCollectionAggregateArgs>(args: Prisma.Subset<T, SchoolCollectionAggregateArgs>): Prisma.PrismaPromise<GetSchoolCollectionAggregateType<T>>;
    /**
     * Group by SchoolCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCollectionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SchoolCollectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SchoolCollectionGroupByArgs['orderBy'];
    } : {
        orderBy?: SchoolCollectionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SchoolCollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SchoolCollection model
     */
    readonly fields: SchoolCollectionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SchoolCollection.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SchoolCollectionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    class<T extends Prisma.SchoolCollection$classArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolCollection$classArgs<ExtArgs>>): Prisma.Prisma__SchoolClassClient<runtime.Types.Result.GetResult<Prisma.$SchoolClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    campaign<T extends Prisma.SchoolCollection$campaignArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolCollection$campaignArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    recordedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.SchoolCollection$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolCollection$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolCollectionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the SchoolCollection model
 */
export interface SchoolCollectionFieldRefs {
    readonly id: Prisma.FieldRef<"SchoolCollection", 'String'>;
    readonly schoolId: Prisma.FieldRef<"SchoolCollection", 'String'>;
    readonly classId: Prisma.FieldRef<"SchoolCollection", 'String'>;
    readonly recordedById: Prisma.FieldRef<"SchoolCollection", 'String'>;
    readonly scope: Prisma.FieldRef<"SchoolCollection", 'SchoolCollectionScope'>;
    readonly totalWeight: Prisma.FieldRef<"SchoolCollection", 'Decimal'>;
    readonly totalPoints: Prisma.FieldRef<"SchoolCollection", 'Int'>;
    readonly campaignId: Prisma.FieldRef<"SchoolCollection", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SchoolCollection", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SchoolCollection", 'DateTime'>;
}
/**
 * SchoolCollection findUnique
 */
export type SchoolCollectionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SchoolCollection to fetch.
     */
    where: Prisma.SchoolCollectionWhereUniqueInput;
};
/**
 * SchoolCollection findUniqueOrThrow
 */
export type SchoolCollectionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SchoolCollection to fetch.
     */
    where: Prisma.SchoolCollectionWhereUniqueInput;
};
/**
 * SchoolCollection findFirst
 */
export type SchoolCollectionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SchoolCollection to fetch.
     */
    where?: Prisma.SchoolCollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SchoolCollections to fetch.
     */
    orderBy?: Prisma.SchoolCollectionOrderByWithRelationInput | Prisma.SchoolCollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SchoolCollections.
     */
    cursor?: Prisma.SchoolCollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SchoolCollections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SchoolCollections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SchoolCollections.
     */
    distinct?: Prisma.SchoolCollectionScalarFieldEnum | Prisma.SchoolCollectionScalarFieldEnum[];
};
/**
 * SchoolCollection findFirstOrThrow
 */
export type SchoolCollectionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SchoolCollection to fetch.
     */
    where?: Prisma.SchoolCollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SchoolCollections to fetch.
     */
    orderBy?: Prisma.SchoolCollectionOrderByWithRelationInput | Prisma.SchoolCollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SchoolCollections.
     */
    cursor?: Prisma.SchoolCollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SchoolCollections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SchoolCollections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SchoolCollections.
     */
    distinct?: Prisma.SchoolCollectionScalarFieldEnum | Prisma.SchoolCollectionScalarFieldEnum[];
};
/**
 * SchoolCollection findMany
 */
export type SchoolCollectionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SchoolCollections to fetch.
     */
    where?: Prisma.SchoolCollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SchoolCollections to fetch.
     */
    orderBy?: Prisma.SchoolCollectionOrderByWithRelationInput | Prisma.SchoolCollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SchoolCollections.
     */
    cursor?: Prisma.SchoolCollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SchoolCollections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SchoolCollections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SchoolCollections.
     */
    distinct?: Prisma.SchoolCollectionScalarFieldEnum | Prisma.SchoolCollectionScalarFieldEnum[];
};
/**
 * SchoolCollection create
 */
export type SchoolCollectionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a SchoolCollection.
     */
    data: Prisma.XOR<Prisma.SchoolCollectionCreateInput, Prisma.SchoolCollectionUncheckedCreateInput>;
};
/**
 * SchoolCollection createMany
 */
export type SchoolCollectionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolCollections.
     */
    data: Prisma.SchoolCollectionCreateManyInput | Prisma.SchoolCollectionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SchoolCollection createManyAndReturn
 */
export type SchoolCollectionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCollection
     */
    select?: Prisma.SchoolCollectionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolCollection
     */
    omit?: Prisma.SchoolCollectionOmit<ExtArgs> | null;
    /**
     * The data used to create many SchoolCollections.
     */
    data: Prisma.SchoolCollectionCreateManyInput | Prisma.SchoolCollectionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolCollectionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SchoolCollection update
 */
export type SchoolCollectionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a SchoolCollection.
     */
    data: Prisma.XOR<Prisma.SchoolCollectionUpdateInput, Prisma.SchoolCollectionUncheckedUpdateInput>;
    /**
     * Choose, which SchoolCollection to update.
     */
    where: Prisma.SchoolCollectionWhereUniqueInput;
};
/**
 * SchoolCollection updateMany
 */
export type SchoolCollectionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolCollections.
     */
    data: Prisma.XOR<Prisma.SchoolCollectionUpdateManyMutationInput, Prisma.SchoolCollectionUncheckedUpdateManyInput>;
    /**
     * Filter which SchoolCollections to update
     */
    where?: Prisma.SchoolCollectionWhereInput;
    /**
     * Limit how many SchoolCollections to update.
     */
    limit?: number;
};
/**
 * SchoolCollection updateManyAndReturn
 */
export type SchoolCollectionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCollection
     */
    select?: Prisma.SchoolCollectionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolCollection
     */
    omit?: Prisma.SchoolCollectionOmit<ExtArgs> | null;
    /**
     * The data used to update SchoolCollections.
     */
    data: Prisma.XOR<Prisma.SchoolCollectionUpdateManyMutationInput, Prisma.SchoolCollectionUncheckedUpdateManyInput>;
    /**
     * Filter which SchoolCollections to update
     */
    where?: Prisma.SchoolCollectionWhereInput;
    /**
     * Limit how many SchoolCollections to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolCollectionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SchoolCollection upsert
 */
export type SchoolCollectionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the SchoolCollection to update in case it exists.
     */
    where: Prisma.SchoolCollectionWhereUniqueInput;
    /**
     * In case the SchoolCollection found by the `where` argument doesn't exist, create a new SchoolCollection with this data.
     */
    create: Prisma.XOR<Prisma.SchoolCollectionCreateInput, Prisma.SchoolCollectionUncheckedCreateInput>;
    /**
     * In case the SchoolCollection was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SchoolCollectionUpdateInput, Prisma.SchoolCollectionUncheckedUpdateInput>;
};
/**
 * SchoolCollection delete
 */
export type SchoolCollectionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which SchoolCollection to delete.
     */
    where: Prisma.SchoolCollectionWhereUniqueInput;
};
/**
 * SchoolCollection deleteMany
 */
export type SchoolCollectionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolCollections to delete
     */
    where?: Prisma.SchoolCollectionWhereInput;
    /**
     * Limit how many SchoolCollections to delete.
     */
    limit?: number;
};
/**
 * SchoolCollection.class
 */
export type SchoolCollection$classArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * SchoolCollection.campaign
 */
export type SchoolCollection$campaignArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Campaign
     */
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
};
/**
 * SchoolCollection.items
 */
export type SchoolCollection$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCollectionItem
     */
    select?: Prisma.SchoolCollectionItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SchoolCollectionItem
     */
    omit?: Prisma.SchoolCollectionItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SchoolCollectionItemInclude<ExtArgs> | null;
    where?: Prisma.SchoolCollectionItemWhereInput;
    orderBy?: Prisma.SchoolCollectionItemOrderByWithRelationInput | Prisma.SchoolCollectionItemOrderByWithRelationInput[];
    cursor?: Prisma.SchoolCollectionItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchoolCollectionItemScalarFieldEnum | Prisma.SchoolCollectionItemScalarFieldEnum[];
};
/**
 * SchoolCollection without action
 */
export type SchoolCollectionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};

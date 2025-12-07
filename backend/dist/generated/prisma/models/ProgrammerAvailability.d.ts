import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ProgrammerAvailability
 *
 */
export type ProgrammerAvailabilityModel = runtime.Types.Result.DefaultSelection<Prisma.$ProgrammerAvailabilityPayload>;
export type AggregateProgrammerAvailability = {
    _count: ProgrammerAvailabilityCountAggregateOutputType | null;
    _avg: ProgrammerAvailabilityAvgAggregateOutputType | null;
    _sum: ProgrammerAvailabilitySumAggregateOutputType | null;
    _min: ProgrammerAvailabilityMinAggregateOutputType | null;
    _max: ProgrammerAvailabilityMaxAggregateOutputType | null;
};
export type ProgrammerAvailabilityAvgAggregateOutputType = {
    startMinutes: number | null;
    endMinutes: number | null;
};
export type ProgrammerAvailabilitySumAggregateOutputType = {
    startMinutes: number | null;
    endMinutes: number | null;
};
export type ProgrammerAvailabilityMinAggregateOutputType = {
    id: string | null;
    programmerId: string | null;
    day: $Enums.Weekday | null;
    startMinutes: number | null;
    endMinutes: number | null;
};
export type ProgrammerAvailabilityMaxAggregateOutputType = {
    id: string | null;
    programmerId: string | null;
    day: $Enums.Weekday | null;
    startMinutes: number | null;
    endMinutes: number | null;
};
export type ProgrammerAvailabilityCountAggregateOutputType = {
    id: number;
    programmerId: number;
    day: number;
    startMinutes: number;
    endMinutes: number;
    _all: number;
};
export type ProgrammerAvailabilityAvgAggregateInputType = {
    startMinutes?: true;
    endMinutes?: true;
};
export type ProgrammerAvailabilitySumAggregateInputType = {
    startMinutes?: true;
    endMinutes?: true;
};
export type ProgrammerAvailabilityMinAggregateInputType = {
    id?: true;
    programmerId?: true;
    day?: true;
    startMinutes?: true;
    endMinutes?: true;
};
export type ProgrammerAvailabilityMaxAggregateInputType = {
    id?: true;
    programmerId?: true;
    day?: true;
    startMinutes?: true;
    endMinutes?: true;
};
export type ProgrammerAvailabilityCountAggregateInputType = {
    id?: true;
    programmerId?: true;
    day?: true;
    startMinutes?: true;
    endMinutes?: true;
    _all?: true;
};
export type ProgrammerAvailabilityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProgrammerAvailability to aggregate.
     */
    where?: Prisma.ProgrammerAvailabilityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgrammerAvailabilities to fetch.
     */
    orderBy?: Prisma.ProgrammerAvailabilityOrderByWithRelationInput | Prisma.ProgrammerAvailabilityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProgrammerAvailabilityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgrammerAvailabilities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgrammerAvailabilities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProgrammerAvailabilities
    **/
    _count?: true | ProgrammerAvailabilityCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProgrammerAvailabilityAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProgrammerAvailabilitySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProgrammerAvailabilityMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProgrammerAvailabilityMaxAggregateInputType;
};
export type GetProgrammerAvailabilityAggregateType<T extends ProgrammerAvailabilityAggregateArgs> = {
    [P in keyof T & keyof AggregateProgrammerAvailability]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProgrammerAvailability[P]> : Prisma.GetScalarType<T[P], AggregateProgrammerAvailability[P]>;
};
export type ProgrammerAvailabilityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgrammerAvailabilityWhereInput;
    orderBy?: Prisma.ProgrammerAvailabilityOrderByWithAggregationInput | Prisma.ProgrammerAvailabilityOrderByWithAggregationInput[];
    by: Prisma.ProgrammerAvailabilityScalarFieldEnum[] | Prisma.ProgrammerAvailabilityScalarFieldEnum;
    having?: Prisma.ProgrammerAvailabilityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgrammerAvailabilityCountAggregateInputType | true;
    _avg?: ProgrammerAvailabilityAvgAggregateInputType;
    _sum?: ProgrammerAvailabilitySumAggregateInputType;
    _min?: ProgrammerAvailabilityMinAggregateInputType;
    _max?: ProgrammerAvailabilityMaxAggregateInputType;
};
export type ProgrammerAvailabilityGroupByOutputType = {
    id: string;
    programmerId: string;
    day: $Enums.Weekday;
    startMinutes: number;
    endMinutes: number;
    _count: ProgrammerAvailabilityCountAggregateOutputType | null;
    _avg: ProgrammerAvailabilityAvgAggregateOutputType | null;
    _sum: ProgrammerAvailabilitySumAggregateOutputType | null;
    _min: ProgrammerAvailabilityMinAggregateOutputType | null;
    _max: ProgrammerAvailabilityMaxAggregateOutputType | null;
};
type GetProgrammerAvailabilityGroupByPayload<T extends ProgrammerAvailabilityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProgrammerAvailabilityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProgrammerAvailabilityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProgrammerAvailabilityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProgrammerAvailabilityGroupByOutputType[P]>;
}>>;
export type ProgrammerAvailabilityWhereInput = {
    AND?: Prisma.ProgrammerAvailabilityWhereInput | Prisma.ProgrammerAvailabilityWhereInput[];
    OR?: Prisma.ProgrammerAvailabilityWhereInput[];
    NOT?: Prisma.ProgrammerAvailabilityWhereInput | Prisma.ProgrammerAvailabilityWhereInput[];
    id?: Prisma.StringFilter<"ProgrammerAvailability"> | string;
    programmerId?: Prisma.StringFilter<"ProgrammerAvailability"> | string;
    day?: Prisma.EnumWeekdayFilter<"ProgrammerAvailability"> | $Enums.Weekday;
    startMinutes?: Prisma.IntFilter<"ProgrammerAvailability"> | number;
    endMinutes?: Prisma.IntFilter<"ProgrammerAvailability"> | number;
    programmer?: Prisma.XOR<Prisma.ProgrammerProfileScalarRelationFilter, Prisma.ProgrammerProfileWhereInput>;
};
export type ProgrammerAvailabilityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    programmerId?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
    startMinutes?: Prisma.SortOrder;
    endMinutes?: Prisma.SortOrder;
    programmer?: Prisma.ProgrammerProfileOrderByWithRelationInput;
};
export type ProgrammerAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProgrammerAvailabilityWhereInput | Prisma.ProgrammerAvailabilityWhereInput[];
    OR?: Prisma.ProgrammerAvailabilityWhereInput[];
    NOT?: Prisma.ProgrammerAvailabilityWhereInput | Prisma.ProgrammerAvailabilityWhereInput[];
    programmerId?: Prisma.StringFilter<"ProgrammerAvailability"> | string;
    day?: Prisma.EnumWeekdayFilter<"ProgrammerAvailability"> | $Enums.Weekday;
    startMinutes?: Prisma.IntFilter<"ProgrammerAvailability"> | number;
    endMinutes?: Prisma.IntFilter<"ProgrammerAvailability"> | number;
    programmer?: Prisma.XOR<Prisma.ProgrammerProfileScalarRelationFilter, Prisma.ProgrammerProfileWhereInput>;
}, "id">;
export type ProgrammerAvailabilityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    programmerId?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
    startMinutes?: Prisma.SortOrder;
    endMinutes?: Prisma.SortOrder;
    _count?: Prisma.ProgrammerAvailabilityCountOrderByAggregateInput;
    _avg?: Prisma.ProgrammerAvailabilityAvgOrderByAggregateInput;
    _max?: Prisma.ProgrammerAvailabilityMaxOrderByAggregateInput;
    _min?: Prisma.ProgrammerAvailabilityMinOrderByAggregateInput;
    _sum?: Prisma.ProgrammerAvailabilitySumOrderByAggregateInput;
};
export type ProgrammerAvailabilityScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProgrammerAvailabilityScalarWhereWithAggregatesInput | Prisma.ProgrammerAvailabilityScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProgrammerAvailabilityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProgrammerAvailabilityScalarWhereWithAggregatesInput | Prisma.ProgrammerAvailabilityScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProgrammerAvailability"> | string;
    programmerId?: Prisma.StringWithAggregatesFilter<"ProgrammerAvailability"> | string;
    day?: Prisma.EnumWeekdayWithAggregatesFilter<"ProgrammerAvailability"> | $Enums.Weekday;
    startMinutes?: Prisma.IntWithAggregatesFilter<"ProgrammerAvailability"> | number;
    endMinutes?: Prisma.IntWithAggregatesFilter<"ProgrammerAvailability"> | number;
};
export type ProgrammerAvailabilityCreateInput = {
    id?: string;
    day: $Enums.Weekday;
    startMinutes: number;
    endMinutes: number;
    programmer: Prisma.ProgrammerProfileCreateNestedOneWithoutAvailableInput;
};
export type ProgrammerAvailabilityUncheckedCreateInput = {
    id?: string;
    programmerId: string;
    day: $Enums.Weekday;
    startMinutes: number;
    endMinutes: number;
};
export type ProgrammerAvailabilityUpdateInput = {
    day?: Prisma.EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday;
    startMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    endMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    programmer?: Prisma.ProgrammerProfileUpdateOneRequiredWithoutAvailableNestedInput;
};
export type ProgrammerAvailabilityUncheckedUpdateInput = {
    programmerId?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday;
    startMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    endMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProgrammerAvailabilityCreateManyInput = {
    id?: string;
    programmerId: string;
    day: $Enums.Weekday;
    startMinutes: number;
    endMinutes: number;
};
export type ProgrammerAvailabilityUpdateManyMutationInput = {
    day?: Prisma.EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday;
    startMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    endMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProgrammerAvailabilityUncheckedUpdateManyInput = {
    programmerId?: Prisma.StringFieldUpdateOperationsInput | string;
    day?: Prisma.EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday;
    startMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    endMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProgrammerAvailabilityListRelationFilter = {
    every?: Prisma.ProgrammerAvailabilityWhereInput;
    some?: Prisma.ProgrammerAvailabilityWhereInput;
    none?: Prisma.ProgrammerAvailabilityWhereInput;
};
export type ProgrammerAvailabilityOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProgrammerAvailabilityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    programmerId?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
    startMinutes?: Prisma.SortOrder;
    endMinutes?: Prisma.SortOrder;
};
export type ProgrammerAvailabilityAvgOrderByAggregateInput = {
    startMinutes?: Prisma.SortOrder;
    endMinutes?: Prisma.SortOrder;
};
export type ProgrammerAvailabilityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    programmerId?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
    startMinutes?: Prisma.SortOrder;
    endMinutes?: Prisma.SortOrder;
};
export type ProgrammerAvailabilityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    programmerId?: Prisma.SortOrder;
    day?: Prisma.SortOrder;
    startMinutes?: Prisma.SortOrder;
    endMinutes?: Prisma.SortOrder;
};
export type ProgrammerAvailabilitySumOrderByAggregateInput = {
    startMinutes?: Prisma.SortOrder;
    endMinutes?: Prisma.SortOrder;
};
export type ProgrammerAvailabilityCreateNestedManyWithoutProgrammerInput = {
    create?: Prisma.XOR<Prisma.ProgrammerAvailabilityCreateWithoutProgrammerInput, Prisma.ProgrammerAvailabilityUncheckedCreateWithoutProgrammerInput> | Prisma.ProgrammerAvailabilityCreateWithoutProgrammerInput[] | Prisma.ProgrammerAvailabilityUncheckedCreateWithoutProgrammerInput[];
    connectOrCreate?: Prisma.ProgrammerAvailabilityCreateOrConnectWithoutProgrammerInput | Prisma.ProgrammerAvailabilityCreateOrConnectWithoutProgrammerInput[];
    createMany?: Prisma.ProgrammerAvailabilityCreateManyProgrammerInputEnvelope;
    connect?: Prisma.ProgrammerAvailabilityWhereUniqueInput | Prisma.ProgrammerAvailabilityWhereUniqueInput[];
};
export type ProgrammerAvailabilityUncheckedCreateNestedManyWithoutProgrammerInput = {
    create?: Prisma.XOR<Prisma.ProgrammerAvailabilityCreateWithoutProgrammerInput, Prisma.ProgrammerAvailabilityUncheckedCreateWithoutProgrammerInput> | Prisma.ProgrammerAvailabilityCreateWithoutProgrammerInput[] | Prisma.ProgrammerAvailabilityUncheckedCreateWithoutProgrammerInput[];
    connectOrCreate?: Prisma.ProgrammerAvailabilityCreateOrConnectWithoutProgrammerInput | Prisma.ProgrammerAvailabilityCreateOrConnectWithoutProgrammerInput[];
    createMany?: Prisma.ProgrammerAvailabilityCreateManyProgrammerInputEnvelope;
    connect?: Prisma.ProgrammerAvailabilityWhereUniqueInput | Prisma.ProgrammerAvailabilityWhereUniqueInput[];
};
export type ProgrammerAvailabilityUpdateManyWithoutProgrammerNestedInput = {
    create?: Prisma.XOR<Prisma.ProgrammerAvailabilityCreateWithoutProgrammerInput, Prisma.ProgrammerAvailabilityUncheckedCreateWithoutProgrammerInput> | Prisma.ProgrammerAvailabilityCreateWithoutProgrammerInput[] | Prisma.ProgrammerAvailabilityUncheckedCreateWithoutProgrammerInput[];
    connectOrCreate?: Prisma.ProgrammerAvailabilityCreateOrConnectWithoutProgrammerInput | Prisma.ProgrammerAvailabilityCreateOrConnectWithoutProgrammerInput[];
    upsert?: Prisma.ProgrammerAvailabilityUpsertWithWhereUniqueWithoutProgrammerInput | Prisma.ProgrammerAvailabilityUpsertWithWhereUniqueWithoutProgrammerInput[];
    createMany?: Prisma.ProgrammerAvailabilityCreateManyProgrammerInputEnvelope;
    set?: Prisma.ProgrammerAvailabilityWhereUniqueInput | Prisma.ProgrammerAvailabilityWhereUniqueInput[];
    disconnect?: Prisma.ProgrammerAvailabilityWhereUniqueInput | Prisma.ProgrammerAvailabilityWhereUniqueInput[];
    delete?: Prisma.ProgrammerAvailabilityWhereUniqueInput | Prisma.ProgrammerAvailabilityWhereUniqueInput[];
    connect?: Prisma.ProgrammerAvailabilityWhereUniqueInput | Prisma.ProgrammerAvailabilityWhereUniqueInput[];
    update?: Prisma.ProgrammerAvailabilityUpdateWithWhereUniqueWithoutProgrammerInput | Prisma.ProgrammerAvailabilityUpdateWithWhereUniqueWithoutProgrammerInput[];
    updateMany?: Prisma.ProgrammerAvailabilityUpdateManyWithWhereWithoutProgrammerInput | Prisma.ProgrammerAvailabilityUpdateManyWithWhereWithoutProgrammerInput[];
    deleteMany?: Prisma.ProgrammerAvailabilityScalarWhereInput | Prisma.ProgrammerAvailabilityScalarWhereInput[];
};
export type ProgrammerAvailabilityUncheckedUpdateManyWithoutProgrammerNestedInput = {
    create?: Prisma.XOR<Prisma.ProgrammerAvailabilityCreateWithoutProgrammerInput, Prisma.ProgrammerAvailabilityUncheckedCreateWithoutProgrammerInput> | Prisma.ProgrammerAvailabilityCreateWithoutProgrammerInput[] | Prisma.ProgrammerAvailabilityUncheckedCreateWithoutProgrammerInput[];
    connectOrCreate?: Prisma.ProgrammerAvailabilityCreateOrConnectWithoutProgrammerInput | Prisma.ProgrammerAvailabilityCreateOrConnectWithoutProgrammerInput[];
    upsert?: Prisma.ProgrammerAvailabilityUpsertWithWhereUniqueWithoutProgrammerInput | Prisma.ProgrammerAvailabilityUpsertWithWhereUniqueWithoutProgrammerInput[];
    createMany?: Prisma.ProgrammerAvailabilityCreateManyProgrammerInputEnvelope;
    set?: Prisma.ProgrammerAvailabilityWhereUniqueInput | Prisma.ProgrammerAvailabilityWhereUniqueInput[];
    disconnect?: Prisma.ProgrammerAvailabilityWhereUniqueInput | Prisma.ProgrammerAvailabilityWhereUniqueInput[];
    delete?: Prisma.ProgrammerAvailabilityWhereUniqueInput | Prisma.ProgrammerAvailabilityWhereUniqueInput[];
    connect?: Prisma.ProgrammerAvailabilityWhereUniqueInput | Prisma.ProgrammerAvailabilityWhereUniqueInput[];
    update?: Prisma.ProgrammerAvailabilityUpdateWithWhereUniqueWithoutProgrammerInput | Prisma.ProgrammerAvailabilityUpdateWithWhereUniqueWithoutProgrammerInput[];
    updateMany?: Prisma.ProgrammerAvailabilityUpdateManyWithWhereWithoutProgrammerInput | Prisma.ProgrammerAvailabilityUpdateManyWithWhereWithoutProgrammerInput[];
    deleteMany?: Prisma.ProgrammerAvailabilityScalarWhereInput | Prisma.ProgrammerAvailabilityScalarWhereInput[];
};
export type EnumWeekdayFieldUpdateOperationsInput = {
    set?: $Enums.Weekday;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ProgrammerAvailabilityCreateWithoutProgrammerInput = {
    id?: string;
    day: $Enums.Weekday;
    startMinutes: number;
    endMinutes: number;
};
export type ProgrammerAvailabilityUncheckedCreateWithoutProgrammerInput = {
    id?: string;
    day: $Enums.Weekday;
    startMinutes: number;
    endMinutes: number;
};
export type ProgrammerAvailabilityCreateOrConnectWithoutProgrammerInput = {
    where: Prisma.ProgrammerAvailabilityWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgrammerAvailabilityCreateWithoutProgrammerInput, Prisma.ProgrammerAvailabilityUncheckedCreateWithoutProgrammerInput>;
};
export type ProgrammerAvailabilityCreateManyProgrammerInputEnvelope = {
    data: Prisma.ProgrammerAvailabilityCreateManyProgrammerInput | Prisma.ProgrammerAvailabilityCreateManyProgrammerInput[];
};
export type ProgrammerAvailabilityUpsertWithWhereUniqueWithoutProgrammerInput = {
    where: Prisma.ProgrammerAvailabilityWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgrammerAvailabilityUpdateWithoutProgrammerInput, Prisma.ProgrammerAvailabilityUncheckedUpdateWithoutProgrammerInput>;
    create: Prisma.XOR<Prisma.ProgrammerAvailabilityCreateWithoutProgrammerInput, Prisma.ProgrammerAvailabilityUncheckedCreateWithoutProgrammerInput>;
};
export type ProgrammerAvailabilityUpdateWithWhereUniqueWithoutProgrammerInput = {
    where: Prisma.ProgrammerAvailabilityWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgrammerAvailabilityUpdateWithoutProgrammerInput, Prisma.ProgrammerAvailabilityUncheckedUpdateWithoutProgrammerInput>;
};
export type ProgrammerAvailabilityUpdateManyWithWhereWithoutProgrammerInput = {
    where: Prisma.ProgrammerAvailabilityScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgrammerAvailabilityUpdateManyMutationInput, Prisma.ProgrammerAvailabilityUncheckedUpdateManyWithoutProgrammerInput>;
};
export type ProgrammerAvailabilityScalarWhereInput = {
    AND?: Prisma.ProgrammerAvailabilityScalarWhereInput | Prisma.ProgrammerAvailabilityScalarWhereInput[];
    OR?: Prisma.ProgrammerAvailabilityScalarWhereInput[];
    NOT?: Prisma.ProgrammerAvailabilityScalarWhereInput | Prisma.ProgrammerAvailabilityScalarWhereInput[];
    id?: Prisma.StringFilter<"ProgrammerAvailability"> | string;
    programmerId?: Prisma.StringFilter<"ProgrammerAvailability"> | string;
    day?: Prisma.EnumWeekdayFilter<"ProgrammerAvailability"> | $Enums.Weekday;
    startMinutes?: Prisma.IntFilter<"ProgrammerAvailability"> | number;
    endMinutes?: Prisma.IntFilter<"ProgrammerAvailability"> | number;
};
export type ProgrammerAvailabilityCreateManyProgrammerInput = {
    id?: string;
    day: $Enums.Weekday;
    startMinutes: number;
    endMinutes: number;
};
export type ProgrammerAvailabilityUpdateWithoutProgrammerInput = {
    day?: Prisma.EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday;
    startMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    endMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProgrammerAvailabilityUncheckedUpdateWithoutProgrammerInput = {
    day?: Prisma.EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday;
    startMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    endMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProgrammerAvailabilityUncheckedUpdateManyWithoutProgrammerInput = {
    day?: Prisma.EnumWeekdayFieldUpdateOperationsInput | $Enums.Weekday;
    startMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    endMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ProgrammerAvailabilitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    programmerId?: boolean;
    day?: boolean;
    startMinutes?: boolean;
    endMinutes?: boolean;
    programmer?: boolean | Prisma.ProgrammerProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programmerAvailability"]>;
export type ProgrammerAvailabilitySelectScalar = {
    id?: boolean;
    programmerId?: boolean;
    day?: boolean;
    startMinutes?: boolean;
    endMinutes?: boolean;
};
export type ProgrammerAvailabilityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "programmerId" | "day" | "startMinutes" | "endMinutes", ExtArgs["result"]["programmerAvailability"]>;
export type ProgrammerAvailabilityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    programmer?: boolean | Prisma.ProgrammerProfileDefaultArgs<ExtArgs>;
};
export type $ProgrammerAvailabilityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProgrammerAvailability";
    objects: {
        programmer: Prisma.$ProgrammerProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        programmerId: string;
        day: $Enums.Weekday;
        startMinutes: number;
        endMinutes: number;
    }, ExtArgs["result"]["programmerAvailability"]>;
    composites: {};
};
export type ProgrammerAvailabilityGetPayload<S extends boolean | null | undefined | ProgrammerAvailabilityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProgrammerAvailabilityPayload, S>;
export type ProgrammerAvailabilityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProgrammerAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProgrammerAvailabilityCountAggregateInputType | true;
};
export interface ProgrammerAvailabilityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProgrammerAvailability'];
        meta: {
            name: 'ProgrammerAvailability';
        };
    };
    /**
     * Find zero or one ProgrammerAvailability that matches the filter.
     * @param {ProgrammerAvailabilityFindUniqueArgs} args - Arguments to find a ProgrammerAvailability
     * @example
     * // Get one ProgrammerAvailability
     * const programmerAvailability = await prisma.programmerAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgrammerAvailabilityFindUniqueArgs>(args: Prisma.SelectSubset<T, ProgrammerAvailabilityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProgrammerAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProgrammerAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgrammerAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a ProgrammerAvailability
     * @example
     * // Get one ProgrammerAvailability
     * const programmerAvailability = await prisma.programmerAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgrammerAvailabilityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProgrammerAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgrammerAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProgrammerAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammerAvailabilityFindFirstArgs} args - Arguments to find a ProgrammerAvailability
     * @example
     * // Get one ProgrammerAvailability
     * const programmerAvailability = await prisma.programmerAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgrammerAvailabilityFindFirstArgs>(args?: Prisma.SelectSubset<T, ProgrammerAvailabilityFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProgrammerAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProgrammerAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammerAvailabilityFindFirstOrThrowArgs} args - Arguments to find a ProgrammerAvailability
     * @example
     * // Get one ProgrammerAvailability
     * const programmerAvailability = await prisma.programmerAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgrammerAvailabilityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProgrammerAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgrammerAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProgrammerAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammerAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgrammerAvailabilities
     * const programmerAvailabilities = await prisma.programmerAvailability.findMany()
     *
     * // Get first 10 ProgrammerAvailabilities
     * const programmerAvailabilities = await prisma.programmerAvailability.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const programmerAvailabilityWithIdOnly = await prisma.programmerAvailability.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProgrammerAvailabilityFindManyArgs>(args?: Prisma.SelectSubset<T, ProgrammerAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgrammerAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProgrammerAvailability.
     * @param {ProgrammerAvailabilityCreateArgs} args - Arguments to create a ProgrammerAvailability.
     * @example
     * // Create one ProgrammerAvailability
     * const ProgrammerAvailability = await prisma.programmerAvailability.create({
     *   data: {
     *     // ... data to create a ProgrammerAvailability
     *   }
     * })
     *
     */
    create<T extends ProgrammerAvailabilityCreateArgs>(args: Prisma.SelectSubset<T, ProgrammerAvailabilityCreateArgs<ExtArgs>>): Prisma.Prisma__ProgrammerAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProgrammerAvailabilities.
     * @param {ProgrammerAvailabilityCreateManyArgs} args - Arguments to create many ProgrammerAvailabilities.
     * @example
     * // Create many ProgrammerAvailabilities
     * const programmerAvailability = await prisma.programmerAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProgrammerAvailabilityCreateManyArgs>(args?: Prisma.SelectSubset<T, ProgrammerAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a ProgrammerAvailability.
     * @param {ProgrammerAvailabilityDeleteArgs} args - Arguments to delete one ProgrammerAvailability.
     * @example
     * // Delete one ProgrammerAvailability
     * const ProgrammerAvailability = await prisma.programmerAvailability.delete({
     *   where: {
     *     // ... filter to delete one ProgrammerAvailability
     *   }
     * })
     *
     */
    delete<T extends ProgrammerAvailabilityDeleteArgs>(args: Prisma.SelectSubset<T, ProgrammerAvailabilityDeleteArgs<ExtArgs>>): Prisma.Prisma__ProgrammerAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProgrammerAvailability.
     * @param {ProgrammerAvailabilityUpdateArgs} args - Arguments to update one ProgrammerAvailability.
     * @example
     * // Update one ProgrammerAvailability
     * const programmerAvailability = await prisma.programmerAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProgrammerAvailabilityUpdateArgs>(args: Prisma.SelectSubset<T, ProgrammerAvailabilityUpdateArgs<ExtArgs>>): Prisma.Prisma__ProgrammerAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProgrammerAvailabilities.
     * @param {ProgrammerAvailabilityDeleteManyArgs} args - Arguments to filter ProgrammerAvailabilities to delete.
     * @example
     * // Delete a few ProgrammerAvailabilities
     * const { count } = await prisma.programmerAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProgrammerAvailabilityDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProgrammerAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProgrammerAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammerAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgrammerAvailabilities
     * const programmerAvailability = await prisma.programmerAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProgrammerAvailabilityUpdateManyArgs>(args: Prisma.SelectSubset<T, ProgrammerAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one ProgrammerAvailability.
     * @param {ProgrammerAvailabilityUpsertArgs} args - Arguments to update or create a ProgrammerAvailability.
     * @example
     * // Update or create a ProgrammerAvailability
     * const programmerAvailability = await prisma.programmerAvailability.upsert({
     *   create: {
     *     // ... data to create a ProgrammerAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgrammerAvailability we want to update
     *   }
     * })
     */
    upsert<T extends ProgrammerAvailabilityUpsertArgs>(args: Prisma.SelectSubset<T, ProgrammerAvailabilityUpsertArgs<ExtArgs>>): Prisma.Prisma__ProgrammerAvailabilityClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProgrammerAvailabilities that matches the filter.
     * @param {ProgrammerAvailabilityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const programmerAvailability = await prisma.programmerAvailability.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.ProgrammerAvailabilityFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a ProgrammerAvailability.
     * @param {ProgrammerAvailabilityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const programmerAvailability = await prisma.programmerAvailability.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.ProgrammerAvailabilityAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of ProgrammerAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammerAvailabilityCountArgs} args - Arguments to filter ProgrammerAvailabilities to count.
     * @example
     * // Count the number of ProgrammerAvailabilities
     * const count = await prisma.programmerAvailability.count({
     *   where: {
     *     // ... the filter for the ProgrammerAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends ProgrammerAvailabilityCountArgs>(args?: Prisma.Subset<T, ProgrammerAvailabilityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProgrammerAvailabilityCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProgrammerAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammerAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgrammerAvailabilityAggregateArgs>(args: Prisma.Subset<T, ProgrammerAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetProgrammerAvailabilityAggregateType<T>>;
    /**
     * Group by ProgrammerAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammerAvailabilityGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProgrammerAvailabilityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProgrammerAvailabilityGroupByArgs['orderBy'];
    } : {
        orderBy?: ProgrammerAvailabilityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProgrammerAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgrammerAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProgrammerAvailability model
     */
    readonly fields: ProgrammerAvailabilityFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProgrammerAvailability.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProgrammerAvailabilityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    programmer<T extends Prisma.ProgrammerProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgrammerProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProgrammerProfileClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ProgrammerAvailability model
 */
export interface ProgrammerAvailabilityFieldRefs {
    readonly id: Prisma.FieldRef<"ProgrammerAvailability", 'String'>;
    readonly programmerId: Prisma.FieldRef<"ProgrammerAvailability", 'String'>;
    readonly day: Prisma.FieldRef<"ProgrammerAvailability", 'Weekday'>;
    readonly startMinutes: Prisma.FieldRef<"ProgrammerAvailability", 'Int'>;
    readonly endMinutes: Prisma.FieldRef<"ProgrammerAvailability", 'Int'>;
}
/**
 * ProgrammerAvailability findUnique
 */
export type ProgrammerAvailabilityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerAvailability
     */
    select?: Prisma.ProgrammerAvailabilitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerAvailability
     */
    omit?: Prisma.ProgrammerAvailabilityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerAvailabilityInclude<ExtArgs> | null;
    /**
     * Filter, which ProgrammerAvailability to fetch.
     */
    where: Prisma.ProgrammerAvailabilityWhereUniqueInput;
};
/**
 * ProgrammerAvailability findUniqueOrThrow
 */
export type ProgrammerAvailabilityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerAvailability
     */
    select?: Prisma.ProgrammerAvailabilitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerAvailability
     */
    omit?: Prisma.ProgrammerAvailabilityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerAvailabilityInclude<ExtArgs> | null;
    /**
     * Filter, which ProgrammerAvailability to fetch.
     */
    where: Prisma.ProgrammerAvailabilityWhereUniqueInput;
};
/**
 * ProgrammerAvailability findFirst
 */
export type ProgrammerAvailabilityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerAvailability
     */
    select?: Prisma.ProgrammerAvailabilitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerAvailability
     */
    omit?: Prisma.ProgrammerAvailabilityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerAvailabilityInclude<ExtArgs> | null;
    /**
     * Filter, which ProgrammerAvailability to fetch.
     */
    where?: Prisma.ProgrammerAvailabilityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgrammerAvailabilities to fetch.
     */
    orderBy?: Prisma.ProgrammerAvailabilityOrderByWithRelationInput | Prisma.ProgrammerAvailabilityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProgrammerAvailabilities.
     */
    cursor?: Prisma.ProgrammerAvailabilityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgrammerAvailabilities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgrammerAvailabilities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProgrammerAvailabilities.
     */
    distinct?: Prisma.ProgrammerAvailabilityScalarFieldEnum | Prisma.ProgrammerAvailabilityScalarFieldEnum[];
};
/**
 * ProgrammerAvailability findFirstOrThrow
 */
export type ProgrammerAvailabilityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerAvailability
     */
    select?: Prisma.ProgrammerAvailabilitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerAvailability
     */
    omit?: Prisma.ProgrammerAvailabilityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerAvailabilityInclude<ExtArgs> | null;
    /**
     * Filter, which ProgrammerAvailability to fetch.
     */
    where?: Prisma.ProgrammerAvailabilityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgrammerAvailabilities to fetch.
     */
    orderBy?: Prisma.ProgrammerAvailabilityOrderByWithRelationInput | Prisma.ProgrammerAvailabilityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProgrammerAvailabilities.
     */
    cursor?: Prisma.ProgrammerAvailabilityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgrammerAvailabilities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgrammerAvailabilities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProgrammerAvailabilities.
     */
    distinct?: Prisma.ProgrammerAvailabilityScalarFieldEnum | Prisma.ProgrammerAvailabilityScalarFieldEnum[];
};
/**
 * ProgrammerAvailability findMany
 */
export type ProgrammerAvailabilityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerAvailability
     */
    select?: Prisma.ProgrammerAvailabilitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerAvailability
     */
    omit?: Prisma.ProgrammerAvailabilityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerAvailabilityInclude<ExtArgs> | null;
    /**
     * Filter, which ProgrammerAvailabilities to fetch.
     */
    where?: Prisma.ProgrammerAvailabilityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgrammerAvailabilities to fetch.
     */
    orderBy?: Prisma.ProgrammerAvailabilityOrderByWithRelationInput | Prisma.ProgrammerAvailabilityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProgrammerAvailabilities.
     */
    cursor?: Prisma.ProgrammerAvailabilityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgrammerAvailabilities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgrammerAvailabilities.
     */
    skip?: number;
    distinct?: Prisma.ProgrammerAvailabilityScalarFieldEnum | Prisma.ProgrammerAvailabilityScalarFieldEnum[];
};
/**
 * ProgrammerAvailability create
 */
export type ProgrammerAvailabilityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerAvailability
     */
    select?: Prisma.ProgrammerAvailabilitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerAvailability
     */
    omit?: Prisma.ProgrammerAvailabilityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerAvailabilityInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProgrammerAvailability.
     */
    data: Prisma.XOR<Prisma.ProgrammerAvailabilityCreateInput, Prisma.ProgrammerAvailabilityUncheckedCreateInput>;
};
/**
 * ProgrammerAvailability createMany
 */
export type ProgrammerAvailabilityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgrammerAvailabilities.
     */
    data: Prisma.ProgrammerAvailabilityCreateManyInput | Prisma.ProgrammerAvailabilityCreateManyInput[];
};
/**
 * ProgrammerAvailability update
 */
export type ProgrammerAvailabilityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerAvailability
     */
    select?: Prisma.ProgrammerAvailabilitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerAvailability
     */
    omit?: Prisma.ProgrammerAvailabilityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerAvailabilityInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProgrammerAvailability.
     */
    data: Prisma.XOR<Prisma.ProgrammerAvailabilityUpdateInput, Prisma.ProgrammerAvailabilityUncheckedUpdateInput>;
    /**
     * Choose, which ProgrammerAvailability to update.
     */
    where: Prisma.ProgrammerAvailabilityWhereUniqueInput;
};
/**
 * ProgrammerAvailability updateMany
 */
export type ProgrammerAvailabilityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgrammerAvailabilities.
     */
    data: Prisma.XOR<Prisma.ProgrammerAvailabilityUpdateManyMutationInput, Prisma.ProgrammerAvailabilityUncheckedUpdateManyInput>;
    /**
     * Filter which ProgrammerAvailabilities to update
     */
    where?: Prisma.ProgrammerAvailabilityWhereInput;
    /**
     * Limit how many ProgrammerAvailabilities to update.
     */
    limit?: number;
};
/**
 * ProgrammerAvailability upsert
 */
export type ProgrammerAvailabilityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerAvailability
     */
    select?: Prisma.ProgrammerAvailabilitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerAvailability
     */
    omit?: Prisma.ProgrammerAvailabilityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerAvailabilityInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProgrammerAvailability to update in case it exists.
     */
    where: Prisma.ProgrammerAvailabilityWhereUniqueInput;
    /**
     * In case the ProgrammerAvailability found by the `where` argument doesn't exist, create a new ProgrammerAvailability with this data.
     */
    create: Prisma.XOR<Prisma.ProgrammerAvailabilityCreateInput, Prisma.ProgrammerAvailabilityUncheckedCreateInput>;
    /**
     * In case the ProgrammerAvailability was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProgrammerAvailabilityUpdateInput, Prisma.ProgrammerAvailabilityUncheckedUpdateInput>;
};
/**
 * ProgrammerAvailability delete
 */
export type ProgrammerAvailabilityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerAvailability
     */
    select?: Prisma.ProgrammerAvailabilitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerAvailability
     */
    omit?: Prisma.ProgrammerAvailabilityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerAvailabilityInclude<ExtArgs> | null;
    /**
     * Filter which ProgrammerAvailability to delete.
     */
    where: Prisma.ProgrammerAvailabilityWhereUniqueInput;
};
/**
 * ProgrammerAvailability deleteMany
 */
export type ProgrammerAvailabilityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProgrammerAvailabilities to delete
     */
    where?: Prisma.ProgrammerAvailabilityWhereInput;
    /**
     * Limit how many ProgrammerAvailabilities to delete.
     */
    limit?: number;
};
/**
 * ProgrammerAvailability findRaw
 */
export type ProgrammerAvailabilityFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: runtime.InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: runtime.InputJsonValue;
};
/**
 * ProgrammerAvailability aggregateRaw
 */
export type ProgrammerAvailabilityAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: runtime.InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: runtime.InputJsonValue;
};
/**
 * ProgrammerAvailability without action
 */
export type ProgrammerAvailabilityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerAvailability
     */
    select?: Prisma.ProgrammerAvailabilitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerAvailability
     */
    omit?: Prisma.ProgrammerAvailabilityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerAvailabilityInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ProgrammerAvailability.d.ts.map
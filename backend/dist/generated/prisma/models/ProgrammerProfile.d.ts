import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ProgrammerProfile
 *
 */
export type ProgrammerProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$ProgrammerProfilePayload>;
export type AggregateProgrammerProfile = {
    _count: ProgrammerProfileCountAggregateOutputType | null;
    _min: ProgrammerProfileMinAggregateOutputType | null;
    _max: ProgrammerProfileMaxAggregateOutputType | null;
};
export type ProgrammerProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    specialty: string | null;
    bio: string | null;
    avatarUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deleted: boolean | null;
};
export type ProgrammerProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    specialty: string | null;
    bio: string | null;
    avatarUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deleted: boolean | null;
};
export type ProgrammerProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    specialty: number;
    bio: number;
    avatarUrl: number;
    contactLinks: number;
    createdAt: number;
    updatedAt: number;
    deleted: number;
    _all: number;
};
export type ProgrammerProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    specialty?: true;
    bio?: true;
    avatarUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    deleted?: true;
};
export type ProgrammerProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    specialty?: true;
    bio?: true;
    avatarUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    deleted?: true;
};
export type ProgrammerProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    specialty?: true;
    bio?: true;
    avatarUrl?: true;
    contactLinks?: true;
    createdAt?: true;
    updatedAt?: true;
    deleted?: true;
    _all?: true;
};
export type ProgrammerProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProgrammerProfile to aggregate.
     */
    where?: Prisma.ProgrammerProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgrammerProfiles to fetch.
     */
    orderBy?: Prisma.ProgrammerProfileOrderByWithRelationInput | Prisma.ProgrammerProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProgrammerProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgrammerProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgrammerProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProgrammerProfiles
    **/
    _count?: true | ProgrammerProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProgrammerProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProgrammerProfileMaxAggregateInputType;
};
export type GetProgrammerProfileAggregateType<T extends ProgrammerProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProgrammerProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProgrammerProfile[P]> : Prisma.GetScalarType<T[P], AggregateProgrammerProfile[P]>;
};
export type ProgrammerProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgrammerProfileWhereInput;
    orderBy?: Prisma.ProgrammerProfileOrderByWithAggregationInput | Prisma.ProgrammerProfileOrderByWithAggregationInput[];
    by: Prisma.ProgrammerProfileScalarFieldEnum[] | Prisma.ProgrammerProfileScalarFieldEnum;
    having?: Prisma.ProgrammerProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgrammerProfileCountAggregateInputType | true;
    _min?: ProgrammerProfileMinAggregateInputType;
    _max?: ProgrammerProfileMaxAggregateInputType;
};
export type ProgrammerProfileGroupByOutputType = {
    id: string;
    userId: string;
    name: string;
    specialty: string | null;
    bio: string | null;
    avatarUrl: string | null;
    contactLinks: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date | null;
    deleted: boolean;
    _count: ProgrammerProfileCountAggregateOutputType | null;
    _min: ProgrammerProfileMinAggregateOutputType | null;
    _max: ProgrammerProfileMaxAggregateOutputType | null;
};
type GetProgrammerProfileGroupByPayload<T extends ProgrammerProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProgrammerProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProgrammerProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProgrammerProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProgrammerProfileGroupByOutputType[P]>;
}>>;
export type ProgrammerProfileWhereInput = {
    AND?: Prisma.ProgrammerProfileWhereInput | Prisma.ProgrammerProfileWhereInput[];
    OR?: Prisma.ProgrammerProfileWhereInput[];
    NOT?: Prisma.ProgrammerProfileWhereInput | Prisma.ProgrammerProfileWhereInput[];
    id?: Prisma.StringFilter<"ProgrammerProfile"> | string;
    userId?: Prisma.StringFilter<"ProgrammerProfile"> | string;
    name?: Prisma.StringFilter<"ProgrammerProfile"> | string;
    specialty?: Prisma.StringNullableFilter<"ProgrammerProfile"> | string | null;
    bio?: Prisma.StringNullableFilter<"ProgrammerProfile"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"ProgrammerProfile"> | string | null;
    contactLinks?: Prisma.JsonNullableFilter<"ProgrammerProfile">;
    createdAt?: Prisma.DateTimeFilter<"ProgrammerProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"ProgrammerProfile"> | Date | string | null;
    deleted?: Prisma.BoolFilter<"ProgrammerProfile"> | boolean;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    portfolio?: Prisma.XOR<Prisma.PortfolioNullableScalarRelationFilter, Prisma.PortfolioWhereInput> | null;
    available?: Prisma.ProgrammerAvailabilityListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    bookings?: Prisma.BookingListRelationFilter;
};
export type ProgrammerProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    specialty?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    contactLinks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deleted?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    portfolio?: Prisma.PortfolioOrderByWithRelationInput;
    available?: Prisma.ProgrammerAvailabilityOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    bookings?: Prisma.BookingOrderByRelationAggregateInput;
};
export type ProgrammerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.ProgrammerProfileWhereInput | Prisma.ProgrammerProfileWhereInput[];
    OR?: Prisma.ProgrammerProfileWhereInput[];
    NOT?: Prisma.ProgrammerProfileWhereInput | Prisma.ProgrammerProfileWhereInput[];
    name?: Prisma.StringFilter<"ProgrammerProfile"> | string;
    specialty?: Prisma.StringNullableFilter<"ProgrammerProfile"> | string | null;
    bio?: Prisma.StringNullableFilter<"ProgrammerProfile"> | string | null;
    avatarUrl?: Prisma.StringNullableFilter<"ProgrammerProfile"> | string | null;
    contactLinks?: Prisma.JsonNullableFilter<"ProgrammerProfile">;
    createdAt?: Prisma.DateTimeFilter<"ProgrammerProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableFilter<"ProgrammerProfile"> | Date | string | null;
    deleted?: Prisma.BoolFilter<"ProgrammerProfile"> | boolean;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    portfolio?: Prisma.XOR<Prisma.PortfolioNullableScalarRelationFilter, Prisma.PortfolioWhereInput> | null;
    available?: Prisma.ProgrammerAvailabilityListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    bookings?: Prisma.BookingListRelationFilter;
}, "id" | "userId">;
export type ProgrammerProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    specialty?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    contactLinks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deleted?: Prisma.SortOrder;
    _count?: Prisma.ProgrammerProfileCountOrderByAggregateInput;
    _max?: Prisma.ProgrammerProfileMaxOrderByAggregateInput;
    _min?: Prisma.ProgrammerProfileMinOrderByAggregateInput;
};
export type ProgrammerProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProgrammerProfileScalarWhereWithAggregatesInput | Prisma.ProgrammerProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProgrammerProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProgrammerProfileScalarWhereWithAggregatesInput | Prisma.ProgrammerProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProgrammerProfile"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ProgrammerProfile"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ProgrammerProfile"> | string;
    specialty?: Prisma.StringNullableWithAggregatesFilter<"ProgrammerProfile"> | string | null;
    bio?: Prisma.StringNullableWithAggregatesFilter<"ProgrammerProfile"> | string | null;
    avatarUrl?: Prisma.StringNullableWithAggregatesFilter<"ProgrammerProfile"> | string | null;
    contactLinks?: Prisma.JsonNullableWithAggregatesFilter<"ProgrammerProfile">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProgrammerProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ProgrammerProfile"> | Date | string | null;
    deleted?: Prisma.BoolWithAggregatesFilter<"ProgrammerProfile"> | boolean;
};
export type ProgrammerProfileCreateInput = {
    id?: string;
    name: string;
    specialty?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    contactLinks?: runtime.InputJsonValue | null;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    deleted?: boolean;
    user: Prisma.UserCreateNestedOneWithoutProfileInput;
    portfolio?: Prisma.PortfolioCreateNestedOneWithoutOwnerInput;
    available?: Prisma.ProgrammerAvailabilityCreateNestedManyWithoutProgrammerInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutProfileInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutProgrammerInput;
};
export type ProgrammerProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    name: string;
    specialty?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    contactLinks?: runtime.InputJsonValue | null;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    deleted?: boolean;
    portfolio?: Prisma.PortfolioUncheckedCreateNestedOneWithoutOwnerInput;
    available?: Prisma.ProgrammerAvailabilityUncheckedCreateNestedManyWithoutProgrammerInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutProfileInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutProgrammerInput;
};
export type ProgrammerProfileUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    specialty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactLinks?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.UserUpdateOneRequiredWithoutProfileNestedInput;
    portfolio?: Prisma.PortfolioUpdateOneWithoutOwnerNestedInput;
    available?: Prisma.ProgrammerAvailabilityUpdateManyWithoutProgrammerNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutProfileNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutProgrammerNestedInput;
};
export type ProgrammerProfileUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    specialty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactLinks?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    portfolio?: Prisma.PortfolioUncheckedUpdateOneWithoutOwnerNestedInput;
    available?: Prisma.ProgrammerAvailabilityUncheckedUpdateManyWithoutProgrammerNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutProfileNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutProgrammerNestedInput;
};
export type ProgrammerProfileCreateManyInput = {
    id?: string;
    userId: string;
    name: string;
    specialty?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    contactLinks?: runtime.InputJsonValue | null;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    deleted?: boolean;
};
export type ProgrammerProfileUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    specialty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactLinks?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ProgrammerProfileUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    specialty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactLinks?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ProgrammerProfileNullableScalarRelationFilter = {
    is?: Prisma.ProgrammerProfileWhereInput | null;
    isNot?: Prisma.ProgrammerProfileWhereInput | null;
};
export type ProgrammerProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    specialty?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    contactLinks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deleted?: Prisma.SortOrder;
};
export type ProgrammerProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    specialty?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deleted?: Prisma.SortOrder;
};
export type ProgrammerProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    specialty?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deleted?: Prisma.SortOrder;
};
export type ProgrammerProfileScalarRelationFilter = {
    is?: Prisma.ProgrammerProfileWhereInput;
    isNot?: Prisma.ProgrammerProfileWhereInput;
};
export type ProgrammerProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutUserInput, Prisma.ProgrammerProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProgrammerProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.ProgrammerProfileWhereUniqueInput;
};
export type ProgrammerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutUserInput, Prisma.ProgrammerProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProgrammerProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.ProgrammerProfileWhereUniqueInput;
};
export type ProgrammerProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutUserInput, Prisma.ProgrammerProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProgrammerProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ProgrammerProfileUpsertWithoutUserInput;
    disconnect?: Prisma.ProgrammerProfileWhereInput | boolean;
    delete?: Prisma.ProgrammerProfileWhereInput | boolean;
    connect?: Prisma.ProgrammerProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProgrammerProfileUpdateToOneWithWhereWithoutUserInput, Prisma.ProgrammerProfileUpdateWithoutUserInput>, Prisma.ProgrammerProfileUncheckedUpdateWithoutUserInput>;
};
export type ProgrammerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutUserInput, Prisma.ProgrammerProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.ProgrammerProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.ProgrammerProfileUpsertWithoutUserInput;
    disconnect?: Prisma.ProgrammerProfileWhereInput | boolean;
    delete?: Prisma.ProgrammerProfileWhereInput | boolean;
    connect?: Prisma.ProgrammerProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProgrammerProfileUpdateToOneWithWhereWithoutUserInput, Prisma.ProgrammerProfileUpdateWithoutUserInput>, Prisma.ProgrammerProfileUncheckedUpdateWithoutUserInput>;
};
export type ProgrammerProfileCreateNestedOneWithoutAvailableInput = {
    create?: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutAvailableInput, Prisma.ProgrammerProfileUncheckedCreateWithoutAvailableInput>;
    connectOrCreate?: Prisma.ProgrammerProfileCreateOrConnectWithoutAvailableInput;
    connect?: Prisma.ProgrammerProfileWhereUniqueInput;
};
export type ProgrammerProfileUpdateOneRequiredWithoutAvailableNestedInput = {
    create?: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutAvailableInput, Prisma.ProgrammerProfileUncheckedCreateWithoutAvailableInput>;
    connectOrCreate?: Prisma.ProgrammerProfileCreateOrConnectWithoutAvailableInput;
    upsert?: Prisma.ProgrammerProfileUpsertWithoutAvailableInput;
    connect?: Prisma.ProgrammerProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProgrammerProfileUpdateToOneWithWhereWithoutAvailableInput, Prisma.ProgrammerProfileUpdateWithoutAvailableInput>, Prisma.ProgrammerProfileUncheckedUpdateWithoutAvailableInput>;
};
export type ProgrammerProfileCreateNestedOneWithoutPortfolioInput = {
    create?: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutPortfolioInput, Prisma.ProgrammerProfileUncheckedCreateWithoutPortfolioInput>;
    connectOrCreate?: Prisma.ProgrammerProfileCreateOrConnectWithoutPortfolioInput;
    connect?: Prisma.ProgrammerProfileWhereUniqueInput;
};
export type ProgrammerProfileUpdateOneRequiredWithoutPortfolioNestedInput = {
    create?: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutPortfolioInput, Prisma.ProgrammerProfileUncheckedCreateWithoutPortfolioInput>;
    connectOrCreate?: Prisma.ProgrammerProfileCreateOrConnectWithoutPortfolioInput;
    upsert?: Prisma.ProgrammerProfileUpsertWithoutPortfolioInput;
    connect?: Prisma.ProgrammerProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProgrammerProfileUpdateToOneWithWhereWithoutPortfolioInput, Prisma.ProgrammerProfileUpdateWithoutPortfolioInput>, Prisma.ProgrammerProfileUncheckedUpdateWithoutPortfolioInput>;
};
export type ProgrammerProfileCreateNestedOneWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutBookingsInput, Prisma.ProgrammerProfileUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.ProgrammerProfileCreateOrConnectWithoutBookingsInput;
    connect?: Prisma.ProgrammerProfileWhereUniqueInput;
};
export type ProgrammerProfileUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutBookingsInput, Prisma.ProgrammerProfileUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.ProgrammerProfileCreateOrConnectWithoutBookingsInput;
    upsert?: Prisma.ProgrammerProfileUpsertWithoutBookingsInput;
    connect?: Prisma.ProgrammerProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProgrammerProfileUpdateToOneWithWhereWithoutBookingsInput, Prisma.ProgrammerProfileUpdateWithoutBookingsInput>, Prisma.ProgrammerProfileUncheckedUpdateWithoutBookingsInput>;
};
export type ProgrammerProfileCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutNotificationsInput, Prisma.ProgrammerProfileUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.ProgrammerProfileCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.ProgrammerProfileWhereUniqueInput;
};
export type ProgrammerProfileUpdateOneWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutNotificationsInput, Prisma.ProgrammerProfileUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.ProgrammerProfileCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.ProgrammerProfileUpsertWithoutNotificationsInput;
    disconnect?: boolean;
    delete?: Prisma.ProgrammerProfileWhereInput | boolean;
    connect?: Prisma.ProgrammerProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProgrammerProfileUpdateToOneWithWhereWithoutNotificationsInput, Prisma.ProgrammerProfileUpdateWithoutNotificationsInput>, Prisma.ProgrammerProfileUncheckedUpdateWithoutNotificationsInput>;
};
export type ProgrammerProfileCreateWithoutUserInput = {
    id?: string;
    name: string;
    specialty?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    contactLinks?: runtime.InputJsonValue | null;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    deleted?: boolean;
    portfolio?: Prisma.PortfolioCreateNestedOneWithoutOwnerInput;
    available?: Prisma.ProgrammerAvailabilityCreateNestedManyWithoutProgrammerInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutProfileInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutProgrammerInput;
};
export type ProgrammerProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    specialty?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    contactLinks?: runtime.InputJsonValue | null;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    deleted?: boolean;
    portfolio?: Prisma.PortfolioUncheckedCreateNestedOneWithoutOwnerInput;
    available?: Prisma.ProgrammerAvailabilityUncheckedCreateNestedManyWithoutProgrammerInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutProfileInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutProgrammerInput;
};
export type ProgrammerProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.ProgrammerProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutUserInput, Prisma.ProgrammerProfileUncheckedCreateWithoutUserInput>;
};
export type ProgrammerProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.ProgrammerProfileUpdateWithoutUserInput, Prisma.ProgrammerProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutUserInput, Prisma.ProgrammerProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.ProgrammerProfileWhereInput;
};
export type ProgrammerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.ProgrammerProfileWhereInput;
    data: Prisma.XOR<Prisma.ProgrammerProfileUpdateWithoutUserInput, Prisma.ProgrammerProfileUncheckedUpdateWithoutUserInput>;
};
export type ProgrammerProfileUpdateWithoutUserInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    specialty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactLinks?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    portfolio?: Prisma.PortfolioUpdateOneWithoutOwnerNestedInput;
    available?: Prisma.ProgrammerAvailabilityUpdateManyWithoutProgrammerNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutProfileNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutProgrammerNestedInput;
};
export type ProgrammerProfileUncheckedUpdateWithoutUserInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    specialty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactLinks?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    portfolio?: Prisma.PortfolioUncheckedUpdateOneWithoutOwnerNestedInput;
    available?: Prisma.ProgrammerAvailabilityUncheckedUpdateManyWithoutProgrammerNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutProfileNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutProgrammerNestedInput;
};
export type ProgrammerProfileCreateWithoutAvailableInput = {
    id?: string;
    name: string;
    specialty?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    contactLinks?: runtime.InputJsonValue | null;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    deleted?: boolean;
    user: Prisma.UserCreateNestedOneWithoutProfileInput;
    portfolio?: Prisma.PortfolioCreateNestedOneWithoutOwnerInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutProfileInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutProgrammerInput;
};
export type ProgrammerProfileUncheckedCreateWithoutAvailableInput = {
    id?: string;
    userId: string;
    name: string;
    specialty?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    contactLinks?: runtime.InputJsonValue | null;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    deleted?: boolean;
    portfolio?: Prisma.PortfolioUncheckedCreateNestedOneWithoutOwnerInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutProfileInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutProgrammerInput;
};
export type ProgrammerProfileCreateOrConnectWithoutAvailableInput = {
    where: Prisma.ProgrammerProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutAvailableInput, Prisma.ProgrammerProfileUncheckedCreateWithoutAvailableInput>;
};
export type ProgrammerProfileUpsertWithoutAvailableInput = {
    update: Prisma.XOR<Prisma.ProgrammerProfileUpdateWithoutAvailableInput, Prisma.ProgrammerProfileUncheckedUpdateWithoutAvailableInput>;
    create: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutAvailableInput, Prisma.ProgrammerProfileUncheckedCreateWithoutAvailableInput>;
    where?: Prisma.ProgrammerProfileWhereInput;
};
export type ProgrammerProfileUpdateToOneWithWhereWithoutAvailableInput = {
    where?: Prisma.ProgrammerProfileWhereInput;
    data: Prisma.XOR<Prisma.ProgrammerProfileUpdateWithoutAvailableInput, Prisma.ProgrammerProfileUncheckedUpdateWithoutAvailableInput>;
};
export type ProgrammerProfileUpdateWithoutAvailableInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    specialty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactLinks?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.UserUpdateOneRequiredWithoutProfileNestedInput;
    portfolio?: Prisma.PortfolioUpdateOneWithoutOwnerNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutProfileNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutProgrammerNestedInput;
};
export type ProgrammerProfileUncheckedUpdateWithoutAvailableInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    specialty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactLinks?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    portfolio?: Prisma.PortfolioUncheckedUpdateOneWithoutOwnerNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutProfileNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutProgrammerNestedInput;
};
export type ProgrammerProfileCreateWithoutPortfolioInput = {
    id?: string;
    name: string;
    specialty?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    contactLinks?: runtime.InputJsonValue | null;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    deleted?: boolean;
    user: Prisma.UserCreateNestedOneWithoutProfileInput;
    available?: Prisma.ProgrammerAvailabilityCreateNestedManyWithoutProgrammerInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutProfileInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutProgrammerInput;
};
export type ProgrammerProfileUncheckedCreateWithoutPortfolioInput = {
    id?: string;
    userId: string;
    name: string;
    specialty?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    contactLinks?: runtime.InputJsonValue | null;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    deleted?: boolean;
    available?: Prisma.ProgrammerAvailabilityUncheckedCreateNestedManyWithoutProgrammerInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutProfileInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutProgrammerInput;
};
export type ProgrammerProfileCreateOrConnectWithoutPortfolioInput = {
    where: Prisma.ProgrammerProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutPortfolioInput, Prisma.ProgrammerProfileUncheckedCreateWithoutPortfolioInput>;
};
export type ProgrammerProfileUpsertWithoutPortfolioInput = {
    update: Prisma.XOR<Prisma.ProgrammerProfileUpdateWithoutPortfolioInput, Prisma.ProgrammerProfileUncheckedUpdateWithoutPortfolioInput>;
    create: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutPortfolioInput, Prisma.ProgrammerProfileUncheckedCreateWithoutPortfolioInput>;
    where?: Prisma.ProgrammerProfileWhereInput;
};
export type ProgrammerProfileUpdateToOneWithWhereWithoutPortfolioInput = {
    where?: Prisma.ProgrammerProfileWhereInput;
    data: Prisma.XOR<Prisma.ProgrammerProfileUpdateWithoutPortfolioInput, Prisma.ProgrammerProfileUncheckedUpdateWithoutPortfolioInput>;
};
export type ProgrammerProfileUpdateWithoutPortfolioInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    specialty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactLinks?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.UserUpdateOneRequiredWithoutProfileNestedInput;
    available?: Prisma.ProgrammerAvailabilityUpdateManyWithoutProgrammerNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutProfileNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutProgrammerNestedInput;
};
export type ProgrammerProfileUncheckedUpdateWithoutPortfolioInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    specialty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactLinks?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    available?: Prisma.ProgrammerAvailabilityUncheckedUpdateManyWithoutProgrammerNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutProfileNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutProgrammerNestedInput;
};
export type ProgrammerProfileCreateWithoutBookingsInput = {
    id?: string;
    name: string;
    specialty?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    contactLinks?: runtime.InputJsonValue | null;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    deleted?: boolean;
    user: Prisma.UserCreateNestedOneWithoutProfileInput;
    portfolio?: Prisma.PortfolioCreateNestedOneWithoutOwnerInput;
    available?: Prisma.ProgrammerAvailabilityCreateNestedManyWithoutProgrammerInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutProfileInput;
};
export type ProgrammerProfileUncheckedCreateWithoutBookingsInput = {
    id?: string;
    userId: string;
    name: string;
    specialty?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    contactLinks?: runtime.InputJsonValue | null;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    deleted?: boolean;
    portfolio?: Prisma.PortfolioUncheckedCreateNestedOneWithoutOwnerInput;
    available?: Prisma.ProgrammerAvailabilityUncheckedCreateNestedManyWithoutProgrammerInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProgrammerProfileCreateOrConnectWithoutBookingsInput = {
    where: Prisma.ProgrammerProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutBookingsInput, Prisma.ProgrammerProfileUncheckedCreateWithoutBookingsInput>;
};
export type ProgrammerProfileUpsertWithoutBookingsInput = {
    update: Prisma.XOR<Prisma.ProgrammerProfileUpdateWithoutBookingsInput, Prisma.ProgrammerProfileUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutBookingsInput, Prisma.ProgrammerProfileUncheckedCreateWithoutBookingsInput>;
    where?: Prisma.ProgrammerProfileWhereInput;
};
export type ProgrammerProfileUpdateToOneWithWhereWithoutBookingsInput = {
    where?: Prisma.ProgrammerProfileWhereInput;
    data: Prisma.XOR<Prisma.ProgrammerProfileUpdateWithoutBookingsInput, Prisma.ProgrammerProfileUncheckedUpdateWithoutBookingsInput>;
};
export type ProgrammerProfileUpdateWithoutBookingsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    specialty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactLinks?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.UserUpdateOneRequiredWithoutProfileNestedInput;
    portfolio?: Prisma.PortfolioUpdateOneWithoutOwnerNestedInput;
    available?: Prisma.ProgrammerAvailabilityUpdateManyWithoutProgrammerNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutProfileNestedInput;
};
export type ProgrammerProfileUncheckedUpdateWithoutBookingsInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    specialty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactLinks?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    portfolio?: Prisma.PortfolioUncheckedUpdateOneWithoutOwnerNestedInput;
    available?: Prisma.ProgrammerAvailabilityUncheckedUpdateManyWithoutProgrammerNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProgrammerProfileCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    specialty?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    contactLinks?: runtime.InputJsonValue | null;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    deleted?: boolean;
    user: Prisma.UserCreateNestedOneWithoutProfileInput;
    portfolio?: Prisma.PortfolioCreateNestedOneWithoutOwnerInput;
    available?: Prisma.ProgrammerAvailabilityCreateNestedManyWithoutProgrammerInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutProgrammerInput;
};
export type ProgrammerProfileUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    userId: string;
    name: string;
    specialty?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
    contactLinks?: runtime.InputJsonValue | null;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    deleted?: boolean;
    portfolio?: Prisma.PortfolioUncheckedCreateNestedOneWithoutOwnerInput;
    available?: Prisma.ProgrammerAvailabilityUncheckedCreateNestedManyWithoutProgrammerInput;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutProgrammerInput;
};
export type ProgrammerProfileCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.ProgrammerProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutNotificationsInput, Prisma.ProgrammerProfileUncheckedCreateWithoutNotificationsInput>;
};
export type ProgrammerProfileUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.ProgrammerProfileUpdateWithoutNotificationsInput, Prisma.ProgrammerProfileUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.ProgrammerProfileCreateWithoutNotificationsInput, Prisma.ProgrammerProfileUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.ProgrammerProfileWhereInput;
};
export type ProgrammerProfileUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.ProgrammerProfileWhereInput;
    data: Prisma.XOR<Prisma.ProgrammerProfileUpdateWithoutNotificationsInput, Prisma.ProgrammerProfileUncheckedUpdateWithoutNotificationsInput>;
};
export type ProgrammerProfileUpdateWithoutNotificationsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    specialty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactLinks?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.UserUpdateOneRequiredWithoutProfileNestedInput;
    portfolio?: Prisma.PortfolioUpdateOneWithoutOwnerNestedInput;
    available?: Prisma.ProgrammerAvailabilityUpdateManyWithoutProgrammerNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutProgrammerNestedInput;
};
export type ProgrammerProfileUncheckedUpdateWithoutNotificationsInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    specialty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contactLinks?: runtime.InputJsonValue | runtime.InputJsonValue | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    portfolio?: Prisma.PortfolioUncheckedUpdateOneWithoutOwnerNestedInput;
    available?: Prisma.ProgrammerAvailabilityUncheckedUpdateManyWithoutProgrammerNestedInput;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutProgrammerNestedInput;
};
/**
 * Count Type ProgrammerProfileCountOutputType
 */
export type ProgrammerProfileCountOutputType = {
    available: number;
    notifications: number;
    bookings: number;
};
export type ProgrammerProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    available?: boolean | ProgrammerProfileCountOutputTypeCountAvailableArgs;
    notifications?: boolean | ProgrammerProfileCountOutputTypeCountNotificationsArgs;
    bookings?: boolean | ProgrammerProfileCountOutputTypeCountBookingsArgs;
};
/**
 * ProgrammerProfileCountOutputType without action
 */
export type ProgrammerProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerProfileCountOutputType
     */
    select?: Prisma.ProgrammerProfileCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProgrammerProfileCountOutputType without action
 */
export type ProgrammerProfileCountOutputTypeCountAvailableArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgrammerAvailabilityWhereInput;
};
/**
 * ProgrammerProfileCountOutputType without action
 */
export type ProgrammerProfileCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * ProgrammerProfileCountOutputType without action
 */
export type ProgrammerProfileCountOutputTypeCountBookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingWhereInput;
};
export type ProgrammerProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    specialty?: boolean;
    bio?: boolean;
    avatarUrl?: boolean;
    contactLinks?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deleted?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    portfolio?: boolean | Prisma.ProgrammerProfile$portfolioArgs<ExtArgs>;
    available?: boolean | Prisma.ProgrammerProfile$availableArgs<ExtArgs>;
    notifications?: boolean | Prisma.ProgrammerProfile$notificationsArgs<ExtArgs>;
    bookings?: boolean | Prisma.ProgrammerProfile$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProgrammerProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programmerProfile"]>;
export type ProgrammerProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    specialty?: boolean;
    bio?: boolean;
    avatarUrl?: boolean;
    contactLinks?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deleted?: boolean;
};
export type ProgrammerProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "name" | "specialty" | "bio" | "avatarUrl" | "contactLinks" | "createdAt" | "updatedAt" | "deleted", ExtArgs["result"]["programmerProfile"]>;
export type ProgrammerProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    portfolio?: boolean | Prisma.ProgrammerProfile$portfolioArgs<ExtArgs>;
    available?: boolean | Prisma.ProgrammerProfile$availableArgs<ExtArgs>;
    notifications?: boolean | Prisma.ProgrammerProfile$notificationsArgs<ExtArgs>;
    bookings?: boolean | Prisma.ProgrammerProfile$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProgrammerProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ProgrammerProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProgrammerProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        portfolio: Prisma.$PortfolioPayload<ExtArgs> | null;
        available: Prisma.$ProgrammerAvailabilityPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        bookings: Prisma.$BookingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        name: string;
        specialty: string | null;
        bio: string | null;
        avatarUrl: string | null;
        contactLinks: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date | null;
        deleted: boolean;
    }, ExtArgs["result"]["programmerProfile"]>;
    composites: {};
};
export type ProgrammerProfileGetPayload<S extends boolean | null | undefined | ProgrammerProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProgrammerProfilePayload, S>;
export type ProgrammerProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProgrammerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProgrammerProfileCountAggregateInputType | true;
};
export interface ProgrammerProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProgrammerProfile'];
        meta: {
            name: 'ProgrammerProfile';
        };
    };
    /**
     * Find zero or one ProgrammerProfile that matches the filter.
     * @param {ProgrammerProfileFindUniqueArgs} args - Arguments to find a ProgrammerProfile
     * @example
     * // Get one ProgrammerProfile
     * const programmerProfile = await prisma.programmerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgrammerProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, ProgrammerProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProgrammerProfileClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProgrammerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgrammerProfileFindUniqueOrThrowArgs} args - Arguments to find a ProgrammerProfile
     * @example
     * // Get one ProgrammerProfile
     * const programmerProfile = await prisma.programmerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgrammerProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProgrammerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgrammerProfileClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProgrammerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammerProfileFindFirstArgs} args - Arguments to find a ProgrammerProfile
     * @example
     * // Get one ProgrammerProfile
     * const programmerProfile = await prisma.programmerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgrammerProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, ProgrammerProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProgrammerProfileClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProgrammerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammerProfileFindFirstOrThrowArgs} args - Arguments to find a ProgrammerProfile
     * @example
     * // Get one ProgrammerProfile
     * const programmerProfile = await prisma.programmerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgrammerProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProgrammerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgrammerProfileClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProgrammerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgrammerProfiles
     * const programmerProfiles = await prisma.programmerProfile.findMany()
     *
     * // Get first 10 ProgrammerProfiles
     * const programmerProfiles = await prisma.programmerProfile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const programmerProfileWithIdOnly = await prisma.programmerProfile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProgrammerProfileFindManyArgs>(args?: Prisma.SelectSubset<T, ProgrammerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgrammerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProgrammerProfile.
     * @param {ProgrammerProfileCreateArgs} args - Arguments to create a ProgrammerProfile.
     * @example
     * // Create one ProgrammerProfile
     * const ProgrammerProfile = await prisma.programmerProfile.create({
     *   data: {
     *     // ... data to create a ProgrammerProfile
     *   }
     * })
     *
     */
    create<T extends ProgrammerProfileCreateArgs>(args: Prisma.SelectSubset<T, ProgrammerProfileCreateArgs<ExtArgs>>): Prisma.Prisma__ProgrammerProfileClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProgrammerProfiles.
     * @param {ProgrammerProfileCreateManyArgs} args - Arguments to create many ProgrammerProfiles.
     * @example
     * // Create many ProgrammerProfiles
     * const programmerProfile = await prisma.programmerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProgrammerProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, ProgrammerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a ProgrammerProfile.
     * @param {ProgrammerProfileDeleteArgs} args - Arguments to delete one ProgrammerProfile.
     * @example
     * // Delete one ProgrammerProfile
     * const ProgrammerProfile = await prisma.programmerProfile.delete({
     *   where: {
     *     // ... filter to delete one ProgrammerProfile
     *   }
     * })
     *
     */
    delete<T extends ProgrammerProfileDeleteArgs>(args: Prisma.SelectSubset<T, ProgrammerProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__ProgrammerProfileClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProgrammerProfile.
     * @param {ProgrammerProfileUpdateArgs} args - Arguments to update one ProgrammerProfile.
     * @example
     * // Update one ProgrammerProfile
     * const programmerProfile = await prisma.programmerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProgrammerProfileUpdateArgs>(args: Prisma.SelectSubset<T, ProgrammerProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__ProgrammerProfileClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProgrammerProfiles.
     * @param {ProgrammerProfileDeleteManyArgs} args - Arguments to filter ProgrammerProfiles to delete.
     * @example
     * // Delete a few ProgrammerProfiles
     * const { count } = await prisma.programmerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProgrammerProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProgrammerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProgrammerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgrammerProfiles
     * const programmerProfile = await prisma.programmerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProgrammerProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, ProgrammerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one ProgrammerProfile.
     * @param {ProgrammerProfileUpsertArgs} args - Arguments to update or create a ProgrammerProfile.
     * @example
     * // Update or create a ProgrammerProfile
     * const programmerProfile = await prisma.programmerProfile.upsert({
     *   create: {
     *     // ... data to create a ProgrammerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgrammerProfile we want to update
     *   }
     * })
     */
    upsert<T extends ProgrammerProfileUpsertArgs>(args: Prisma.SelectSubset<T, ProgrammerProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__ProgrammerProfileClient<runtime.Types.Result.GetResult<Prisma.$ProgrammerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProgrammerProfiles that matches the filter.
     * @param {ProgrammerProfileFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const programmerProfile = await prisma.programmerProfile.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.ProgrammerProfileFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a ProgrammerProfile.
     * @param {ProgrammerProfileAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const programmerProfile = await prisma.programmerProfile.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.ProgrammerProfileAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of ProgrammerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammerProfileCountArgs} args - Arguments to filter ProgrammerProfiles to count.
     * @example
     * // Count the number of ProgrammerProfiles
     * const count = await prisma.programmerProfile.count({
     *   where: {
     *     // ... the filter for the ProgrammerProfiles we want to count
     *   }
     * })
    **/
    count<T extends ProgrammerProfileCountArgs>(args?: Prisma.Subset<T, ProgrammerProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProgrammerProfileCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProgrammerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgrammerProfileAggregateArgs>(args: Prisma.Subset<T, ProgrammerProfileAggregateArgs>): Prisma.PrismaPromise<GetProgrammerProfileAggregateType<T>>;
    /**
     * Group by ProgrammerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammerProfileGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProgrammerProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProgrammerProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: ProgrammerProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProgrammerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgrammerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProgrammerProfile model
     */
    readonly fields: ProgrammerProfileFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProgrammerProfile.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProgrammerProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    portfolio<T extends Prisma.ProgrammerProfile$portfolioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgrammerProfile$portfolioArgs<ExtArgs>>): Prisma.Prisma__PortfolioClient<runtime.Types.Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    available<T extends Prisma.ProgrammerProfile$availableArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgrammerProfile$availableArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgrammerAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.ProgrammerProfile$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgrammerProfile$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bookings<T extends Prisma.ProgrammerProfile$bookingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgrammerProfile$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ProgrammerProfile model
 */
export interface ProgrammerProfileFieldRefs {
    readonly id: Prisma.FieldRef<"ProgrammerProfile", 'String'>;
    readonly userId: Prisma.FieldRef<"ProgrammerProfile", 'String'>;
    readonly name: Prisma.FieldRef<"ProgrammerProfile", 'String'>;
    readonly specialty: Prisma.FieldRef<"ProgrammerProfile", 'String'>;
    readonly bio: Prisma.FieldRef<"ProgrammerProfile", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"ProgrammerProfile", 'String'>;
    readonly contactLinks: Prisma.FieldRef<"ProgrammerProfile", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"ProgrammerProfile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ProgrammerProfile", 'DateTime'>;
    readonly deleted: Prisma.FieldRef<"ProgrammerProfile", 'Boolean'>;
}
/**
 * ProgrammerProfile findUnique
 */
export type ProgrammerProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerProfile
     */
    select?: Prisma.ProgrammerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerProfile
     */
    omit?: Prisma.ProgrammerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerProfileInclude<ExtArgs> | null;
    /**
     * Filter, which ProgrammerProfile to fetch.
     */
    where: Prisma.ProgrammerProfileWhereUniqueInput;
};
/**
 * ProgrammerProfile findUniqueOrThrow
 */
export type ProgrammerProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerProfile
     */
    select?: Prisma.ProgrammerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerProfile
     */
    omit?: Prisma.ProgrammerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerProfileInclude<ExtArgs> | null;
    /**
     * Filter, which ProgrammerProfile to fetch.
     */
    where: Prisma.ProgrammerProfileWhereUniqueInput;
};
/**
 * ProgrammerProfile findFirst
 */
export type ProgrammerProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerProfile
     */
    select?: Prisma.ProgrammerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerProfile
     */
    omit?: Prisma.ProgrammerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerProfileInclude<ExtArgs> | null;
    /**
     * Filter, which ProgrammerProfile to fetch.
     */
    where?: Prisma.ProgrammerProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgrammerProfiles to fetch.
     */
    orderBy?: Prisma.ProgrammerProfileOrderByWithRelationInput | Prisma.ProgrammerProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProgrammerProfiles.
     */
    cursor?: Prisma.ProgrammerProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgrammerProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgrammerProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProgrammerProfiles.
     */
    distinct?: Prisma.ProgrammerProfileScalarFieldEnum | Prisma.ProgrammerProfileScalarFieldEnum[];
};
/**
 * ProgrammerProfile findFirstOrThrow
 */
export type ProgrammerProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerProfile
     */
    select?: Prisma.ProgrammerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerProfile
     */
    omit?: Prisma.ProgrammerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerProfileInclude<ExtArgs> | null;
    /**
     * Filter, which ProgrammerProfile to fetch.
     */
    where?: Prisma.ProgrammerProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgrammerProfiles to fetch.
     */
    orderBy?: Prisma.ProgrammerProfileOrderByWithRelationInput | Prisma.ProgrammerProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProgrammerProfiles.
     */
    cursor?: Prisma.ProgrammerProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgrammerProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgrammerProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProgrammerProfiles.
     */
    distinct?: Prisma.ProgrammerProfileScalarFieldEnum | Prisma.ProgrammerProfileScalarFieldEnum[];
};
/**
 * ProgrammerProfile findMany
 */
export type ProgrammerProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerProfile
     */
    select?: Prisma.ProgrammerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerProfile
     */
    omit?: Prisma.ProgrammerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerProfileInclude<ExtArgs> | null;
    /**
     * Filter, which ProgrammerProfiles to fetch.
     */
    where?: Prisma.ProgrammerProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgrammerProfiles to fetch.
     */
    orderBy?: Prisma.ProgrammerProfileOrderByWithRelationInput | Prisma.ProgrammerProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProgrammerProfiles.
     */
    cursor?: Prisma.ProgrammerProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgrammerProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgrammerProfiles.
     */
    skip?: number;
    distinct?: Prisma.ProgrammerProfileScalarFieldEnum | Prisma.ProgrammerProfileScalarFieldEnum[];
};
/**
 * ProgrammerProfile create
 */
export type ProgrammerProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerProfile
     */
    select?: Prisma.ProgrammerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerProfile
     */
    omit?: Prisma.ProgrammerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerProfileInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProgrammerProfile.
     */
    data: Prisma.XOR<Prisma.ProgrammerProfileCreateInput, Prisma.ProgrammerProfileUncheckedCreateInput>;
};
/**
 * ProgrammerProfile createMany
 */
export type ProgrammerProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgrammerProfiles.
     */
    data: Prisma.ProgrammerProfileCreateManyInput | Prisma.ProgrammerProfileCreateManyInput[];
};
/**
 * ProgrammerProfile update
 */
export type ProgrammerProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerProfile
     */
    select?: Prisma.ProgrammerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerProfile
     */
    omit?: Prisma.ProgrammerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerProfileInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProgrammerProfile.
     */
    data: Prisma.XOR<Prisma.ProgrammerProfileUpdateInput, Prisma.ProgrammerProfileUncheckedUpdateInput>;
    /**
     * Choose, which ProgrammerProfile to update.
     */
    where: Prisma.ProgrammerProfileWhereUniqueInput;
};
/**
 * ProgrammerProfile updateMany
 */
export type ProgrammerProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgrammerProfiles.
     */
    data: Prisma.XOR<Prisma.ProgrammerProfileUpdateManyMutationInput, Prisma.ProgrammerProfileUncheckedUpdateManyInput>;
    /**
     * Filter which ProgrammerProfiles to update
     */
    where?: Prisma.ProgrammerProfileWhereInput;
    /**
     * Limit how many ProgrammerProfiles to update.
     */
    limit?: number;
};
/**
 * ProgrammerProfile upsert
 */
export type ProgrammerProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerProfile
     */
    select?: Prisma.ProgrammerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerProfile
     */
    omit?: Prisma.ProgrammerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerProfileInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProgrammerProfile to update in case it exists.
     */
    where: Prisma.ProgrammerProfileWhereUniqueInput;
    /**
     * In case the ProgrammerProfile found by the `where` argument doesn't exist, create a new ProgrammerProfile with this data.
     */
    create: Prisma.XOR<Prisma.ProgrammerProfileCreateInput, Prisma.ProgrammerProfileUncheckedCreateInput>;
    /**
     * In case the ProgrammerProfile was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProgrammerProfileUpdateInput, Prisma.ProgrammerProfileUncheckedUpdateInput>;
};
/**
 * ProgrammerProfile delete
 */
export type ProgrammerProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerProfile
     */
    select?: Prisma.ProgrammerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerProfile
     */
    omit?: Prisma.ProgrammerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerProfileInclude<ExtArgs> | null;
    /**
     * Filter which ProgrammerProfile to delete.
     */
    where: Prisma.ProgrammerProfileWhereUniqueInput;
};
/**
 * ProgrammerProfile deleteMany
 */
export type ProgrammerProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProgrammerProfiles to delete
     */
    where?: Prisma.ProgrammerProfileWhereInput;
    /**
     * Limit how many ProgrammerProfiles to delete.
     */
    limit?: number;
};
/**
 * ProgrammerProfile findRaw
 */
export type ProgrammerProfileFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ProgrammerProfile aggregateRaw
 */
export type ProgrammerProfileAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ProgrammerProfile.portfolio
 */
export type ProgrammerProfile$portfolioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: Prisma.PortfolioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: Prisma.PortfolioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PortfolioInclude<ExtArgs> | null;
    where?: Prisma.PortfolioWhereInput;
};
/**
 * ProgrammerProfile.available
 */
export type ProgrammerProfile$availableArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ProgrammerAvailabilityWhereInput;
    orderBy?: Prisma.ProgrammerAvailabilityOrderByWithRelationInput | Prisma.ProgrammerAvailabilityOrderByWithRelationInput[];
    cursor?: Prisma.ProgrammerAvailabilityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgrammerAvailabilityScalarFieldEnum | Prisma.ProgrammerAvailabilityScalarFieldEnum[];
};
/**
 * ProgrammerProfile.notifications
 */
export type ProgrammerProfile$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * ProgrammerProfile.bookings
 */
export type ProgrammerProfile$bookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: Prisma.BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where?: Prisma.BookingWhereInput;
    orderBy?: Prisma.BookingOrderByWithRelationInput | Prisma.BookingOrderByWithRelationInput[];
    cursor?: Prisma.BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingScalarFieldEnum | Prisma.BookingScalarFieldEnum[];
};
/**
 * ProgrammerProfile without action
 */
export type ProgrammerProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammerProfile
     */
    select?: Prisma.ProgrammerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgrammerProfile
     */
    omit?: Prisma.ProgrammerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgrammerProfileInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ProgrammerProfile.d.ts.map
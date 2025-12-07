import { Prisma } from "../../../generated/prisma/client";
import { AsesoriaFiltersDTO } from "../api/dto/input";
export declare function generateAsesoriaFilters(q: AsesoriaFiltersDTO): {
    filters: {
        where: Prisma.BookingWhereInput;
    };
};
export type AsesoriaFilters = {
    where: Prisma.BookingWhereInput;
    orderBy?: Prisma.BookingOrderByWithRelationInput;
};
//# sourceMappingURL=AsesoriaFilters.d.ts.map
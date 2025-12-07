import { Prisma } from "../../../generated/prisma/client";
import { PortafolioFiltersDTO } from "../api/dto/input";
export declare function generatePortafolioFiltres(q: PortafolioFiltersDTO): {
    filters: {
        where: Prisma.PortfolioWhereInput;
    };
};
export type PortfolioFilters = {
    where: Prisma.PortfolioWhereInput;
    orderBy?: Prisma.PortfolioOrderByWithRelationInput;
};
//# sourceMappingURL=PortafolioFilters.d.ts.map
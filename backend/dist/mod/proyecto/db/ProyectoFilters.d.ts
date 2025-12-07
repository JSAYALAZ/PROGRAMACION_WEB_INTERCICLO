import { Prisma } from "src/generated/prisma/client";
import { ProyectFiltersDTO } from "../api/dto/input";
export declare function generateProyectoFiltres(q: ProyectFiltersDTO): {
    filters: {
        where: Prisma.ProjectWhereInput;
    };
};
export type ProjectFilters = {
    where: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput;
};
//# sourceMappingURL=ProyectoFilters.d.ts.map
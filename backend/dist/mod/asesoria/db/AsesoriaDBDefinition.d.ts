import { Prisma } from "src/generated/prisma/client";
import { Asesoria } from "../domain/models/Asesoria";
import { AsesoriaFilters } from "./AsesoriaFilters";
export interface AsesoriaDBDefinition {
    list(q?: AsesoriaFilters, tx?: Prisma.TransactionClient): Promise<Asesoria[]>;
    save(data: Asesoria): Promise<string>;
    getById(id: string): Promise<Asesoria>;
}
//# sourceMappingURL=AsesoriaDBDefinition.d.ts.map
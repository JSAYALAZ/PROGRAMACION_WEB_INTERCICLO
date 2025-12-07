import { Prisma } from "src/generated/prisma/client";
import { Portafolio } from "../domain/models/Portafolio";
export interface PortafolioDbDefinition {
    list(q?: any, tx?: Prisma.TransactionClient): Promise<Portafolio[]>;
    save(data: Portafolio): Promise<string>;
    getById(id: string): Promise<Portafolio>;
    getByProgrammerId(ownerId: string): Promise<Portafolio>;
}
//# sourceMappingURL=PortafolioDbDefinition.d.ts.map
import { Prisma } from "../../../generated/prisma/client";
import { PerfilProgramador } from "../domain/models/PerfilProgramador";
export interface ProgrammerProfileDbDefinition {
    list(q?: any, tx?: Prisma.TransactionClient): Promise<PerfilProgramador[]>;
    save(data: PerfilProgramador): Promise<string>;
    getById(id: string): Promise<PerfilProgramador>;
    getByUserId(id: string): Promise<PerfilProgramador>;
}
//# sourceMappingURL=ProgrammerProfileDbDefinition.d.ts.map
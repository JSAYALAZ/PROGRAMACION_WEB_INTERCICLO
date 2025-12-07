import { Prisma } from "../../../generated/prisma/client";
import { Usuario } from "../domain/models/Usuario";
export interface UserDbDefinition {
    list(q?: any, tx?: Prisma.TransactionClient): Promise<Usuario[]>;
    save(data: Usuario): Promise<Usuario>;
    getById(id: string): Promise<Usuario>;
    getByFirebaseId(id: string): Promise<Usuario>;
}
//# sourceMappingURL=UserDbDefinition.d.ts.map
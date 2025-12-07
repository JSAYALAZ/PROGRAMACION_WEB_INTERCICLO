
import { Prisma } from "../../../generated/prisma/client";
import { PerfilProgramador } from "../domain/models/PerfilProgramador";

export interface ProgrammerProfileDbDefinition {
list(q?: any,tx?:Prisma.TransactionClient): Promise<PerfilProgramador[]>;
save(data: PerfilProgramador): Promise<string>;
getById(id:string): Promise<PerfilProgramador>;
getByUserId(id:string): Promise<PerfilProgramador>;
// count(where: Prisma.UserWhereInput,tx?:Prisma.TransactionClient): Promise<number>;
//   getById(id: string,tx?:Prisma.TransactionClient): Promise<Usuario>;

//   save(data:Usuario,tx?: Prisma.TransactionClient): Promise<string>;
//   delete(id: string,tx?:Prisma.TransactionClient): Promise<void>;

  }

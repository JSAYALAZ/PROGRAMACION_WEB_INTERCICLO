
import { Prisma } from "src/generated/prisma/client";
import { Usuario } from "../domain/models/Usuario";

export interface UserDbDefinition {
list(q?: any,tx?:Prisma.TransactionClient): Promise<Usuario[]>;
save(data: Usuario): Promise<string>;
// count(where: Prisma.UserWhereInput,tx?:Prisma.TransactionClient): Promise<number>;
//   getById(id: string,tx?:Prisma.TransactionClient): Promise<Usuario>;

//   save(data:Usuario,tx?: Prisma.TransactionClient): Promise<string>;
//   delete(id: string,tx?:Prisma.TransactionClient): Promise<void>;

  }

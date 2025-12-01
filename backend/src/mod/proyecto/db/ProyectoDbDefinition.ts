
import { Prisma } from "src/generated/prisma/client";
import { Proyecto } from "../domain/models/Proyecto";

export interface ProyectoDbDefinition {
list(q?: any,tx?:Prisma.TransactionClient): Promise<Proyecto[]>;
save(data: Proyecto): Promise<string>;
// count(where: Prisma.UserWhereInput,tx?:Prisma.TransactionClient): Promise<number>;
//   getById(id: string,tx?:Prisma.TransactionClient): Promise<Usuario>;

//   save(data:Usuario,tx?: Prisma.TransactionClient): Promise<string>;
//   delete(id: string,tx?:Prisma.TransactionClient): Promise<void>;

  }

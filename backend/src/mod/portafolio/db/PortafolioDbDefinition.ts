import { Prisma } from "src/generated/prisma/client";
import { Portafolio } from "../domain/models/Portafolio";

export interface PortafolioDbDefinition {
  list(q?: any, tx?: Prisma.TransactionClient): Promise<Portafolio[]>;
  save(data: Portafolio): Promise<string>;
  getById(id: string): Promise<Portafolio>;
  // count(where: Prisma.UserWhereInput,tx?:Prisma.TransactionClient): Promise<number>;
  //   getById(id: string,tx?:Prisma.TransactionClient): Promise<Usuario>;

  //   save(data:Usuario,tx?: Prisma.TransactionClient): Promise<string>;
  //   delete(id: string,tx?:Prisma.TransactionClient): Promise<void>;
}

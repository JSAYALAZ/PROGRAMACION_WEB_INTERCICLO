import { Prisma } from "src/generated/prisma/client";
import { Disponibilidad } from "../domain/models/Disponibilidad";

export interface DisponibilidadDbDefinition {
  list(q?: any, tx?: Prisma.TransactionClient): Promise<Disponibilidad[]>;
  save(data: Disponibilidad): Promise<string>;
  getById(id: string): Promise<Disponibilidad>;
  // count(where: Prisma.UserWhereInput,tx?:Prisma.TransactionClient): Promise<number>;
  //   getById(id: string,tx?:Prisma.TransactionClient): Promise<Usuario>;

  //   save(data:Usuario,tx?: Prisma.TransactionClient): Promise<string>;
  //   delete(id: string,tx?:Prisma.TransactionClient): Promise<void>;
}

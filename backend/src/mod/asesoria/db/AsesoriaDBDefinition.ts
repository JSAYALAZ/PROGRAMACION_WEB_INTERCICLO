
import { Prisma } from "../../../generated/prisma/client";
import { Asesoria } from "../domain/models/Asesoria";
import { AsesoriaFilters } from "./AsesoriaFilters";

export interface AsesoriaDBDefinition {
  list(q?: AsesoriaFilters, tx?: Prisma.TransactionClient): Promise<Asesoria[]>;
  save(data: Asesoria): Promise<string>;
  getById(id: string): Promise<Asesoria>;
  // count(where: Prisma.UserWhereInput,tx?:Prisma.TransactionClient): Promise<number>;
  //   getById(id: string,tx?:Prisma.TransactionClient): Promise<Usuario>;

  //   save(data:Usuario,tx?: Prisma.TransactionClient): Promise<string>;
  //   delete(id: string,tx?:Prisma.TransactionClient): Promise<void>;
}
